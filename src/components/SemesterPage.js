import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SemesterPage.css';

function SemesterPage() {
  const [activeSem, setActiveSem] = useState(1);
  const navigate = useNavigate();

  const semesterSubjects = {
    1: [
      { name: "Computer Fundamentals & C++", units: 4, path: "/c-programming" }
    ],
    2: [],
    3: [
      { name: "Operating System", units: 4, path: "/os" },
      { name: "DBMS", units: 5, path: "/dbms" }
    ],
    4: [],
    5: [],
    6: []
  };

  return (
    <div className="sem-page">
      
      <div className="sem-hero">
        <h1>Kurukshetra <span>University</span></h1>
        <p>BCA · Select your semester</p>
      </div>

      <div className="sem-tabs">
        {[1, 2, 3, 4, 5, 6].map((sem) => (
          <button
            key={sem}
            className={`sem-tab ${activeSem === sem ? 'active' : ''}`}
            onClick={() => setActiveSem(sem)}
          >
            Semester {sem}
          </button>
        ))}
      </div>

      <div className="sem-subjects">
        <h2>Subjects</h2>

        {semesterSubjects[activeSem].length === 0 ? (
          <div className="sem-empty">Subjects coming soon for this semester.</div>
        ) : (
          <div className="sem-subject-grid">
            {semesterSubjects[activeSem].map((subject) => (
              <div 
                key={subject.name} 
                className="sem-subject-card"
                onClick={() => navigate(subject.path)}
              >
                <h3>{subject.name}</h3>
                <p>{subject.units} Units</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default SemesterPage;