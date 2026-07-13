import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaStar, FaArrowRight } from 'react-icons/fa';
import { coursesData } from '../data/courses';
import './SemesterPage.css';
import Breadcrumb from './Breadcrumb';

function SemesterPage() {
  const [activeSem, setActiveSem] = useState(1);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const course = coursesData[courseId];

  if (!course) {
    navigate('/coming-soon');
    return null;
  }

  const subjects = course.semesters[activeSem]?.subjects || [];

  return (
    <div className="sem-page">
      <Breadcrumb items={[
        { label: "KUK", path: "/kuk" },
        { label: course.name }
      ]} />

      <div className="sem-hero">
        <h1>{course.name}</h1>
        <p>{course.university} · Select your semester</p>
      </div>

      <div className="sem-tabs">
        {Object.keys(course.semesters).map((sem) => (
          <button
            key={sem}
            className={`sem-tab ${activeSem === parseInt(sem) ? 'active' : ''}`}
            onClick={() => setActiveSem(parseInt(sem))}
          >
            Sem {sem}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSem}
          className="sem-subjects"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2>Subjects</h2>

          {subjects.length === 0 ? (
            <div className="sem-empty">Subjects coming soon for this semester.</div>
          ) : (
            <div className="sem-subject-grid">
              {subjects.map((subject) => (
                <div
                  key={subject.code}
                  className="sem-subject-card"
                  onClick={() => navigate(subject.path ? `/subject/${courseId}/${subject.path}` : '/coming-soon')}
                  style={{ opacity: subject.path ? 1 : 0.55 }}
                >
                  <div className={`sem-subject-icon ${subject.major ? 'major' : ''}`}>
                    {subject.major ? <FaStar /> : <FaBook />}
                  </div>
                  <div className="sem-subject-text">
                    <h3>{subject.name}</h3>
                    <p>{subject.code} · {subject.units} Units{subject.major ? ' · Major' : ''}</p>
                    {!subject.path && <span className="sem-soon">Coming Soon</span>}
                  </div>
                  <FaArrowRight className="sem-subject-arrow" />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SemesterPage;