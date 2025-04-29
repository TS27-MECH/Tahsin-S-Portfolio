import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Tahsin Sarker
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            "Blending mechanical engineering with intelligent systems to design efficient,
            forward-thinking solutions for a dynamic world."
          </p>

          <div className="flex justify-center space-x-4">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-bold transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(59,130,246,0.25)]"
            >
              View Projects
            </a>

            {/* Resume Button with animated icon */}
            <a
              href="/TahsinSarker_Resume.pdf" // Your resume file in /public
              target="_blank"
              rel="noopener noreferrer"
            
              className="group flex items-center gap-2 border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-bold transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-[0_0_8px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};