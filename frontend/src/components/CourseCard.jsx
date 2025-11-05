import { FaClock, FaBook, FaUser, FaArrowRight } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

      {/* Card */}
      <div className="relative h-full bg-base-100 dark:bg-base-200 rounded-2xl overflow-hidden border-2 border-base-300/50 group-hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-xl group-hover:shadow-2xl flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-base-100 dark:from-base-200 to-transparent opacity-60"></div>

          {/* Badge */}
          {course.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
              {course.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-base-content mb- line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>
          </div>

          {/* Description */}
          <div className="mb-5">
            <p className="text-base-content/70 text-sm mb-4 line-clamp-2 flex-1">
              {course.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-4 text-xs text-base-content/60">
            <div className="flex items-center gap-1.5">
              <FaUser className="text-primary" />
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaClock className="text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaBook className="text-primary" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-base-content/10 mb-4"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Price */}
            <div>
              {course.isFree ? (
                <span className="text-2xl font-black text-primary">FREE</span>
              ) : (
                <span className="text-base-content/50 text-sm font-semibold">
                  Coming Soon
                </span>
              )}
            </div>

            {/* Button */}
            {course.isFree ? (
              <a
                href={course.link}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
              >
                <span>View Course</span>
                <FaArrowRight className="text-sm" />
              </a>
            ) : (
              <button
                disabled
                className="px-5 py-2.5 bg-base-300 text-base-content/40 font-bold rounded-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
