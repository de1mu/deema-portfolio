import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0E0E0E] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[480px] w-[480px] rounded-full bg-pink-500/70 blur-[260px]" />
      <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-pink-600/70 blur-[260px]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-8 md:px-20 backdrop-blur-sm">
        <h1 className="text-xl font-bold tracking-[0.3em]">DA.</h1>
        <ul className="hidden gap-10 text-sm text-gray-300 md:flex">
          {[
            { name: "About Me", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Activities", id: "activities" },
            { name: "Projects", id: "projects" },
            { name: "Certificates", id: "certificates" },
            { name: "Contact", id: "contact" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="cursor-pointer transition-all hover:text-pink-300 hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-7xl font-black tracking-[-5px] md:text-9xl">DEEMA</h1>
        <h1 className="text-7xl font-light tracking-[-5px] text-pink-300 md:text-9xl">ALMANEA</h1>

        <p className="mt-10 text-2xl font-semibold text-gray-200">
          Senior Information Technology Student
        </p>

        <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
          Building technology with curiosity
          <br />and continuous learning.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-32 md:px-20">
        <h2 className="text-center text-4xl font-bold tracking-wide text-pink-300 md:text-5xl">About Me</h2>

        <p className="mt-10 text-lg leading-8 text-gray-300 md:text-xl text-center max-w-3xl mx-auto">
          I am <span className="text-pink-300 font-semibold">Deema Almanea</span>, a Senior Information Technology student passionate about building modern digital experiences.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl text-center max-w-3xl mx-auto">
          My journey in technology is driven by curiosity, creativity, and continuous learning.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-6 py-32 md:px-20">
        <h2 className="text-center text-4xl font-bold tracking-wide text-pink-300 md:text-5xl">
          Skills
        </h2>

        <p className="mt-6 text-center text-gray-400 text-lg">
          Technical and soft skills I’ve developed throughout my journey.
        </p>

        {/* Technical Skills */}
        <h3 className="mt-16 text-2xl font-semibold text-pink-300 text-center">
          Technical Skills
        </h3>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "HTML/CSS",
            "PHP",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "UI/UX",
            "Git",
            "SQL",
            "Java",
            "Firebase",
            "Android Studio"
          ].map((skill) => (
            <div
              key={skill}
              className="group flex flex-col items-center rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="mt-20 text-2xl font-semibold text-pink-300 text-center">
          Soft Skills
        </h3>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Communication",
            "Teamwork",
            "Problem Solving",
            "Time Management",
            "Leadership",
            "Adaptability"
          ].map((skill) => (
            <div
              key={skill}
              className="group flex flex-col items-center rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="relative z-10 px-6 py-32 md:px-20">
        <h2 className="text-center text-4xl font-bold tracking-wide text-pink-300 md:text-5xl">Activities</h2>

        <p className="mt-6 text-center text-gray-400 text-lg">
          My participation in university student clubs and events.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* IEEE */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/ieee.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">IEEE Club</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Participation in engineering and technology events.
            </p>
          </div>

          {/* TWUIQ */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/twuiq.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">TWUIQ Club</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Contributions to tech innovation and creativity.
            </p>
          </div>

          {/* IMAMU */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/imamu.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">IMAMU Club</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Volunteering and university-wide events.
            </p>
          </div>

          {/* ROBOTICS */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/robotics.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Robotics Club</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Robotics and automation activities.
            </p>
          </div>

          {/* OOS */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/oos.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">OOS Club</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Event management and leadership.
            </p>
          </div>

          {/* EJAD */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/ejad.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">EJAD Club</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Creativity and student empowerment.
            </p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-32 md:px-20">
        <h2 className="text-center text-4xl font-bold tracking-wide text-pink-300 md:text-5xl">Projects</h2>

        <p className="mt-6 text-center text-gray-400 text-lg">A selection of my recent work.</p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Project 1 */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
  <a href="https://github.com/de1mu/web_security_scanner" target="_blank" rel="noopener noreferrer">
    <div className="h-40 w-full rounded-xl overflow-hidden cursor-pointer">
      <img src="/images/security-scanner.png" className="h-full w-full object-cover" />
    </div>
  </a>
  <h3 className="mt-6 text-xl font-semibold">Simple Web Security Scanner</h3>
  <p className="mt-3 text-gray-400 text-sm leading-6">
    A Python automation tool that audits websites for HTTPS support, essential security headers, and server info leaks, then generates a clean HTML security report.
  </p>
</div>

          {/* Project 2 */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
  <a href="https://de1mu.github.io/Himmah-Task-Manager/" target="_blank" rel="noopener noreferrer">
    <div className="h-40 w-full rounded-xl overflow-hidden cursor-pointer">
      <img src="/images/himmah-preview.png" alt="Himmah Task Manager" className="h-full w-full object-cover" />
    </div>
  </a>
  <h3 className="mt-6 text-xl font-semibold">Himmah | Task Manager</h3>
  <p className="mt-3 text-gray-400 text-sm leading-6">
    A interactive task manager that uses gamification (XP points) to boost daily productivity, with real-time Firebase syncing and responsive design.
  </p>
</div>

          {/* Project 3 */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/project3.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Project Three</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">
              Description of your third project goes here.
            </p>
          </div>

        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative z-10 px-6 py-32 md:px-20">
        <h2 className="text-center text-4xl font-bold tracking-wide text-pink-300 md:text-5xl">Certificates</h2>

        <p className="mt-6 text-center text-gray-400 text-lg">
          Achievements and certifications I've earned.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Certificate 1 */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/cert1.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Certificate Title</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">Issued by: Organization Name</p>
          </div>

          {/* Certificate 2 */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/cert2.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Certificate Title</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">Issued by: Organization Name</p>
          </div>

          {/* Certificate 3 */}
          <div className="group rounded-2xl bg-[#1A1A1A] p-6 hover:scale-105 hover:bg-[#222]">
            <div className="h-40 w-full rounded-xl overflow-hidden">
              <img src="/images/cert3.png" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Certificate Title</h3>
            <p className="mt-3 text-gray-400 text-sm leading-6">Issued by: Organization Name</p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-32 md:px-20">
        <h2 className="text-center text-5xl font-bold tracking-[-2px]">
          Contact
        </h2>

        <p className="mt-5 text-center text-gray-400">
          Let's connect. Feel free to reach out anytime.
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:dimamalmanea@gmail.com"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-pink-400 hover:bg-white/10"
          >
            <FiMail className="text-4xl text-pink-300 transition group-hover:scale-110" />

            <h3 className="mt-8 text-2xl font-semibold">
              Email
            </h3>

            <p className="mt-3 break-all text-gray-400">
              dimamalmanea@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/dema-a-116412368"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-pink-400 hover:bg-white/10"
          >
            <FiLinkedin className="text-4xl text-pink-300 transition group-hover:scale-110" />

            <h3 className="mt-8 text-2xl font-semibold">
              LinkedIn
            </h3>

            <p className="mt-3 text-gray-400">
              linkedin.com/in/dema-a-116412368
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/de1mu"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-pink-400 hover:bg-white/10"
          >
            <FiGithub className="text-4xl text-pink-300 transition group-hover:scale-110" />

            <h3 className="mt-8 text-2xl font-semibold">
              GitHub
            </h3>

            <p className="mt-3 text-gray-400">
              github.com/de1mu
            </p>
          </a>

        </div>
      </section>

    </main>
  );
}

export default App;