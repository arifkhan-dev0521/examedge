import { useState } from 'react';
import './OSPage.css';

function OSPage() {
  const [openId, setOpenId] = useState(null);
  const [activeUnit, setActiveUnit] = useState(1);
  const [viewMode, setViewMode] = useState('unit'); // 'unit' or 'year'
  const [activeYear, setActiveYear] = useState(2024);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const unitData = {
    1: {
      title: "Introduction & Process Management",
      questions: [
        {
          id: 1,
          marks: "2 Marks",
          text: "What is an Operating System? State its main functions.",
          answer: "An Operating System (OS) is system software that acts as an interface between the user and computer hardware. It manages hardware resources and provides services for application programs. Main functions include Process Management, Memory Management, File Management, Device Management, and Security."
        },
        {
          id: 2,
          marks: "5 Marks",
          text: "Explain CPU Scheduling with its types.",
          answer: "CPU Scheduling decides which process in the ready queue gets the CPU next, done by the Short-Term Scheduler. Types include FCFS (First Come First Served), SJF (Shortest Job First), Priority Scheduling, Round Robin, and SRTF (preemptive SJF)."
        },
        {
          id: 3,
          marks: "10 Marks",
          text: "What is a Process? Explain Process States with diagram.",
          answer: "A process is a program in execution. It is an active entity while a program is passive. The 5 process states are: New (being created), Ready (waiting for CPU), Running (executing), Waiting (waiting for I/O), and Terminated (finished execution)."
        }
      ]
    },
    2: {
      title: "Memory Management",
      questions: [
        {
          id: 4,
          marks: "2 Marks",
          text: "What is Paging?",
          answer: "Paging is a memory management technique where process memory is divided into fixed-size blocks called pages, and physical memory is divided into frames of the same size, avoiding external fragmentation."
        }
      ]
    },
    3: {
      title: "File System",
      questions: [
        {
          id: 5,
          marks: "2 Marks",
          text: "What is a File System?",
          answer: "A File System is a method used by OS to organize, store, retrieve, and manage files on storage devices like hard disks."
        }
      ]
    },
    4: {
      title: "Deadlock & Security",
      questions: [
        {
          id: 6,
          marks: "5 Marks",
          text: "What is Deadlock? State its necessary conditions.",
          answer: "Deadlock is a situation where two or more processes are blocked forever, waiting for each other. Four necessary conditions are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."
        }
      ]
    }
  };

  // Year-wise papers — same questions, organized as full paper
  const yearData = {
    2024: [
      { id: 1, marks: "2 Marks", text: "What is an Operating System? State its main functions.", answer: "An Operating System (OS) is system software that acts as an interface between the user and computer hardware. Main functions include Process Management, Memory Management, File Management, Device Management, and Security." },
      { id: 3, marks: "10 Marks", text: "What is a Process? Explain Process States with diagram.", answer: "A process is a program in execution. The 5 process states are: New, Ready, Running, Waiting, and Terminated." },
      { id: 6, marks: "5 Marks", text: "What is Deadlock? State its necessary conditions.", answer: "Deadlock is a situation where two or more processes are blocked forever. Four conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait." }
    ],
    2023: [
      { id: 2, marks: "5 Marks", text: "Explain CPU Scheduling with its types.", answer: "CPU Scheduling decides which process gets CPU next. Types: FCFS, SJF, Priority, Round Robin, SRTF." },
      { id: 4, marks: "2 Marks", text: "What is Paging?", answer: "Paging divides process memory into fixed-size pages and physical memory into frames of same size, avoiding external fragmentation." }
    ],
    2022: [
      { id: 5, marks: "2 Marks", text: "What is a File System?", answer: "A File System organizes, stores, retrieves, and manages files on storage devices." }
    ]
  };

  return (
    <div className="os-page">
      
      <div className="os-hero">
        <div className="os-tag">BCA · Semester 3</div>
        <h1>Operating <span>System</span></h1>
        <p>Previous Year Questions · Unit-wise · Marks-structured Answers</p>
      </div>

      {/* TOGGLE BUTTONS */}
      <div className="os-mode-toggle">
        <button 
          className={`os-mode-btn ${viewMode === 'unit' ? 'active' : ''}`}
          onClick={() => setViewMode('unit')}
        >
          Unit-wise
        </button>
        <button 
          className={`os-mode-btn ${viewMode === 'year' ? 'active' : ''}`}
          onClick={() => setViewMode('year')}
        >
          Solved Papers
        </button>
      </div>

      {viewMode === 'unit' ? (
        <>
          <div className="os-unit-nav">
            {[1, 2, 3, 4].map((unit) => (
              <button
                key={unit}
                className={`os-unit-btn ${activeUnit === unit ? 'active' : ''}`}
                onClick={() => { setActiveUnit(unit); setOpenId(null); }}
              >
                Unit {unit}
              </button>
            ))}
          </div>

          <div className="os-content">
            <h2 className="unit-heading">Unit {activeUnit} — {unitData[activeUnit].title}</h2>

            {unitData[activeUnit].questions.map((q) => (
              <div key={q.id} className={`os-q-card ${openId === q.id ? 'open' : ''}`}>
                <div className="os-q-header" onClick={() => toggle(q.id)}>
                  <div className="os-q-marks">{q.marks}</div>
                  <div className="os-q-text">{q.text}</div>
                  <div className="os-q-toggle">
                    <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                  </div>
                </div>
                <div className="os-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="os-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="os-unit-nav">
            {Object.keys(yearData).map((year) => (
              <button
                key={year}
                className={`os-unit-btn ${activeYear === parseInt(year) ? 'active' : ''}`}
                onClick={() => { setActiveYear(parseInt(year)); setOpenId(null); }}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="os-content">
            <h2 className="unit-heading">{activeYear} — Full Paper</h2>

            {yearData[activeYear].map((q) => (
              <div key={q.id} className={`os-q-card ${openId === q.id ? 'open' : ''}`}>
                <div className="os-q-header" onClick={() => toggle(q.id)}>
                  <div className="os-q-marks">{q.marks}</div>
                  <div className="os-q-text">{q.text}</div>
                  <div className="os-q-toggle">
                    <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                  </div>
                </div>
                <div className="os-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="os-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default OSPage;