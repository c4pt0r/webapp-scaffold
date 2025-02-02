"use client"
import { folders } from '@/data/mockData';
import { useState } from 'react';

export default function Sidebar() {
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  return (
    <div className="w-64 border-r bg-gray-50 p-4">
      <button 
        onClick={() => setIsComposeOpen(true)}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white mb-6"
      >
        Compose
      </button>
      
      <nav>
        {folders.map((folder) => (
          <a
            key={folder.name}
            href="#"
            className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <span>{folder.icon}</span>
              <span>{folder.name}</span>
            </div>
            {folder.count > 0 && (
              <span className="text-sm text-gray-500">{folder.count}</span>
            )}
          </a>
        ))}
      </nav>

      {isComposeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">New Message</h2>
              <button 
                onClick={() => setIsComposeOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <input
              type="text"
              placeholder="To"
              className="w-full border rounded-lg px-3 py-2 mb-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-3 py-2 mb-3"
            />
            <textarea
              placeholder="Write your message..."
              className="w-full border rounded-lg px-3 py-2 h-48 mb-4"
            />
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsComposeOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 