import EmailLayout from '@/components/EmailLayout';
import { mockEmails } from '@/data/mockData';

export default function Home() {
  return (
    <main className="h-screen">
      <EmailLayout emails={mockEmails} />
    </main>
  );
}
