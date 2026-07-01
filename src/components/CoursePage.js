import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursePage.css';

function CoursePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { name: "BCA", categories: ["BCA General", "BCA AI", "BCA CTIS"] },
    { name: "BTech", categories: ["CSE", "ECE", "Mechanical", "Civil"] },
    { name: "BA", categories: ["BA General", "BA English", "BA Economics"] },
    { name: "BBA", categories: ["BBA General"] },
    { name: "MCA", categories: ["MCA General"] },
    { name: "BCom", categories: ["BCom General", "BCom Hons"] },
    { name: "BSc", categories: ["BSc Computer Science", "BSc Maths", "BSc Physics"] },
    { name: "MBA", categories: ["MBA General"] }
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category) => {
    if (category === "BCA General") {
      navigate('/kuk/bca-general');
    } else {
      alert(category + " - Coming Soon!");
    }
  };

  return (
    <div className="course-page">
      
      <div className="course-hero">
        <h1>Kurukshetra <span>University</span></h1>
        <p>Select your course</p>
      </div>

      <div className="course-search-section">
        {/* <h3>Choose Your Course</h3> */}

        <input
          type="text"
          placeholder="Search course... (BCA, BTech, BA)"
          className="course-search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div
              key={course.name}
              className={`course-card ${selectedCourse?.name === course.name ? 'active' : ''}`}
              onClick={() => setSelectedCourse(course)}
            >
              {course.name}
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="category-section">
          <h2>{selectedCourse.name} — Select Category</h2>
          <div className="category-grid">
            {selectedCourse.categories.map((cat) => (
              <div
                key={cat}
                className="category-card"
                onClick={() => handleCategoryClick(cat)}
              >
                <h3>{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default CoursePage;