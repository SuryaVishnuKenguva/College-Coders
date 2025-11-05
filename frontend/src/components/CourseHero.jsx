import {
  FaClock,
  FaBook,
  FaUser,
  FaArrowLeft,
  FaYoutube,
} from "react-icons/fa";

export default function CourseHero({ course, onBack }) {
  return (
    <div className="relative overflow-hidden bg-base-300 dark:bg-base-100">
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-base-content/70 hover:text-primary mb-4 sm:mb-6 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm sm:text-base">Back to Courses</span>
        </button>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8 items-center">
          {/* Left: Course Info (3 columns) */}
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <FaYoutube className="text-primary text-sm sm:text-base" />
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                Free Course
              </span>
            </div>

            <div className="mb-3 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-base-content mb-3 sm:mb-4 leading-tight">
                {course.title}
              </h1>
            </div>

            <div className="mb-4 sm:mb-6">
              <p className="text-base-content/70 text-base sm:text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaUser className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Instructor</p>
                  <p className="font-bold text-base-content text-xs sm:text-sm">
                    {course.author}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaClock className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Duration</p>
                  <p className="font-bold text-base-content text-xs sm:text-sm">
                    {course.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaBook className="text-primary text-sm" />
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Lessons</p>
                  <p className="font-bold text-base-content text-xs sm:text-sm">
                    {course.lessons} videos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Course Image (2 columns) */}
          <div className="md:col-span-2 mt-6 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src={course.image}
                alt={course.title}
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}