"use client"
import { useEffect, useState } from 'react';

interface Email {
  id: string;
  subject: string;
  from: {
    name: string;
    email: string;
  };
  body: string;
}

interface SearchBoxProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  emails: Email[];
}

export default function SearchBox({ isOpen, onClose, onSearch, emails }: SearchBoxProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Email[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [isOpen]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = emails.filter(email => 
      email.subject?.toLowerCase().includes(query.toLowerCase()) ||
      email.body?.toLowerCase().includes(query.toLowerCase()) ||
      email.from?.name?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    setSearchResults(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[20vh] z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="p-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search emails..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="mt-2 text-sm text-gray-500 flex justify-between">
            <span>Press ESC to close</span>
            <span>Enter to search</span>
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="border-t border-gray-200 max-h-[300px] overflow-y-auto">
            {searchResults.map((email) => (
              <div 
                key={email.id}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-200"
                onClick={() => {
                  onSearch(email.subject);
                  onClose();
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    {email.from.name[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{email.subject}</p>
                    <p className="text-sm text-gray-500 truncate">{email.from.name}</p>
                    <p className="text-sm text-gray-500 truncate">{email.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 