import Footer from "./components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
