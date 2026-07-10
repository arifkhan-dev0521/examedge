import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLaptopCode, FaMicrochip, FaBook, FaBriefcase,
  FaCode, FaCalculator, FaFlask, FaChartLine, FaArrowRight
} from 'react-icons/fa';
import './CoursePage.css';
import Breadcrumb from './Breadcrumb';

const courseIcons = {
  BCA: FaLaptopCode,
  BTech: FaMicrochip,
  BA: FaBook,
  BBA: FaBriefcase,
  MCA: FaCode,
  BCom: FaCalculator,
  BSc: FaFlask,
  MBA: FaChartLine
};

function CoursePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { name: "BCA", categories: [
      { name: "BCA General", path: "/kuk/bca-general" },
      { name: "BCA CTIS", path: "/kuk/bca-ctis" },
      { name: "BCA AI", path: "/kuk/bca-ai" }
    ]},
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

  const handleCategoryClick = (category) => navigate(category.path);

  return (
    <div className="course-page">
      <Breadcrumb items={[{ label: "KUK" }]} />

      <div className="course-hero">
        <h1>Kurukshetra <span>University</span></h1>
        <p>Select your course to get started</p>
      </div>

      <div className="course-search-section">
        <input
          type="text"
          placeholder="Search course... (BCA, BTech, BA)"
          className="course-search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="course-grid">
          {filteredCourses.map((course) => {
            const Icon = courseIcons[course.name] || FaBook;
            const isActive = selectedCourse?.name === course.name;
            return (
              <div
                key={course.name}
                className={`course-card ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCourse(course)}
              >
                <div className="course-card-icon"><Icon /></div>
                <span>{course.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedCourse && (
          <motion.div
            key={selectedCourse.name}
            className="category-section"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{selectedCourse.name} — Select Category</h2>
            <div className="category-grid">
              {selectedCourse.categories.map((cat) => (
                <div
                  key={cat.name}
                  className="category-card"
                  onClick={() => handleCategoryClick(cat)}
                >
                  <h3>{cat.name}</h3>
                  <FaArrowRight className="category-arrow" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CoursePage;