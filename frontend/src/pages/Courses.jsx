import { useState } from "react";
import CourseFilterTabs from "../components/CourseFilterTabs";
import CourseSection from "../components/CourseSection";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("free");

  const freeCourses = {
    programming: [
      {
        id: 1,
        title: "C Programming For Beginners - Learn C Language from Scratch",
        description:
          "Master the fundamentals of C programming with hands-on projects and real-world examples.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        instructor: "CodeWithHarry",
        duration: "9h 5m",
        lessons: 62,
        badge: "Popular",
        isFree: true,
        link: "/courses/c-programming",
      },
      {
        id: 2,
        title: "Complete 2025 Python Bootcamp: Learn Python from Scratch",
        description:
          "Unlock your potential and become a confident Python developer with this comprehensive course.",
        image:
          "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
        instructor: "CodeWithHarry",
        duration: "17h 17m",
        lessons: 106,
        badge: "New",
        isFree: true,
        link: "/courses/python",
      },
    ],
    webDevelopment: [
      {
        id: 3,
        title: "HTML & CSS Complete Course - Build Modern Websites",
        description:
          "Learn HTML5 and CSS3 from scratch and build beautiful, responsive websites.",
        image:
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
        instructor: "CodeWithHarry",
        duration: "12h 30m",
        lessons: 85,
        badge: "Beginner Friendly",
        isFree: true,
        link: "/courses/html-css",
      },
      {
        id: 4,
        title: "JavaScript Complete Guide - From Zero to Hero",
        description:
          "Master JavaScript with projects, exercises and real-world applications.",
        image:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80",
        instructor: "CodeWithHarry",
        duration: "15h 45m",
        lessons: 120,
        badge: "Most Popular",
        isFree: true,
        link: "/courses/javascript",
      },
      {
        id: 5,
        title: "Git & GitHub Complete Guide - Version Control Mastery",
        description:
          "Learn Git version control and GitHub collaboration from basics to advanced.",
        image:
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
        instructor: "CodeWithHarry",
        duration: "6h 20m",
        lessons: 45,
        badge: "Essential",
        isFree: true,
        link: "/courses/git-github",
      },
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
              courses={freeCourses.programming}
            />
            <CourseSection
              title="Web Development"
              courses={freeCourses.webDevelopment}
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
