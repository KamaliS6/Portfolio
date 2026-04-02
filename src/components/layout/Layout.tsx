import type { ReactNode } from "react";
import { useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isProject = location.pathname.startsWith("/project/");
  const showNavbar = !isProject && location.pathname !== "/";

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <ScrollToTop />
      {showNavbar && <Navbar />}
      <main className="mx-auto w-full max-w-5xl px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
}
