"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  label?: string;
  required?: boolean;
  minDate?: string;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function DatePicker({
  id,
  name,
  value,
  onChange,
  label,
  required = false,
  minDate,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Select a date";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleDateSelect = (day: number) => {
    const year = currentYear;
    const month = String(currentMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const formattedDate = `${year}-${month}-${dayStr}`;
    
    onChange({
      target: {
        name,
        value: formattedDate,
      },
    });
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isDateDisabled = (day: number) => {
    if (!minDate) return false;
    const date = new Date(currentYear, currentMonth, day);
    const min = new Date(minDate);
    return date < min;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    const selected = new Date(value);
    return (
      day === selected.getDate() &&
      currentMonth === selected.getMonth() &&
      currentYear === selected.getFullYear()
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isDateDisabled(day);
      const today = isToday(day);
      const selected = isSelected(day);

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => !disabled && handleDateSelect(day)}
          disabled={disabled}
          className={`
            h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200
            ${disabled 
              ? 'text-white/20 cursor-not-allowed' 
              : 'text-white hover:bg-white/10'
            }
            ${today && !selected ? 'bg-white/5 border border-primary/30' : ''}
            ${selected ? 'bg-primary text-dark font-bold shadow-lg shadow-primary/30' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="relative" ref={datePickerRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
          <Calendar size={16} className="inline mr-1" />
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl bg-white/5 border transition-all duration-300 text-left flex items-center justify-between ${
          isOpen 
            ? 'border-primary/50 bg-white/10' 
            : 'border-white/10 hover:border-white/20'
        }`}
      >
        <span className={value ? 'text-white' : 'text-white/40'}>
          {formatDate(value)}
        </span>
        <Calendar size={18} className="text-white/60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 p-4 bg-[#00040F] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl"
          >
            {/* Month/Year Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-2 rounded-lg hover:bg-white/10 text-white transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="text-white font-semibold">
                {MONTHS[currentMonth]} {currentYear}
              </div>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-2 rounded-lg hover:bg-white/10 text-white transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Day Labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS.map(day => (
                <div key={day} className="h-8 flex items-center justify-center text-xs text-white/50 font-medium">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
