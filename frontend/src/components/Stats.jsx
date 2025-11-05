import { useEffect, useState, useRef } from "react";
import { FaYoutube, FaUsers, FaVideo, FaPlay } from "react-icons/fa";

const useCountUp = (end = 0, duration = 1500, shouldStart = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);
  return count;
};

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const API_URL =
    "https://api.socialcounts.org/youtube-live-subscriber-count/UCDcT0Ejj2PlQxJrdfk9tq6g";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Stats API failed:", e);
        setLoading(false);
      });
  }, []);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 30% of section is visible
    );

    const curr = sectionRef.current;

    if (curr) {
      observer.observe(curr);
    }

    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, [hasAnimated]);

  const subscribers = stats?.API_sub ?? 0;
  const views =
    stats?.table?.find((x) => x.name === "Channel Views")?.count ?? 0;
  const videos = stats?.table?.find((x) => x.name === "Videos")?.count ?? 0;

  const subCount = useCountUp(subscribers, 1500, hasAnimated);
  const viewCount = useCountUp(views, 1500, hasAnimated);
  const videoCount = useCountUp(videos, 1500, hasAnimated);

  const statsData = [
    {
      icon: FaVideo,
      count: videoCount,
      label: "Quality Videos",
      description: "Hands-on tutorials & projects",
    },
    {
      icon: FaUsers,
      count: subCount,
      label: "Amazing Subscribers",
      description: "Thank you for your support! ❤️",
    },
    {
      icon: FaYoutube,
      count: viewCount,
      label: "Total Views",
      description: "Empowering coders worldwide",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 bg-linear-to-br from-primary/5 via-base-100 to-primary/5 dark:from-primary/10 dark:via-base-300 dark:to-primary/10"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 backdrop-blur-sm border border-primary/30">
            <FaPlay className="text-primary text-base" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              YOUTUBE STATS
            </span>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content mb-9">
              Growing Together,{" "}
              <span className="text-primary">One Video at a Time</span>
            </h2>
          </div>

          <p className="text-base-content/70 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Join our thriving community of passionate learners and developers.
            Every subscriber fuels our mission to make coding accessible! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-base-200 dark:bg-base-100 rounded-2xl p-8 shadow-xl hover:shadow-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/20 hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-3xl text-primary" />
                  </div>
                  <h3 className="text-4xl font-black text-base-content mb-2">
                    {loading ? (
                      <span className="text-primary animate-pulse">...</span>
                    ) : (
                      `${stat.count.toLocaleString()}+`
                    )}
                  </h3>
                  <p className="text-base-content/70 font-bold uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                  <p className="text-base-content/50 text-xs mt-2">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <div className="mb-4">
            <p className="text-base-content/60 text-sm mb-4">
              Want to be part of our journey?
            </p>
          </div>
          <a
            href="https://youtube.com/@collegecoders1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaYoutube className="text-xl" />
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
