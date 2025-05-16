import  { mockCourses } from '../data/mockData';
import CourseCard from '../components/CourseCard';
import { Search } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Our Courses</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to prepare you for the future.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search for courses"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          {mockCourses.map((course) => (
            <CourseCard key={`duplicate-${course.id}`} course={{ ...course, id: course.id + 10 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
 