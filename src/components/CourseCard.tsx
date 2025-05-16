import  { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="card group">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={`${course.imageUrl}?fit=fillmax&h=300&w=500`} 
          alt={course.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{course.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>Instructor: {course.instructor}</span>
        </div>
        <button className="w-full btn btn-primary">View Course</button>
      </div>
    </div>
  );
}
 