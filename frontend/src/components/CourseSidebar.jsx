import { FaBook, FaClock, FaYoutube, FaInfinity } from "react-icons/fa";

export default function CourseSidebar({ course }) {
  return (
    <div className="space-y-6">
      {/* CTA Card */}
      <div className="bg-primary rounded-2xl p-8 text-white shadow-2xl sticky top-24">
        <div className="mb-2">
          <h3 className="text-2xl font-black mb-3">Ready to Start?</h3>
        </div>
        <div className="mb-4">
          <p className="mb-6 text-white/90 text-sm leading-relaxed">
            Begin your learning journey with this comprehensive course —
            completely free on YouTube!
          </p>
        </div>
        <a
          href={`https://www.youtube.com/playlist?list=${course.playlistId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-lg group"
        >
          <FaYoutube className="text-xl group-hover:scale-110 transition-transform" />
          <span>Watch on YouTube</span>
        </a>
      </div>

      {/* Course Includes */}
      <div className="bg-base-100 dark:bg-base-200 rounded-2xl p-6 shadow-lg border border-base-300/50">
        <div className="mb-6">
          <h3 className="text-xl font-black text-base-content mb-5">
            This Course Includes
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <FaBook className="text-primary text-lg" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base-content text-sm">
                {course.lessons} Video Lessons
              </p>
              <p className="text-xs text-base-content/60 leading-relaxed">
                Comprehensive video tutorials covering all topics
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <FaClock className="text-primary text-lg" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base-content text-sm">
                {course.duration} Content
              </p>
              <p className="text-xs text-base-content/60 leading-relaxed">
                Hours of in-depth learning material
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <FaInfinity className="text-primary text-lg" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base-content text-sm">
                Lifetime Access
              </p>
              <p className="text-xs text-base-content/60 leading-relaxed">
                Watch anytime, anywhere, at your own pace
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <FaYoutube className="text-primary text-lg" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-base-content text-sm">100% Free</p>
              <p className="text-xs text-base-content/60 leading-relaxed">
                No hidden costs or subscription required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
