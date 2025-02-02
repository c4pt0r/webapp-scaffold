export interface Email {
  id: string;
  from: {
    name: string;
    email: string;
    avatar?: string;
  };
  subject: string;
  content: string;
  timestamp: string;
  labels: string[];
  read: boolean;
}

export interface Folder {
  name: string;
  count: number;
  icon: string;
} 