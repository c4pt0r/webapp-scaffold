"use client"
import NewsLayout from '@/components/NewsLayout';
import SearchBox from '@/components/SearchBox';
import SearchHint from '@/components/SearchHint';
import { useState, useEffect } from 'react';
import { mockStories } from '@/data/mockStories';

// Define the HackerNews story type
type Story = {
  id: number;
  title: string;
  url: string;
  score: number;
  by: string;
  time: number;
  descendants: number; // number of comments
}

export default function Home() {
  const [stories, setStories] = useState<Story[]>(mockStories);
  const [filteredStories, setFilteredStories] = useState<Story[]>(mockStories);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
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
      setFilteredStories(stories);
      return;
    }
    
    const filtered = stories.filter((story: Story) => 
      story.title.toLowerCase().includes(query.toLowerCase()) ||
      story.by.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStories(filtered);
    setIsSearchOpen(false);
  };

  return (
    <main className="h-screen">
      <SearchHint 
        onOpenSearch={() => setIsSearchOpen(true)} 
      />
      <SearchBox 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
        stories={stories}
      />
      {filteredStories && filteredStories.length > 0 ? (
        <NewsLayout stories={filteredStories} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No stories found</p>
        </div>
      )}
    </main>
  );
}
