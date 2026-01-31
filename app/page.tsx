import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="flex flex-col-reverse md:flex-row items-center gap-12">

    {/* Text */}
<div className="space-y-6 animate-hero">
  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  <span className="text-slate-900 dark:text-white">
    Hi, I’m{" "}
  </span>
  <span className="text-cyan-400">
    Karthik
  </span>
</h1>


  <p className="text-slate-600 dark:text-slate-400">
    Cloud & DevOps Developer
  </p>

  <p className="text-slate-600 dark:text-slate-400">
    Motivated Cloud Developer with a strong background in software engineering
    and cloud-native systems. Experienced with Docker, Kubernetes, CI/CD
    pipelines, and backend development.
  </p>



      {/* 👉 CTA BUTTONS (THIS IS WHAT YOU ARE MISSING) */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          className="
            inline-flex items-center justify-center
            px-6 py-3 rounded-lg
            bg-cyan-600 hover:bg-cyan-500
            text-white font-medium
            transition
          "
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="
            inline-flex items-center justify-center
            px-6 py-3 rounded-lg
            border border-slate-300 dark:border-white/20
            text-slate-800 dark:text-white
            hover:bg-slate-100 dark:hover:bg-white/10
            transition
          "
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Photo */}
    <div className="flex-shrink-0">
      <img
        src="/Images/profile.jpg"
        alt="Karthik profile photo"
        className="
          w-48 h-48 md:w-64 md:h-64
          rounded-full
          object-cover
          border-4 border-cyan-500
          shadow-lg
          dark:shadow-cyan-500/30
        "
      />
    </div>

  </div>
</section>



      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
