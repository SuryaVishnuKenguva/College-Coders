import { useState, useEffect} from "react";
import { fetchAllPlaylistVideos } from "../utils/youtubeAPI";
import CourseHero from "../components/CourseHero";
import CourseInfoSection from "../components/CourseInfoSection";
import CourseSidebar from "../components/CourseSidebar";
import { courseData } from "../data/courseData";
import { useParams } from "react-router-dom";
import CourseList from "../components/CourseList";

export default function CourseDetail() {
  const { slug } = useParams();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const course = courseData[slug];

  useEffect(() => {
    if (!course) return;

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

    async function loadVideos() {
      try {
        setLoading(true);
        const allVideos = await fetchAllPlaylistVideos(
          course.playlistId,
          API_KEY
        );
        setVideos(allVideos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const handleBack = () => {
    window.location.href = "/courses";
  };

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
        <a href="/courses" className="btn btn-primary mt-4">
          Back to Courses
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-base-100 via-base-200 to-base-100 dark:from-base-300 dark:via-base-200 dark:to-base-300">
      {/* Hero Section */}
      <CourseHero course={course} onBack={handleBack} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column: Course Details (takes 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <CourseInfoSection course={course} />
            <CourseList videos={videos} loading={loading} error={error} />
          </div>

          {/* Right Column: Sidebar (takes 1 column on large screens) */}
          <div className="lg:col-span-1">
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
