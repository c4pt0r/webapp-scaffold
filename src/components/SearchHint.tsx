"use client"
import { useEffect, useState } from 'react';

interface SearchHintProps {
  onOpenSearch: () => void;
}

export default function SearchHint({ onOpenSearch }: SearchHintProps) {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'));
  }, []);

  return (
    <div 
      className="fixed top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-white/100 hover:shadow transition-all duration-200"
      onClick={onOpenSearch}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onOpenSearch();
        }
      }}
    >
      <svg 
        className="w-4 h-4 text-gray-500" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
      <span className="text-sm text-gray-600">
        Press <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
          {isMac ? '⌘' : 'Ctrl'}+K
        </kbd> to search
      </span>
    </div>
  );
} 