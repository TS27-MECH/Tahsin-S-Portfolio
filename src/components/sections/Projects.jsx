import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Project 1",
    description:
      "A modern portfolio site showcasing animation, performance, and responsive design using React and Tailwind.",
    tech: ["", "", "", ""],
    image: "/images/project1.jpg",
    link: "https://yourproject1.com",
  },
  {
    title: "Project 2",
    description:
      "An e-commerce site with shopping cart, animations, and a powerful backend.",
    tech: ["", "", "", ""],
    image: "/images/project2.jpg",
    link: "https://yourproject2.com",
  },
  {
    title: "Project 3",
    description:
      "A creative coding visual playground using canvas and Three.js with scroll effects.",
    tech: ["", "", "", ""],
    image: "/images/project3.jpg",
    link: "https://yourproject3.com",
  },
  {
    title: "Project 4",
    description:
      "A fullstack productivity app with REST API, JWT auth, and dark mode.",
    tech: ["", "", "", ""],
    image: "/images/project4.jpg",
    link: "https://yourproject4.com",
  },
  {
    title: "Project 5",
    description:
      "Another fullstack productivity app with modern animations and performance optimizations.",
    tech: ["", "", "", ""],
    image: "/images/project4.jpg",
    link: "https://yourproject5.com",
  },
  {
    title: "Project 6",
    description:
      "An experimental interface built with Tailwind and framer-motion for elegant interactions.",
    tech: ["", "", "", ""],
    image: "/images/project4.jpg",
    link: "https://yourproject6.com",
  },
];

export const Projects = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className="bg-black text-blue-500 font-mono py-20 px-4 sm:px-6 overflow-visible"
      >
        <div className="max-w-6xl mx-auto overflow-visible relative">
          <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
            Featured Projects
          </h2>

          {/* Arrows for Desktop */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 
            w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <ChevronLeft className="text-blue-400" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 
            w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <ChevronRight className="text-blue-400" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-px-6 px-1 sm:px-4 md:px-6 scrollbar-hide"
            style={{ overflowY: "visible" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`min-w-[280px] sm:min-w-[320px] max-w-sm flex-shrink-0 
                  bg-black border border-white/10 p-6 rounded-xl 
                  transition-all duration-300 relative z-10 
                  hover:-translate-y-1 
                  hover:shadow-[0_6px_18px_rgba(59,130,246,0.2)] 
                  hover:border-blue-500/20 
                  active:shadow-[0_0_12px_rgba(59,130,246,0.4)] 
                  snap-start`}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 border border-white/10"
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 text-blue-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
