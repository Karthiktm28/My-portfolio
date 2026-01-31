export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10">
        Experience
      </h2>

      <div className="space-y-6">

        {/* Internship 1 */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Backend Development Intern
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Rooman Technologies · June 2023 – September 2023
          </p>

          <ul className="mt-4 space-y-2 text-slate-300 dark:text-slate-400 list-disc list-inside">
            <li>
              Developed and maintained backend services for real-time web applications.
            </li>
            <li>
              Designed and implemented RESTful APIs and integrated MongoDB and MySQL databases.
            </li>
            <li>
              Participated in code reviews to improve code quality, performance, and maintainability.
            </li>
            <li>
              Applied OOP principles, data structures, and design patterns in production code.
            </li>
            <li>
              Worked in a Linux-based development environment using Git for version control.
            </li>
          </ul>
        </div>

        {/* Internship 2 */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Full Stack Web Development Intern
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            KnowX Innovations · August 2022 – September 2022
          </p>

          <ul className="mt-4 space-y-2 space-y-2 text-slate-300 list-disc list-inside">
            <li>
              Built a Student Result Management System using Java, HTML, CSS, PHP, and MySQL.
            </li>
            <li>
              Integrated REST APIs to connect frontend and backend components.
            </li>
            <li>
              Performed unit testing with JUnit to ensure reliability and correctness.
            </li>
            <li>
              Collaborated using Agile practices and Git-based workflows.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
