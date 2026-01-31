export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-slate-400 max-w-xl mb-10">
        I’m always open to opportunities, collaborations, and discussions
        related to Cloud, DevOps, and backend development. Feel free to
        reach out.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Email */}
        <a
          href="mailto:karthiktm2804@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3
                     rounded-lg bg-cyan-600 hover:bg-cyan-500
                     text-white font-medium transition"
        >
          Email Me
        </a>

       
      </div>
    </section>
  );
}
