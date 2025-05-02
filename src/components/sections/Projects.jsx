import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const projectData = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/300x180",
    description:
      "This is a longer description for Project 1 to test layout wrapping. It should automatically wrap without breaking the card layout or overflowing.",
    tags: ["Mobile", "Responsive", "UI"],
    link: "#",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300x180",
    description: "Description for Project 2",
    tags: ["React", "Tailwind"],
    link: "#",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/300x180",
    description: "Description for Project 3",
    tags: ["JSX", "WebDev"],
    link: "#",
  },
  // Add more projects...
];

export const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.9;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="min-h-screen py-28 flex flex-col items-center">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="relative w-full max-w-6xl">
          {/* Desktop Arrows */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-blue-500/20 transition backdrop-blur"
          >
            <ChevronLeft className="text-blue-400" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-blue-500/20 transition backdrop-blur"
          >
            <ChevronRight className="text-blue-400" />
          </button>

          {/* Mobile Arrows */}
          <button
            onClick={() => scroll("left")}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="text-blue-400" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="text-blue-400" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-2 md:px-14 pt-4"
          >
            {projectData.map((project, index) => (
              <div
                key={index}
                className="w-full md:w-[320px] h-auto flex-shrink-0 snap-center p-6 md:p-5 rounded-xl border border-white/10 bg-black/50 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)] transition-transform duration-300 ease-in-out backdrop-blur glow-on-tap"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
