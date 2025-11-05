import { FaTimes, FaYoutube } from "react-icons/fa";

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-base-100 dark:bg-base-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-base-200/80 dark:bg-base-100/80 rounded-full flex items-center justify-center text-base-content/70 hover:text-error hover:bg-base-200 dark:hover:bg-base-100 transition-all backdrop-blur-sm"
          aria-label="Close"
        >
          <FaTimes className="text-base sm:text-xl" />
        </button>

        {/* Video Player */}
        <div className="bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            className="w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-base-content leading-tight flex-1">
              {video.title}
            </h2>

            {/* Open in YouTube Button */}
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-red-700 transition whitespace-nowrap self-start sm:self-auto"
            >
              <FaYoutube className="text-sm sm:text-base" />
              <span>Open in YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}