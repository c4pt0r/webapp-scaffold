import { Email } from '@/types/email';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import EmailView from './EmailView';
import { useState } from 'react';

interface EmailLayoutProps {
  emails: Email[];
}

export default function EmailLayout({ emails }: EmailLayoutProps) {
  const [selectedEmail, setSelectedEmail] = useState<Email>(emails[0]);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex flex-1">
        <EmailList emails={emails} onEmailSelect={handleEmailSelect} />
        <EmailView email={selectedEmail} />
      </div>
    </div>
  );
} 