import { Email, Folder } from '@/types/email';

export const mockEmails: Email[] = [
  {
    id: '1',
    from: {
      name: 'William Smith',
      email: 'williamsmith@example.com',
      avatar: 'WS'
    },
    subject: 'Meeting Tomorrow',
    content: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    timestamp: 'Oct 22, 2023, 9:00:00 AM',
    labels: ['meeting', 'work', 'important'],
    read: false
  },
  // ... 可以添加更多邮件
];

export const folders: Folder[] = [
  { name: 'Inbox', count: 128, icon: '📥' },
  { name: 'Drafts', count: 9, icon: '📝' },
  { name: 'Sent', count: 0, icon: '📤' },
  { name: 'Junk', count: 23, icon: '🗑️' },
  { name: 'Trash', count: 0, icon: '🗑️' },
  { name: 'Archive', count: 0, icon: '📦' },
]; 