import { useState, useMemo } from 'react';

type Story = {
  id: number;
  title: string;
  url: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
}

interface NewsLayoutProps {
  stories: Story[];
}

// Helper function to format date
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric'
  });
};

// Helper function to group stories by date
const groupStoriesByDate = (stories: Story[]) => {
  const groups: { [key: string]: Story[] } = {};
  
  stories.forEach(story => {
    const dateKey = formatDate(story.time);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(story);
  });
  
  return groups;
};

export default function NewsLayout({ stories }: NewsLayoutProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(stories[0]);
  
  const groupedStories = useMemo(() => groupStoriesByDate(stories), [stories]);

  return (
    <div className="flex h-[calc(100vh-60px)]">
      {/* Left column - Story list */}
      <div className="w-1/5 border-r overflow-y-auto">
        {Object.entries(groupedStories).map(([date, dateStories]) => (
          <div key={date}>
            <div className="sticky top-0 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border-b">
              {date}
            </div>
            {dateStories.map((story) => (
              <div 
                key={story.id} 
                className={`p-3 cursor-pointer hover:bg-gray-50 border-b ${
                  selectedStory?.id === story.id ? 'bg-gray-100' : ''
                }`}
                onClick={() => setSelectedStory(story)}
              >
                <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                  {story.title}
                </h3>
                <div className="mt-1 text-xs text-gray-600">
                  {story.score} points by {story.by}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right column - Story detail */}
      <div className="w-4/5 p-6 overflow-y-auto">
        {selectedStory ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <a 
                href={selectedStory.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                {selectedStory.title}
              </a>
            </h2>
            <div className="mb-6 text-gray-600">
              <p>{selectedStory.score} points by {selectedStory.by}</p>
              <p>{new Date(selectedStory.time * 1000).toLocaleString()}</p>
              <p>{selectedStory.descendants} comments</p>
            </div>
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium mb-2">Discussion</h3>
              <p className="text-gray-600">Comments section coming soon...</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a story to view details</p>
          </div>
        )}
      </div>
    </div>
  );
} 