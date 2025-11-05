import { FaClock, FaBook, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import thumb1 from "../assets/courses/HTML&CSS.jpg";
import thumb2 from "../assets/courses/GIT&GITHUB.jpg";
import thumb3 from "../assets/courses/JAVASCRIPT.jpg";
import { NavLink } from "react-router-dom";

export default function CoursesShowcase() {
  // Hardcoded course data - Replace with your actual YouTube video details
  const courses = [
    {
      id: 1,
      title: "HTML & CSS Full Course in 6 Hours",
      description:
        "A complete beginner to advanced tutorial designed to help you master web development from scratch.",
      thumbnail: thumb1, // Fixed: removed curly braces
      videoUrl: "https://www.youtube.com/watch?v=TIRRNHfcjl8",
      duration: "06:21:14",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Git & GitHub Full Course in 6 Easy Steps",
      description:
        "Learn the entire version control and collaboration process in just 6 easy steps with real-time examples.",
      thumbnail: thumb2, // Fixed: removed curly braces
      videoUrl: "https://www.youtube.com/watch?v=PdiLYruKPxI",
      duration: "00:50:06",
      level: "Beginner",
    },
    {
      id: 3,
      title: "Complete JavaScript Course in Telugu",
      description:
        "Learn JavaScript from scratch to advanced with real-world examples explained in simple Telugu language.",
      thumbnail: thumb3, // Fixed: removed curly braces
      videoUrl: "https://www.youtube.com/watch?v=Flkm2aear6A",
      duration: "11:33:29",
      level: "Intermediate",
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30";
      case "Intermediate":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30";
      case "Advanced":
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30";
      default:
        return "bg-primary/10 text-primary border border-primary/30";
    }
  };

  return (
    <section
      className="relative overflow-hidden flex items-center py-12 bg-linear-to-br from-base-100 via-base-200 to-base-100 dark:from-base-300 dark:via-base-200 dark:to-base-300"
    >
      {/* Decorative background */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/30">
            <FaGraduationCap className="text-primary text-base" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Featured Courses
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content mb-3 leading-tight">
            Start Your Journey to{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Mastery
            </span>
          </h2>

        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="relative h-full bg-base-100 dark:bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-300/50 hover:border-primary/40 flex flex-col">
                {/* Gradient overlay background */}
                <div
                  className={`absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video bg-base-300 rounded-t-2xl">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Level badge */}
                  <div className="absolute bottom-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${getLevelColor(
                        course.level
                      )} shadow-md`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-semibold shadow-md">
                      <FaClock className="text-primary text-xs" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-black text-base-content mb-2 group-hover:text-primary transition-colors leading-snug min-h-10">
                    {course.title}
                  </h3>

                  <p className="text-base-content/70 text-xs mb-4 leading-relaxed flex-1 min-h-14">
                    {course.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-base-300/50">
                    <span className="text-primary font-bold text-sm flex items-center gap-1.5">
                      <FaBook className="text-xs" />
                      Start Learning
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                      <FaArrowRight className="text-sm text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <NavLink
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>View All Courses</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
