'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}

const Select = ({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  required = false,
  name,
  id
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Hidden native select for form submission */}
      <select
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom Select Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-left
          focus:outline-none focus:border-nexiler transition-colors
          flex items-center justify-between
          ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'bg-white cursor-pointer hover:border-nexiler'}
          ${!selectedOption ? 'text-gray-500' : 'text-black'}
        `}
      >
        <span className="text-sm font-medium">{displayText}</span>
        <ChevronDown 
          className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full px-4 py-3 text-left text-sm font-medium
                  flex items-center justify-between
                  transition-colors
                  ${isSelected 
                    ? 'bg-nexiler-subtle text-black' 
                    : 'text-gray-700 hover:bg-nexiler-subtle'
                  }
                  ${option.value === options[options.length - 1].value ? '' : 'border-b border-gray-300'}
                `}
              >
                <span>{option.label}</span>
                {isSelected && (
                  <Check className="h-4 w-4 text-black" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
