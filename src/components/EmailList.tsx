import { Email } from '@/types/email';

interface EmailListProps {
  emails: Email[];
}

export default function EmailList({ emails }: EmailListProps) {
  return (
    <div className="w-96 border-r overflow-auto">
      {emails.map((email) => (
        <div
          key={email.id}
          className={`border-b p-4 cursor-pointer hover:bg-gray-50 ${
            !email.read ? 'bg-blue-50' : ''
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              {email.from.avatar}
            </div>
            <div className="flex-1">
              <h3 className={`font-medium ${!email.read ? 'font-bold' : ''}`}>
                {email.from.name}
              </h3>
            </div>
            <span className="text-sm text-gray-500">{email.timestamp}</span>
          </div>
          <h4 className={`mb-1 ${!email.read ? 'font-bold' : ''}`}>
            {email.subject}
          </h4>
          <p className="text-sm text-gray-600 truncate">{email.content}</p>
        </div>
      ))}
    </div>
  );
} 