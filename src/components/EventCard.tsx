import  { Event } from '../types';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card group">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={`${event.imageUrl}?fit=fillmax&h=300&w=500`} 
          alt={event.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{event.location}</span>
        </div>
        <button className="w-full btn btn-primary">View Details</button>
      </div>
    </div>
  );
}
 