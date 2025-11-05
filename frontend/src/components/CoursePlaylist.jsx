import { useState } from "react";
import { FaExclamationCircle, FaVideo } from "react-icons/fa";
import VideoListItem from "./VideoListItem";
import VideoModal from "./VideoModal";

export default function CoursePlayList({ videos, loading, error }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => setSelectedVideo(null);

  return (
    <div className="bg-base-100 dark:bg-base-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-base-300/50 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-base-content">
            Course Content
          </h2>
          {!loading && videos.length > 0 && (
            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              {videos.length} video{videos.length !== 1 ? "s" : ""} • Click to play
            </p>
          )}
        </div>
        {!loading && videos.length > 0 && (
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full self-start sm:self-auto">
            <FaVideo className="text-primary text-xs sm:text-sm" />
            <span className="text-primary font-bold text-xs sm:text-sm">
              {videos.length}
            </span>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12 sm:py-16">
          <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-base-content/60 text-sm sm:text-base">Loading videos...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12 sm:py-16">
          <FaExclamationCircle className="text-error text-3xl sm:text-4xl mx-auto mb-4" />
          <p className="text-error font-semibold text-sm sm:text-base">{error}</p>
        </div>
      )}

      {/* Video List */}
      {!loading && !error && videos.length > 0 && (
        <div className="space-y-2 sm:space-y-3 max-h-[600px] sm:max-h-[800px] overflow-y-auto custom-scrollbar pr-1 sm:pr-2">
          {videos.map((video) => (
            <VideoListItem
              key={video.id}
              video={video}
              onClick={() => handleVideoClick(video)}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && videos.length === 0 && (
        <div className="text-center py-12 sm:py-16 text-base-content/60">
          <FaVideo className="text-primary text-4xl sm:text-5xl mx-auto mb-4" />
          <p className="text-sm sm:text-base">No videos found in this playlist.</p>
        </div>
      )}

      {/* Modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeModal} />
      )}
    </div>
  );
}