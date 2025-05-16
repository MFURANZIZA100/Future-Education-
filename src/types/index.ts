export  interface AdminUser {
  id: number;
  email: string;
}

export interface Media {
  id: number;
  title: string;
  filePath: string;
  type: 'image' | 'video';
  uploadedAt: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}
 