import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OSPage from './components/OSPage';
import DBMSPage from './components/DBMSPage';
import CProgrammingPage from './components/CProgrammingPage';
import SemesterPage from './components/SemesterPage';
import CoursePage from './components/CoursePage';
import FloatingBack from './components/FloatingBack';
import ComingSoon from './components/ComingSoon';
import SubjectPage from './components/SubjectPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FloatingBack />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuk" element={<CoursePage />} />
        <Route path="/kuk/:courseId" element={<SemesterPage />} />
        <Route path="/subject/:courseId/:subjectId" element={<SubjectPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/os" element={<OSPage />} />
        <Route path="/dbms" element={<DBMSPage />} />
        <Route path="/c-programming" element={<CProgrammingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;