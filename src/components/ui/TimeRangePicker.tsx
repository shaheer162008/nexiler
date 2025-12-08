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
  { value: "9:00-10:00", label: "9:00 AM - 10:00 AM" },
  { value: "10:00-11:00", label: "10:00 AM - 11:00 AM" },
  { value: "11:00-12:00", label: "11:00 AM - 12:00 PM" },
  { value: "12:00-13:00", label: "12:00 PM - 1:00 PM" },
  { value: "13:00-14:00", label: "1:00 PM - 2:00 PM" },
  { value: "14:00-15:00", label: "2:00 PM - 3:00 PM" },
  { value: "15:00-16:00", label: "3:00 PM - 4:00 PM" },
  { value: "16:00-17:00", label: "4:00 PM - 5:00 PM" },
  { value: "17:00-18:00", label: "5:00 PM - 6:00 PM" },
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
            className="absolute z-50 w-full mt-2 py-2 bg-[#00040F] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl max-h-60 overflow-y-auto custom-scrollbar"
          >
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot.value}
                type="button"
                onClick={() => handleSelect(slot.value)}
                className={`w-full px-4 py-3 text-left transition-all duration-200 ${
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
