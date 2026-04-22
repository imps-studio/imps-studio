import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import NotFound from './NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
