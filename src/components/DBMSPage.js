import { useState } from 'react';
import './DBMSPage.css';

function DBMSPage() {
  const [openId, setOpenId] = useState(null);
  const [activeUnit, setActiveUnit] = useState(1);
  const [viewMode, setViewMode] = useState('unit');
  const [activeYear, setActiveYear] = useState(2024);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const unitData = {
    1: {
      title: "Introduction & ER Model",
      questions: [
        { id: 1, marks: "2 Marks", text: "What is DBMS? Give two advantages over traditional file system.", answer: "DBMS (Database Management System) is software that manages databases, allowing storage, retrieval, and manipulation of data. Advantages: 1) Reduces data redundancy 2) Provides data security and controlled access." },
        { id: 2, marks: "5 Marks", text: "Explain the three-schema architecture of DBMS.", answer: "Three-schema architecture separates database into three levels: Internal (physical storage), Conceptual (structure for users), External (user-specific view). Provides data independence." },
        { id: 3, marks: "10 Marks", text: "What is ER Model? Explain its components with diagram.", answer: "Entity-Relationship Model is used to design databases. Components: Entity (real-world object), Attribute (property), Relationship (association between entities), Keys (uniquely identify entities)." }
      ]
    },
    2: {
      title: "Relational Model & Normalization",
      questions: [
        { id: 4, marks: "5 Marks", text: "What is Normalization? Explain 1NF, 2NF, 3NF.", answer: "Normalization organizes data to reduce redundancy. 1NF — atomic values. 2NF — 1NF + full dependency on primary key. 3NF — 2NF + no transitive dependency." }
      ]
    },
    3: {
      title: "SQL Queries",
      questions: [
        { id: 5, marks: "2 Marks", text: "What is the difference between DDL and DML?", answer: "DDL defines database structure (CREATE, ALTER, DROP). DML manipulates data (INSERT, UPDATE, DELETE, SELECT)." }
      ]
    },
    4: {
      title: "Transactions & Concurrency",
      questions: [
        { id: 6, marks: "5 Marks", text: "What is a Transaction? Explain ACID properties.", answer: "A transaction is a sequence of operations treated as a single unit. ACID: Atomicity, Consistency, Isolation, Durability." }
      ]
    }
  };

  const yearData = {
    2024: [
      { id: 1, marks: "2 Marks", text: "What is DBMS? Give two advantages over traditional file system.", answer: "DBMS manages databases for storage, retrieval, manipulation. Advantages: reduces redundancy, provides security." },
      { id: 3, marks: "10 Marks", text: "What is ER Model? Explain its components with diagram.", answer: "ER Model has Entity, Attribute, Relationship, Keys as main components." }
    ],
    2023: [
      { id: 2, marks: "5 Marks", text: "Explain the three-schema architecture of DBMS.", answer: "Three levels: Internal, Conceptual, External — provides data independence." },
      { id: 5, marks: "2 Marks", text: "What is the difference between DDL and DML?", answer: "DDL defines structure, DML manipulates data." }
    ],
    2022: [
      { id: 6, marks: "5 Marks", text: "What is a Transaction? Explain ACID properties.", answer: "Atomicity, Consistency, Isolation, Durability." }
    ]
  };

  return (
    <div className="dbms-page">
      
      <div className="dbms-hero">
        <div className="dbms-tag">BCA · Semester 3</div>
        <h1>DBMS</h1>
        <p>Previous Year Questions · Unit-wise · Marks-structured Answers</p>
      </div>

      <div className="dbms-mode-toggle">
        <button className={`dbms-mode-btn ${viewMode === 'unit' ? 'active' : ''}`} onClick={() => setViewMode('unit')}>Unit-wise</button>
        <button className={`dbms-mode-btn ${viewMode === 'year' ? 'active' : ''}`} onClick={() => setViewMode('year')}>Solved Papers</button>
      </div>

      {viewMode === 'unit' ? (
        <>
          <div className="dbms-unit-nav">
            {[1, 2, 3, 4].map((unit) => (
              <button key={unit} className={`dbms-unit-btn ${activeUnit === unit ? 'active' : ''}`} onClick={() => { setActiveUnit(unit); setOpenId(null); }}>
                Unit {unit}
              </button>
            ))}
          </div>

          <div className="dbms-content">
            <h2 className="unit-heading">Unit {activeUnit} — {unitData[activeUnit].title}</h2>
            {unitData[activeUnit].questions.map((q) => (
              <div key={q.id} className={`dbms-q-card ${openId === q.id ? 'open' : ''}`}>
                <div className="dbms-q-header" onClick={() => toggle(q.id)}>
                  <div className="dbms-q-marks">{q.marks}</div>
                  <div className="dbms-q-text">{q.text}</div>
                  <div className="dbms-q-toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg></div>
                </div>
                <div className="dbms-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="dbms-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="dbms-unit-nav">
            {Object.keys(yearData).map((year) => (
              <button key={year} className={`dbms-unit-btn ${activeYear === parseInt(year) ? 'active' : ''}`} onClick={() => { setActiveYear(parseInt(year)); setOpenId(null); }}>
                {year}
              </button>
            ))}
          </div>

          <div className="dbms-content">
            <h2 className="unit-heading">{activeYear} — Full Paper</h2>
            {yearData[activeYear].map((q) => (
              <div key={q.id} className={`dbms-q-card ${openId === q.id ? 'open' : ''}`}>
                <div className="dbms-q-header" onClick={() => toggle(q.id)}>
                  <div className="dbms-q-marks">{q.marks}</div>
                  <div className="dbms-q-text">{q.text}</div>
                  <div className="dbms-q-toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg></div>
                </div>
                <div className="dbms-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="dbms-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default DBMSPage;