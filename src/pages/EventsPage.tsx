import  { mockEvents } from '../data/mockData';
import EventCard from '../components/EventCard';
import { Calendar, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Upcoming Events</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Stay connected with our community through these engaging events.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100 flex items-center">
            <Calendar className="h-8 w-8 text-primary-600 mr-4" />
            <div>
              <h3 className="text-primary-800 font-medium">Academic Calendar</h3>
              <p className="text-primary-600 text-sm">View our full academic calendar to plan your year.</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary-600 ml-auto" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {mockEvents.map((event) => (
            <EventCard key={`duplicate-${event.id}`} event={{ ...event, id: event.id + 10 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
 