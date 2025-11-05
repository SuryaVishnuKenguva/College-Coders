import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function CourseInfoSection({ course }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* What You'll Learn */}
      <section className="bg-base-100 dark:bg-base-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-base-300/50">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-base-content">
            What You'll Learn
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-4">
          {course.whatYouWillLearn.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              <div className="mt-1 shrink-0">
                <FaCheckCircle className="text-primary text-base sm:text-lg" />
              </div>
              <p className="text-base-content/80 text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-base-100 dark:bg-base-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-base-300/50">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-base-content">
            Requirements
          </h2>
        </div>

        <ul className="space-y-3">
          {course.requirements.map((req, index) => (
            <li
              key={index}
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              <div className="mt-1 shrink-0">
                <FaExclamationCircle className="text-primary text-base sm:text-lg" />
              </div>
              <p className="text-base-content/80 text-sm leading-relaxed">
                {req}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}