export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Paradise Island */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Paradise Island
          </h3>

          <p className="space-y-2 text-slate-300">
            A responsive tourism and travel website focused on clean UI,
            smooth layouts, and user-friendly navigation. Built to showcase
            destinations and travel-related information with a modern
            frontend approach.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-cyan-500 dark:text-cyan-400 mb-4">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Responsive Design</span>
          </div>

          <a
            href="https://github.com/Karthiktm28/paradise-island"
            target="_blank"
            className="inline-block text-sm text-cyan-500 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Online Bookstore */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Online Bookstore (Microservices)
          </h3>

          <p className="space-y-2 text-slate-300">
            A distributed online bookstore system built using a microservices
            architecture. Includes API Gateway, Book Service, User Service,
            and Order Service to demonstrate scalable backend design and
            service separation.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-cyan-500 dark:text-cyan-400 mb-4">
            <span>Java</span>
            <span>Microservices</span>
            <span>REST APIs</span>
            <span>Backend Architecture</span>
          </div>

          <a
            href="https://github.com/Karthiktm28/online-bookstore"
            target="_blank"
            className="inline-block text-sm text-cyan-500 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Restaurant Management System */}
        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Restaurant Management System
          </h3>

          <p className="space-y-2 text-slate-300">
            A Java-based restaurant management system that simulates real-world
            order handling, menu management, and billing. Demonstrates strong
            object-oriented design using modern Java features and concurrency.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-cyan-500 dark:text-cyan-400 mb-4">
            <span>Java</span>
            <span>OOP</span>
            <span>Concurrency</span>
            <span>File Handling</span>
          </div>

          <a
            href="https://github.com/Karthiktm28/restaurant-management"
            target="_blank"
            className="inline-block text-sm text-cyan-500 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}
