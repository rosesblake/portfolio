import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0b0f17] text-white px-6 py-24 text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-400">
        Let’s Build Something Together
      </h2>
      <p className="text-gray-400 mb-8 max-w-xl">
        I’m currently open to full-time opportunities and freelance projects.
        Feel free to reach out — I’d love to connect and learn more about your
        team.
      </p>

      <a
        href="mailto:youremail@example.com"
        className="inline-block px-6 py-3 bg-cyan-600 rounded-full text-white font-semibold hover:bg-cyan-700 transition"
      >
        Get in Touch
      </a>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 justify-center mt-10 text-2xl text-cyan-400">
        <a
          href="https://github.com/rosesblake"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/blake-roses"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export { Contact };
