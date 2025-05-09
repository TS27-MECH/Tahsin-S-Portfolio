import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const EngineeringSkills = [
    "Excel",
    "Powerpoint",
    "",
    "",
    "",
    "",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="glow-on-tap p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <p className="text-gray-300 mb-6">
              "Driven mechanical engineering student with a passion for designing efficient systems 
              and solving practical challenges to improve industries and everyday life."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glow-on-tap rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {EngineeringSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="glow-on-tap bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="glow-on-tap p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Sc in Mechanical Engineer </strong> : MIST-Military Institute of Science and Technology
                  (2025-)
                </li>
                <li>
                  Relevant Coursework:........
                </li>
              </ul>
            </div>

            <div className="glow-on-tap p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">{" "}</h4>
                  <p></p>
                </div>
                <div>
                  <h4 className="font-semibold">{" "}</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
