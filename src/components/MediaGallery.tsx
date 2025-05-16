import  { Media } from '../types';
import { Image } from 'lucide-react';

interface MediaGalleryProps {
  media: Media[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {media.map((item) => (
        <div key={item.id} className="card group overflow-hidden">
          <div className="relative aspect-w-16 aspect-h-9">
            <img 
              src={`${item.filePath}?fit=fillmax&h=300&w=400`} 
              alt={item.title} 
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
              <div className="p-2 bg-white rounded-full">
                <Image className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.uploadedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
 