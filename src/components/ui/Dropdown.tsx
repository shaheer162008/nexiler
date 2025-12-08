"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  options: DropdownOption[];
  placeholder?: string;
  required?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

export default function Dropdown({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
  label,
  icon,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const handleSelect = (optionValue: string) => {
    onChange({
      target: {
        name,
        value: optionValue,
      },
    });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
          {icon && <span className="inline-block mr-1">{icon}</span>}
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
        <ChevronDown 
          size={18} 
          className={`text-white/60 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
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
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-4 py-3 text-left flex items-center justify-between transition-all duration-200 ${
                  value === option.value
                    ? 'bg-primary/20 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <Check size={16} className="text-primary" />
                )}
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
