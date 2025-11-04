import { NavLink } from "react-router-dom";
import { TbCode, TbMenu2, TbX } from "react-icons/tb";
import ThemeController from "./ThemeController";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-base hover:text-primary ${isActive ? "text-primary" : ""}`;

  return (
    <nav className="navbar bg-base-200 px-6 h-6 lg:px-18 sticky top-0 z-50">
      <div className="flex-1 flex items-center gap-2">
        <TbCode className="text-4xl text-primary" />
        <h1 className="text-2xl font-extrabold cursor-pointer">
          College<span className="text-primary"> Coders</span>
        </h1>
      </div>

      {/* Desktop Menu - now shows only on lg screens and up */}
      <ul className="menu menu-horizontal px-1 hidden lg:flex gap-7 text-sm">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
        <li>
          <ThemeController />
        </li>
      </ul>

      {/* Mobile Menu Button - now shows on medium and small screens */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <TbX /> : <TbMenu2 />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="menu absolute top-full right-0 bg-base-200 w-full lg:hidden shadow-lg z-50">
          <li>
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <ThemeController />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;