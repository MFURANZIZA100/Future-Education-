import  Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import EventCard from '../components/EventCard';
import MediaGallery from '../components/MediaGallery';
import { mockCourses, mockEvents, mockMedia } from '../data/mockData';

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Courses</h2>
            <p className="mt-4 text-lg text-gray-500">Discover our most popular programs designed for success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/courses" className="btn btn-outline">View All Courses</a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Upcoming Events</h2>
            <p className="mt-4 text-lg text-gray-500">Join us for these exciting opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/events" className="btn btn-outline">View All Events</a>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Campus Gallery</h2>
            <p className="mt-4 text-lg text-gray-500">Explore our modern facilities and vibrant community.</p>
          </div>
          <MediaGallery media={mockMedia} />
        </div>
      </section>
      
      <section className="py-16 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Ready to Shape Your Future?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join our community of learners and educators dedicated to excellence.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn bg-white text-primary-700 hover:bg-gray-100">
              Apply Now
            </button>
            <button className="btn bg-transparent border-2 border-white text-white hover:bg-primary-600">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
 