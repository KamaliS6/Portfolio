import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { Layout } from "./components/layout/Layout";
import { PageTransition } from "./components/layout/PageTransition";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
}
