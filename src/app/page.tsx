"use client"
import EmailLayout from '@/components/EmailLayout';
import SearchBox from '@/components/SearchBox';
import { useState, useEffect } from 'react';

export default function Home() {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/emails', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setEmails(data);
        setFilteredEmails(data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };
    
    fetchEmails();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredEmails(emails);
      return;
    }
    
    const filtered = emails.filter((email: any) => 
      email.subject?.toLowerCase().includes(query.toLowerCase()) ||
      email.body?.toLowerCase().includes(query.toLowerCase()) ||
      email.from?.name?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmails(filtered);
    setIsSearchOpen(false);
  };

  return (
    <main className="h-screen">
      <SearchBox 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
        emails={emails}
      />
      {filteredEmails && filteredEmails.length > 0 ? (
        <EmailLayout emails={filteredEmails} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No emails found</p>
        </div>
      )}
    </main>
  );
}
