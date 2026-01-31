export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Karthik T M · Built with{" "}
          <span className="font-medium text-slate-800 dark:text-slate-200">
            Next.js
          </span>{" "}
          &{" "}
          <span className="font-medium text-slate-800 dark:text-slate-200">
            Tailwind CSS
          </span>{" "}
          · Deployed on{" "}
          <span className="font-medium text-slate-800 dark:text-slate-200">
            Vercel
          </span>
        </p>
      </div>
    </footer>
  );
}
