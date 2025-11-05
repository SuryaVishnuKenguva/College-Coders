

import { FaPlay, FaYoutube } from "react-icons/fa";

export default function VideoListItem({ video, onClick }) {
  return (
    <div
      onClick={() => onClick(video)}
      className="cursor-pointer group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-base-200 dark:bg-base-100 hover:bg-primary/5 border border-base-300/50 hover:border-primary/50 transition-all hover:shadow-lg"
    >
      {/* Video Number Badge */}
      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
        <span className="text-primary group-hover:text-white font-black text-xs sm:text-sm">
          {video.position}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="relative shrink-0 w-28 h-16 sm:w-40 sm:h-24 rounded-lg overflow-hidden shadow-md">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <FaPlay className="text-primary text-sm sm:text-lg ml-0.5 sm:ml-1" />
          </div>
        </div>

        {/* YouTube Badge */}
        <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-red-600 text-white p-0.5 sm:p-1 rounded">
          <FaYoutube className="text-[10px] sm:text-xs" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 py-1">
        <h4 className="text-base-content font-bold group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-tight">
          {video.title}
        </h4>
        {video.description && (
          <p className="text-base-content/60 text-xs line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        )}
      </div>

      {/* Arrow Indicator - Hidden on mobile */}
      <div className="hidden sm:flex shrink-0 self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <FaPlay className="text-primary text-xs" />
        </div>
      </div>
    </div>
  );
}