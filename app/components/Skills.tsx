export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-10">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">
            Cloud & DevOps
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>AWS (Solutions Architect – In Progress)</li>
            <li>Docker & Kubernetes</li>
            <li>CI/CD (Jenkins)</li>
            <li>Serverless Architectures</li>
            <li>Azure</li>
          </ul>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">
            Programming
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
          </ul>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">
            Tools & OS
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>Git & GitHub</li>
            <li>Linux (Ubuntu)</li>
            <li>MySQL & MongoDB</li>
            <li>Docker Compose</li>
            <li>Agile / Scrum</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
