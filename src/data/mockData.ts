import  { Media, Course, Event } from '../types';

export const mockMedia: Media[] = [
  {
    id: 1,
    title: 'Campus Tour',
    filePath: 'https://images.unsplash.com/photo-1731349219592-60ca16964631',
    type: 'image',
    uploadedAt: '2023-06-15'
  },
  {
    id: 2,
    title: 'New School Building',
    filePath: 'https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c',
    type: 'image',
    uploadedAt: '2023-06-10'
  },
  {
    id: 3,
    title: 'Modern Architecture',
    filePath: 'https://images.unsplash.com/photo-1732284081114-65109fd62f5d',
    type: 'image',
    uploadedAt: '2023-06-05'
  },
  {
    id: 4,
    title: 'Kane Hall',
    filePath: 'https://images.unsplash.com/photo-1741636371794-2925a472dbb0',
    type: 'image',
    uploadedAt: '2023-05-20'
  }
];

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Modern Mathematics',
    description: 'Advanced mathematical concepts for future engineers.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    instructor: 'Dr. Emma Watson'
  },
  {
    id: 2,
    title: 'Digital Technologies',
    description: 'Exploring cutting-edge technologies in the digital world.',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab10e6d3f89',
    instructor: 'Prof. John Anderson'
  },
  {
    id: 3,
    title: 'Environmental Science',
    description: 'Understanding our environment and sustainable practices.',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    instructor: 'Dr. Sarah Miller'
  }
];

export const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Annual Science Fair',
    date: '2023-07-15',
    location: 'Main Campus',
    imageUrl: 'https://images.unsplash.com/photo-1529007196863-d025d7617f40'
  },
  {
    id: 2,
    title: 'Graduation Ceremony',
    date: '2023-06-30',
    location: 'University Auditorium',
    imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b'
  }
];
 