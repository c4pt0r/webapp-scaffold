import { Email } from '@/types/email';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import EmailView from './EmailView';

interface EmailLayoutProps {
  emails: Email[];
}

export default function EmailLayout({ emails }: EmailLayoutProps) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex flex-1">
        <EmailList emails={emails} />
        <EmailView email={emails[0]} />
      </div>
    </div>
  );
} 