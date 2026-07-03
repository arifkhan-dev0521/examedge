import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  // { label: "Universities", path: "/" },
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
            Semester {sem}
          </button>
        ))}
      </div>

      <div className="sem-subjects">
        <h2>Subjects</h2>

        {subjects.length === 0 ? (
          <div className="sem-empty">Subjects coming soon for this semester.</div>
        ) : (
          <div className="sem-subject-grid">
            {subjects.map((subject) => (
              <div
                key={subject.code}
                className="sem-subject-card"
                onClick={() => navigate(`/subject/${courseId}/${subject.path}`)}
              >
                <h3>{subject.name}</h3>
                <p>{subject.code} · {subject.units} Units</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default SemesterPage;