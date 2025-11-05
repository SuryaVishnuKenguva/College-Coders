import { useState } from "react";
import CourseFilterTabs from "../components/CourseFilterTabs";
import CourseSection from "../components/CourseSection";
import { courseData } from "../data/courseData";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("free");

  const freeCourses = {
    programming: [
      courseData["c-programming"],
      courseData["python"],
    ],
    webDevelopment: [
      courseData["html-css"],
      courseData["javascript"],
      courseData["git-github"],
    ],
  };


  return (
    <section className="relative min-h-screen bg-linear-to-br from-base-100 via-base-200 to-base-100 dark:from-base-300 dark:via-base-200 dark:to-base-300 py-20 overflow-hidden -mt-12">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content">
            Explore Our{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
        </div>

        {/* Tabs */}
        <CourseFilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Conditional Rendering */}
        {activeTab === "free" ? (
          <>
            <CourseSection
              title="Programming Languages"
              courses={freeCourses.programming.map((course) => ({
                id: course.slug,
                title: course.title,
                description: course.description,
                image: course.image,
                instructor: course.author,
                duration: course.duration,
                lessons: course.lessons,
                badge: "Free",
                isFree: true,
                link: `/courses/${course.slug}`,
              }))}
            />

            <CourseSection
              title="Web Development"
              courses={freeCourses.webDevelopment.map((course) => ({
                id: course.slug,
                title: course.title,
                description: course.description,
                image: course.image,
                instructor: course.author,
                duration: course.duration,
                lessons: course.lessons,
                badge: "Free",
                isFree: true,
                link: `/courses/${course.slug}`,
              }))}
            />
          </>
        ) : (
          // ✅ "Coming Soon" message for Paid Courses
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-center mt-12">
            <div className="bg-base-200 dark:bg-base-100 rounded-2xl p-10 shadow-xl border border-base-300/50 max-w-lg">
              <div className="mb-4">
                <h2 className="text-3xl font-black text-base-content mb-4">
                  🚀 Paid Courses
                </h2>
              </div>
              <p className="text-base-content/70 text-sm sm:text-base leading-relaxed">
                We’re crafting premium in-depth tutorials and masterclasses for
                you. Stay tuned — they’re coming soon!
              </p>
              <div className="mt-6">
                <span className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow-lg animate-pulse">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
