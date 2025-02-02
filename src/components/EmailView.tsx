import { Email } from '@/types/email';

interface EmailViewProps {
  email: Email;
}

export default function EmailView({ email }: EmailViewProps) {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">{email.subject}</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              {email.from.avatar}
            </div>
            <div>
              <h2 className="font-medium">{email.from.name}</h2>
              <p className="text-sm text-gray-600">{email.from.email}</p>
            </div>
          </div>
          <div className="text-sm text-gray-500">{email.timestamp}</div>
        </div>

        {email.labels.length > 0 && (
          <div className="flex gap-2 mb-4">
            {email.labels.map((label) => (
              <span
                key={label}
                className="px-2 py-1 text-sm bg-gray-100 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="text-gray-800 whitespace-pre-line">{email.content}</div>
    </div>
  );
} 