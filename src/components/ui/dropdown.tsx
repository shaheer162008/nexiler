'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface DropdownProps {
  trigger: {
    label: string;
    href?: string;
  };
  items: DropdownItem[];
  columns?: 1 | 2;
  className?: string;
}

const Dropdown = ({ trigger, items, columns = 1, className = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const dropdownWidth = columns === 2 ? 'w-80' : 'w-64';

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      {trigger.href ? (
        <Link 
          href={trigger.href}
          className="px-3 py-1.5 text-sm text-black font-semibold hover:scale-110 rounded-md flex items-center gap-1 transition-transform"
        >
          {trigger.label}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
      ) : (
        <button
          className="px-3 py-1.5 text-sm text-black font-semibold hover:scale-110 rounded-md flex items-center gap-1 transition-transform"
        >
          {trigger.label}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full left-0 mt-1 ${dropdownWidth} bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50`}>
          <div className={`grid ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
            {columns === 2 ? (
              <>
                <div className="space-y-2">
                  {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-black hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="font-semibold">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-gray-600 mt-0.5">{item.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-black hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="font-semibold">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-gray-600 mt-0.5">{item.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-2">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-black hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-semibold">{item.name}</div>
                    {item.description && (
                      <div className="text-xs text-gray-600 mt-0.5">{item.description}</div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
