import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursePage.css';
import Breadcrumb from './Breadcrumb';

function CoursePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
  { 
    name: "BCA", 
    categories: [
      { name: "BCA General", path: "/kuk/bca-general" },
      { name: "BCA CTIS", path: "/kuk/bca-ctis" },
      { name: "BCA AI", path: "/kuk/bca-ai" }
    ] 
  },
  { name: "BTech", categories: [
    { name: "CSE", path: "/coming-soon" },
    { name: "ECE", path: "/coming-soon" }
  ]},
  { name: "BA", categories: [{ name: "BA General", path: "/coming-soon" }]},
  { name: "BBA", categories: [{ name: "BBA General", path: "/coming-soon" }]},
  { name: "MCA", categories: [{ name: "MCA General", path: "/coming-soon" }]},
  { name: "BCom", categories: [{ name: "BCom General", path: "/coming-soon" }]},
  { name: "BSc", categories: [{ name: "BSc CS", path: "/coming-soon" }]},
  { name: "MBA", categories: [{ name: "MBA General", path: "/coming-soon" }]}
];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category) => {
  navigate(category.path);
};

  return (
    <div className="course-page">
      <Breadcrumb items={[
        // { label: "Universities", path: "/" },
         { label: "KUK" }]} 
         />
      
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
    key={cat.name}
    className="category-card"
    onClick={() => handleCategoryClick(cat)}
  >
    <h3>{cat.name}</h3>
  </div>
))}
          </div>
        </div>
      )}

    </div>
  );
}

export default CoursePage;