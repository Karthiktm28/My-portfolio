export default function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-12">
        Education
      </h2>

      <div className="space-y-6">

        <div className="bg-slate-900/80 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            MSc Cloud Native Computing
          </h3>
          <p className="text-slate-400 mt-1">
            2023 – 2024
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Focused on cloud-native architectures, microservices,
            container orchestration, DevOps practices, and scalable
            backend systems.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            Bachelor’s Degree in Computer Science
          </h3>
          <p className="text-slate-400 mt-1">
            2019 – 2023
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Studied core computer science fundamentals including
            data structures, algorithms, operating systems,
            databases, and software engineering.
          </p>
        </div>

      </div>
    </section>
  );
}
