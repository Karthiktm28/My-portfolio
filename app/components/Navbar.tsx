"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const sections = ["skills", "projects", "experience", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("skills");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    id === active
      ? "text-cyan-500 font-medium"
      : "hover:text-black dark:hover:text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo – scroll to top */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center gap-2 font-semibold focus:outline-none"
  aria-label="Scroll to top"
>
  <div className="h-8 w-8 rounded-md bg-cyan-500 text-black flex items-center justify-center">
    K
  </div>
  <span className="hidden sm:block">Karthik</span>
</button>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm ttext-slate-700 dark:text-slate-300
hover:text-cyan-500 dark:hover:text-cyan-400">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden md:flex gap-4 text-sm">
            <Link href="https://github.com/Karthiktm28" target="_blank">GitHub</Link>
            <Link
              href="https://www.linkedin.com/in/karthik-t-m-55b5a3267/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 
                border border-slate-200 dark:border-slate-800 
                rounded-xl p-6">
          <div className="flex flex-col px-6 py-4 gap-4 text-slate-700 dark:text-slate-300">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={linkClass(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <Link href="https://github.com/Karthiktm28" target="_blank">GitHub</Link>
              <Link
                href="https://www.linkedin.com/in/karthik-t-m-55b5a3267/"
                target="_blank"
                className="mt-2 block"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
