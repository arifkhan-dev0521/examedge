import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OSPage from './components/OSPage';
import DBMSPage from './components/DBMSPage';
import CProgrammingPage from './components/CProgrammingPage';
import SemesterPage from './components/SemesterPage';
import CoursePage from './components/CoursePage';
// import FloatingBack from './components/FloatingBack';
import ComingSoon from './components/ComingSoon';
import SubjectPage from './components/SubjectPage';
import About from './components/About';
import './theme.css';
// import { uploadAllSubjects } from './uploadData';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem('examedge-theme') || 'light';
});

  useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('examedge-theme', theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <FloatingBack /> */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* <button 
  onClick={async () => {
    const result = await uploadAllSubjects();
    alert(result.success ? `Uploaded ${result.count} subjects!` : `Error: ${result.error}`);
  }}
  style={{ position: 'fixed', top: '70px', right: '10px', zIndex: 999, padding: '10px', background: 'green', color: 'white', border: 'none', borderRadius: '8px' }}
>
  Upload to Firebase
</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuk" element={<CoursePage />} />
        <Route path="/kuk/:courseId" element={<SemesterPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/subject/:courseId/:subjectId" element={<SubjectPage />} />
        <Route path="/os" element={<OSPage />} />
        <Route path="/dbms" element={<DBMSPage />} />
        <Route path="/c-programming" element={<CProgrammingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;