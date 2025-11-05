import CourseCard from './CourseCard';

export default function CourseSection({ title, courses }) {
  return (
    <div className="mb-12 sm:mb-16">
      {/* Section Title */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-base-content mb-2 relative inline-block">
          {title}
        </h2>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}