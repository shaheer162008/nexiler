"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

interface TimeRangePickerProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  label?: string;
  required?: boolean;
}

const TIME_SLOTS = [
  // Morning Slots (12 AM - 11:59 AM)
  { value: "00:00-00:30", label: "12:00 AM - 12:30 AM" },
  { value: "00:30-01:00", label: "12:30 AM - 1:00 AM" },
  { value: "01:00-01:30", label: "1:00 AM - 1:30 AM" },
  { value: "01:30-02:00", label: "1:30 AM - 2:00 AM" },
  { value: "02:00-02:30", label: "2:00 AM - 2:30 AM" },
  { value: "02:30-03:00", label: "2:30 AM - 3:00 AM" },
  { value: "03:00-03:30", label: "3:00 AM - 3:30 AM" },
  { value: "03:30-04:00", label: "3:30 AM - 4:00 AM" },
  { value: "04:00-04:30", label: "4:00 AM - 4:30 AM" },
  { value: "04:30-05:00", label: "4:30 AM - 5:00 AM" },
  { value: "05:00-05:30", label: "5:00 AM - 5:30 AM" },
  { value: "05:30-06:00", label: "5:30 AM - 6:00 AM" },
  { value: "06:00-06:30", label: "6:00 AM - 6:30 AM" },
  { value: "06:30-07:00", label: "6:30 AM - 7:00 AM" },
  { value: "07:00-07:30", label: "7:00 AM - 7:30 AM" },
  { value: "07:30-08:00", label: "7:30 AM - 8:00 AM" },
  { value: "08:00-08:30", label: "8:00 AM - 8:30 AM" },
  { value: "08:30-09:00", label: "8:30 AM - 9:00 AM" },
  { value: "09:00-09:30", label: "9:00 AM - 9:30 AM" },
  { value: "09:30-10:00", label: "9:30 AM - 10:00 AM" },
  { value: "10:00-10:30", label: "10:00 AM - 10:30 AM" },
  { value: "10:30-11:00", label: "10:30 AM - 11:00 AM" },
  { value: "11:00-11:30", label: "11:00 AM - 11:30 AM" },
  { value: "11:30-12:00", label: "11:30 AM - 12:00 PM" },
  
  // Afternoon/Evening Slots (12 PM - 11:59 PM)
  { value: "12:00-12:30", label: "12:00 PM - 12:30 PM" },
  { value: "12:30-13:00", label: "12:30 PM - 1:00 PM" },
  { value: "13:00-13:30", label: "1:00 PM - 1:30 PM" },
  { value: "13:30-14:00", label: "1:30 PM - 2:00 PM" },
  { value: "14:00-14:30", label: "2:00 PM - 2:30 PM" },
  { value: "14:30-15:00", label: "2:30 PM - 3:00 PM" },
  { value: "15:00-15:30", label: "3:00 PM - 3:30 PM" },
  { value: "15:30-16:00", label: "3:30 PM - 4:00 PM" },
  { value: "16:00-16:30", label: "4:00 PM - 4:30 PM" },
  { value: "16:30-17:00", label: "4:30 PM - 5:00 PM" },
  { value: "17:00-17:30", label: "5:00 PM - 5:30 PM" },
  { value: "17:30-18:00", label: "5:30 PM - 6:00 PM" },
  { value: "18:00-18:30", label: "6:00 PM - 6:30 PM" },
  { value: "18:30-19:00", label: "6:30 PM - 7:00 PM" },
  { value: "19:00-19:30", label: "7:00 PM - 7:30 PM" },
  { value: "19:30-20:00", label: "7:30 PM - 8:00 PM" },
  { value: "20:00-20:30", label: "8:00 PM - 8:30 PM" },
  { value: "20:30-21:00", label: "8:30 PM - 9:00 PM" },
  { value: "21:00-21:30", label: "9:00 PM - 9:30 PM" },
  { value: "21:30-22:00", label: "9:30 PM - 10:00 PM" },
  { value: "22:00-22:30", label: "10:00 PM - 10:30 PM" },
  { value: "22:30-23:00", label: "10:30 PM - 11:00 PM" },
  { value: "23:00-23:30", label: "11:00 PM - 11:30 PM" },
  { value: "23:30-00:00", label: "11:30 PM - 12:00 AM" },
];

export default function TimeRangePicker({
  id,
  name,
  value,
  onChange,
  label,
  required = false,
}: TimeRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timePickerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedSlot = TIME_SLOTS.find(slot => slot.value === value);
  const displayText = selectedSlot ? selectedSlot.label : "Select a time slot";

  const handleSelect = (slotValue: string) => {
    onChange({
      target: {
        name,
        value: slotValue,
      },
    });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={timePickerRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
          <Clock size={16} className="inline mr-1" />
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
          {displayText}
        </span>
        <Clock size={18} className="text-white/60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full sm:w-[300px] mt-2 py-2 bg-[#00040F] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl max-h-72 overflow-y-auto custom-scrollbar"
          >
            {/* Morning Section */}
            <div className="px-3 py-2 text-xs font-semibold text-primary uppercase tracking-wider border-b border-white/5">
              Morning (12 AM - 12 PM)
            </div>
            {TIME_SLOTS.slice(0, 24).map((slot) => (
              <button
                key={slot.value}
                type="button"
                onClick={() => handleSelect(slot.value)}
                className={`w-full px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                  value === slot.value
                    ? 'bg-primary/20 text-white font-semibold border-l-2 border-primary'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {slot.label}
              </button>
            ))}
            
            {/* Afternoon/Evening Section */}
            <div className="px-3 py-2 text-xs font-semibold text-primary uppercase tracking-wider border-t border-b border-white/5 mt-2">
              Afternoon & Evening (12 PM - 12 AM)
            </div>
            {TIME_SLOTS.slice(24).map((slot) => (
              <button
                key={slot.value}
                type="button"
                onClick={() => handleSelect(slot.value)}
                className={`w-full px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                  value === slot.value
                    ? 'bg-primary/20 text-white font-semibold border-l-2 border-primary'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {slot.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(51, 187, 207, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(51, 187, 207, 0.7);
        }
      `}</style>
    </div>
  );
}
