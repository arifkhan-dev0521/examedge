import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const universities = [
    { name: "KUK", fullName: "Kurukshetra University", path: "/kuk", active: true },
    { name: "MDU", fullName: "Maharshi Dayanand University", active: false },
    { name: "CGC", fullName: "Chandigarh Group of Colleges", active: false },
    { name: "JNU", fullName: "Jawaharlal Nehru University", active: false }
  ];

  const filteredUniversities = universities.filter((uni) =>
    uni.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      
      <div className="hero">
        <div className="hero-badge">Exam Preparation Made Simple</div>
        <h1>Pass Your Exams <span>The Smart Way</span></h1>
        <p>Unit-wise sorted questions. Marks-structured answers. Exam writing tips that actually work.</p>
      </div>

      <div className="subjects-section">
        <h2>Choose Your University</h2>

        <input
          type="text"
          placeholder="Search university..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="subjects-grid">
          {filteredUniversities.map((uni) => (
            <div 
              key={uni.name}
              className="subject-card"
              onClick={() => uni.active ? navigate(uni.path) : navigate('/coming-soon')}
              style={{ opacity: uni.active ? 1 : 0.6, cursor: 'pointer' }}
            >
              <h3>{uni.name}</h3>
              <p>{uni.fullName}</p>
              {!uni.active && <p style={{ color: '#fbbf24', marginTop: '4px' }}>Coming Soon</p>}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;