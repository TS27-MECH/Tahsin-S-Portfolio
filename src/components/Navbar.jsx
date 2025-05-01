import { useEffect } from "react";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Name and Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#home" className="font-mono text-xl font-bold text-white flex items-center space-x-2">
              <span>
                Tahsin<span className="text-blue-500">.S</span>
              </span>
            </a>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/tahsin-sarker-b9777b363/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-transform duration-300 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574062964598"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300 text-xl"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://github.com/TS27-MECH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300 text-xl"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Right side - Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
