import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      name: "NextSet",
      link: "https://nextset-demo.onrender.com",
      github: "https://github.com/rosesblake/nextset",
      description: "Full-stack booking app for artists and venues.",
      stack: ["React", "Node", "Express", "Prisma", "Tailwind", "SQL"],
      image: "/images/NextSet.png",
    },
    {
      name: "PicklePal",
      link: "https://picklepal.onrender.com",
      github: "https://github.com/rosesblake/picklePal-app",
      description:
        "Find pickleball partners nearby based on skill and location.",
      stack: ["Python", "Flask", "PostgreSQL", "HTML/CSS", "Heroku"],
      image: "/images/PicklePal.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-[#0d1117] text-white px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-400">
          My Projects
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          A curated selection of full-stack apps, creative tools, and
          performance-focused projects I’ve built with love.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            ({ name, link, github, description, image, stack }, i) => (
              <motion.a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group block bg-[#161b22] p-6 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 hover:bg-cyan-500 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={image}
                    alt={`${name} logo`}
                    className="w-10 h-10 rounded-md object-cover border border-gray-500 group-hover:scale-105 transition-transform duration-200"
                  />
                  <h3 className="text-xl font-semibold group-hover:text-white transition">
                    {name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-6 group-hover:text-white transition">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300 mt-6 mb-6 group-hover:text-white transition">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#0d1117] border border-cyan-500 hover:bg-cyan-500 hover:border-white px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-white opacity-70 group-hover:opacity-100 transition">
                    View live demo →
                  </span>
                  <a
                    href={github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-200 underline hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </motion.a>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}

export { Projects };
