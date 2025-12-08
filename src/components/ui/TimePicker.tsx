"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

interface TimePickerProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  label?: string;
  required?: boolean;
}

// Generate 30-minute time slots for 24 hours
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourStr = hour.toString().padStart(2, '0');
      const minuteStr = minute.toString().padStart(2, '0');
      const nextMinute = minute + 30;
      const nextHour = nextMinute >= 60 ? hour + 1 : hour;
      const nextMinuteStr = (nextMinute % 60).toString().padStart(2, '0');
      const nextHourStr = nextHour.toString().padStart(2, '0');
      
      const value = `${hourStr}:${minuteStr}-${nextHourStr}:${nextMinuteStr}`;
      
      // Format display with AM/PM
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      const displayNextHour = nextHour === 0 ? 12 : nextHour > 12 ? nextHour - 12 : nextHour;
      const period = hour < 12 ? 'AM' : 'PM';
      const nextPeriod = nextHour < 12 ? 'AM' : 'PM';
      
      const label = `${displayHour}:${minuteStr} ${period} - ${displayNextHour}:${nextMinuteStr} ${nextPeriod}`;
      
      slots.push({ value, label, hour });
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export default function TimePicker({
  id,
  name,
  value,
  onChange,
  label,
  required = false,
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const timePickerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);

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

  // Scroll to selected time when opening
  useEffect(() => {
    if (isOpen && selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isOpen]);

  const formatTime = (timeValue: string) => {
    if (!timeValue) return "Select time slot";
    const slot = TIME_SLOTS.find(s => s.value === timeValue);
    return slot ? slot.label : "Select time slot";
  };

  const handleSelect = (slotValue: string) => {
    onChange({
      target: {
        name,
        value: slotValue,
      },
    });
    setIsOpen(false);
  };

  const handleHourClick = (hour: number) => {
    setSelectedHour(selectedHour === hour ? null : hour);
  };

  // Group slots by hour
  const groupedSlots = TIME_SLOTS.reduce((acc, slot) => {
    if (!acc[slot.hour]) {
      acc[slot.hour] = [];
    }
    acc[slot.hour].push(slot);
    return acc;
  }, {} as Record<number, typeof TIME_SLOTS>);

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
        <span className={value ? 'text-white text-sm' : 'text-white/40 text-sm'}>
          {formatTime(value)}
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
            className="absolute z-50 w-full sm:w-[380px] mt-2 bg-[#00040F] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="p-4">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                Select 30-Minute Time Slot
              </div>
              
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                <div className="space-y-1">
                  {Object.entries(groupedSlots).map(([hour, slots]) => {
                    const hourNum = parseInt(hour);
                    const displayHour = hourNum === 0 ? 12 : hourNum > 12 ? hourNum - 12 : hourNum;
                    const period = hourNum < 12 ? 'AM' : 'PM';
                    const isExpanded = selectedHour === hourNum;
                    const hasSelectedSlot = slots.some(s => s.value === value);

                    return (
                      <div key={hour}>
                        {/* Hour Header */}
                        <button
                          type="button"
                          onClick={() => handleHourClick(hourNum)}
                          className={`w-full px-3 py-2 rounded-lg text-left text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                            hasSelectedSlot
                              ? 'bg-primary/20 text-white border border-primary/30'
                              : 'bg-white/5 text-white/80 hover:bg-white/10'
                          }`}
                        >
                          <span>{displayHour}:00 {period}</span>
                          <span className={`text-xs transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>

                        {/* Time Slots */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 mt-1 space-y-1">
                                {slots.map((slot) => (
                                  <div
                                    key={slot.value}
                                    ref={value === slot.value ? selectedRef : null}
                                  >
                                    <button
                                      type="button"
                                      onClick={() => handleSelect(slot.value)}
                                      className={`w-full px-3 py-2 rounded-lg text-left text-sm transition-all duration-200 ${
                                        value === slot.value
                                          ? 'bg-primary text-dark font-semibold shadow-lg shadow-primary/30'
                                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                                      }`}
                                    >
                                      {slot.label}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
