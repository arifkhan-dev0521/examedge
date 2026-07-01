import { useState } from 'react';
import './CProgrammingPage.css';

function CProgrammingPage() {
  const [openId, setOpenId] = useState(null);
  const [activeUnit, setActiveUnit] = useState(1);
  const [viewMode, setViewMode] = useState('unit');
  const [activeYear, setActiveYear] = useState(2024);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const unitData = {
    1: {
      title: "Introduction & Control Structures",
      questions: [
        { id: 1, marks: "2 Marks", text: "What is the difference between Compiler and Interpreter?", answer: "Compiler converts entire source code into machine code at once before execution. Interpreter translates and executes code line by line." },
        { id: 2, marks: "5 Marks", text: "Explain different types of loops in C with examples.", answer: "C has three loops: for loop (known iterations), while loop (checks condition before executing), do-while loop (executes once before checking)." },
        { id: 3, marks: "10 Marks", text: "Write a C program for Matrix Multiplication and explain the logic.", answer: "Matrix multiplication uses three nested loops: outer for rows, middle for columns, inner to calculate sum of products. Time complexity O(n³)." }
      ]
    },
    2: {
      title: "Arrays & Strings",
      questions: [
        { id: 4, marks: "2 Marks", text: "What is an Array?", answer: "An array is a collection of elements of same data type stored in contiguous memory locations, accessed using an index starting from 0." }
      ]
    },
    3: {
      title: "Functions & Pointers",
      questions: [
        { id: 5, marks: "5 Marks", text: "What is a Pointer? Explain pointer arithmetic.", answer: "A pointer stores memory address of another variable. Pointer arithmetic includes incrementing, decrementing based on data type size." }
      ]
    },
    4: {
      title: "Structures & File Handling",
      questions: [
        { id: 6, marks: "5 Marks", text: "What is a Structure in C? How is it different from an Array?", answer: "A structure groups variables of different data types under one name. Arrays store same data type elements, structures can hold different types together." }
      ]
    }
  };

  const yearData = {
    2024: [
      { id: 1, marks: "2 Marks", text: "What is the difference between Compiler and Interpreter?", answer: "Compiler converts whole code at once. Interpreter executes line by line." },
      { id: 3, marks: "10 Marks", text: "Write a C program for Matrix Multiplication and explain the logic.", answer: "Three nested loops, time complexity O(n³)." }
    ],
    2023: [
      { id: 2, marks: "5 Marks", text: "Explain different types of loops in C with examples.", answer: "for, while, do-while loops with different use cases." },
      { id: 4, marks: "2 Marks", text: "What is an Array?", answer: "Collection of same data type elements in contiguous memory." }
    ],
    2022: [
      { id: 5, marks: "5 Marks", text: "What is a Pointer? Explain pointer arithmetic.", answer: "Variable storing memory address, supports arithmetic operations." }
    ]
  };

  return (
    <div className="c-page">
      
      <div className="c-hero">
        <div className="c-tag">BCA · Semester 1</div>
        <h1>Computer Fundamentals & <span>C++</span></h1>
        <p>BCA-101 · Semester 1</p>
        <p>Previous Year Questions · Unit-wise · Marks-structured Answers</p>
      </div>

      <div className="c-mode-toggle">
        <button className={`c-mode-btn ${viewMode === 'unit' ? 'active' : ''}`} onClick={() => setViewMode('unit')}>Unit-wise</button>
        <button className={`c-mode-btn ${viewMode === 'year' ? 'active' : ''}`} onClick={() => setViewMode('year')}>Solved Papers</button>
      </div>

      {viewMode === 'unit' ? (
        <>
          <div className="c-unit-nav">
            {[1, 2, 3, 4].map((unit) => (
              <button key={unit} className={`c-unit-btn ${activeUnit === unit ? 'active' : ''}`} onClick={() => { setActiveUnit(unit); setOpenId(null); }}>
                Unit {unit}
              </button>
            ))}
          </div>

          <div className="c-content">
            <h2 className="unit-heading">Unit {activeUnit} — {unitData[activeUnit].title}</h2>
            {unitData[activeUnit].questions.map((q) => (
              <div key={q.id} className={`c-q-card ${openId === q.id ? 'open' : ''}`}>
                <div className="c-q-header" onClick={() => toggle(q.id)}>
                  <div className="c-q-marks">{q.marks}</div>
                  <div className="c-q-text">{q.text}</div>
                  <div className="c-q-toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg></div>
                </div>
                <div className="c-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="c-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="c-unit-nav">
            {Object.keys(yearData).map((year) => (
              <button key={year} className={`c-unit-btn ${activeYear === parseInt(year) ? 'active' : ''}`} onClick={() => { setActiveYear(parseInt(year)); setOpenId(null); }}>
                {year}
              </button>
            ))}
          </div>

          <div className="c-content">
            <h2 className="unit-heading">{activeYear} — Full Paper</h2>
            {yearData[activeYear].map((q) => (
              <div key={q.id} className={`c-q-card ${openId === q.id ? 'open' : ''}`}>
                <div className="c-q-header" onClick={() => toggle(q.id)}>
                  <div className="c-q-marks">{q.marks}</div>
                  <div className="c-q-text">{q.text}</div>
                  <div className="c-q-toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg></div>
                </div>
                <div className="c-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="c-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default CProgrammingPage;