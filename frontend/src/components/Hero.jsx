import { NavLink } from "react-router-dom";
import useThemeDetector from "../hooks/useThemeDetector";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const isDark = useThemeDetector();

  return (
    <section
      className="relative flex flex-col justify-center items-center text-center 
      h-[92vh] px-6 bg-linear-to-br from-base-100 via-base-200 to-base-300 
      dark:from-gray-950 dark:to-gray-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay - No transition to prevent flash */}
      <div
        className={`absolute inset-0 backdrop-blur-sm ${
          isDark ? "bg-black/70" : "bg-white/75"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Top tagline */}
        <div className="mb-4">
          <p className="text-base-content/80 text-lg tracking-widest">
            Code. Create. Conquer 🚀
          </p>
        </div>

        {/* Main heading */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:whitespace-nowrap">
            Welcome to{" "}
            <span className="text-primary">
              College Coders
            </span>
          </h1>
        </div>

        {/* Typing animation */}
        <div className="mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary min-h-10">
            <TypeAnimation
              sequence={[
                "Learn HTML",
                2000,
                "Learn CSS",
                2000,
                "Learn JavaScript",
                2000,
                "Learn React",
                2000,
                "Learn C",
                2000,
                "Learn Python",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              className="text-primary"
            />
          </h2>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-base-content/70 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Learn modern technologies step by step — build real projects, enhance
            your coding skills, and join our growing community of enthusiastic
            developers today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <NavLink
            to="/courses"
            className="btn btn-primary text-white px-8 shadow-lg hover:scale-105 transition-transform"
          >
            Start Learning
          </NavLink>
          <NavLink
            to="/blog"
            className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8 transition-transform hover:scale-105"
          >
            Explore Articles
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;