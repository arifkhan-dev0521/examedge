import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Breadcrumb from './Breadcrumb';
import './SubjectPage.css';

function SubjectPage() {
  const { subjectId, courseId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [activeUnit, setActiveUnit] = useState(1);
  const [viewMode, setViewMode] = useState('unit');
  const [activeYear, setActiveYear] = useState(null);
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubject() {
      try {
        const docRef = doc(db, 'subjects', subjectId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setSubject(docSnap.data());
        } else {
          navigate('/coming-soon');
        }
      } catch (error) {
        console.error('Error fetching subject:', error);
        navigate('/coming-soon');
      } finally {
        setLoading(false);
      }
    }
    
    fetchSubject();
  }, [subjectId, navigate]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        color: 'var(--text)'
      }}>
        Loading...
      </div>
    );
  }

  if (!subject) return null;

  const color = subject.color;
  const units = subject.units;
  const yearWise = subject.yearWise;
  const years = Object.keys(yearWise);

  if (!activeYear && years.length > 0) {
    setActiveYear(parseInt(years[0]));
  }

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const questions = viewMode === 'unit'
    ? units[activeUnit]?.questions || []
    : yearWise[activeYear] || [];

  return (
    <div className="subject-page">
      <Breadcrumb items={[
        { label: "KUK", path: "/kuk" },
        { label: subject.course, path: `/kuk/${courseId}` },
        { label: subject.name }
      ]} />

      <div className="subject-hero">
        <div
          className="subject-tag"
          style={{
            background: `${color}18`,
            color: color,
            borderColor: color
          }}
        >
          {subject.course} · {subject.semester}
        </div>
        <h1 style={{ color: 'var(--text)' }}>{subject.name}</h1>
        <p>{subject.code} · Previous Year Questions</p>
      </div>

      <div className="subject-mode-toggle">
        <button
          className={`subject-mode-btn ${viewMode === 'unit' ? 'active' : ''}`}
          style={viewMode === 'unit' ? { background: color, borderColor: color, color: 'white' } : {}}
          onClick={() => setViewMode('unit')}
        >
          Unit-wise
        </button>
        {years.length > 0 && (
          <button
            className={`subject-mode-btn ${viewMode === 'year' ? 'active' : ''}`}
            style={viewMode === 'year' ? { background: color, borderColor: color, color: 'white' } : {}}
            onClick={() => setViewMode('year')}
          >
            Solved Papers
          </button>
        )}
      </div>

      {viewMode === 'unit' ? (
        <>
          <div className="subject-unit-nav">
            {Object.keys(units).map((unit) => (
              <button
                key={unit}
                className="subject-unit-btn"
                style={activeUnit === parseInt(unit) ? { background: color, borderColor: color, color: 'white' } : {}}
                onClick={() => { setActiveUnit(parseInt(unit)); setOpenId(null); }}
              >
                Unit {unit}
              </button>
            ))}
          </div>

          <div className="subject-content">
            <h2 className="subject-unit-heading">
              Unit {activeUnit} — {units[activeUnit]?.title}
            </h2>
            {questions.length === 0 ? (
              <div className="no-content">Questions coming soon for this unit.</div>
            ) : (
              questions.map((q) => (
                <div key={q.id} className="sub-q-card" style={openId === q.id ? { borderColor: color } : {}}>
                  <div className="sub-q-header" onClick={() => toggle(q.id)}>
                    <div
                      className="sub-q-marks"
                      style={{ background: `${color}18`, color: color, borderColor: color }}
                    >
                      {q.marks}
                    </div>
                    <div className="sub-q-text">{q.text}</div>
                    <div
                      className="sub-q-toggle"
                      style={openId === q.id ? { background: color, transform: 'rotate(180deg)' } : {}}
                    >
                      <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                    </div>
                  </div>
                  <div className="sub-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                    <div className="sub-q-answer-inner">{q.answer}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <>
          <div className="subject-unit-nav">
            {years.map((year) => (
              <button
                key={year}
                className="subject-unit-btn"
                style={activeYear === parseInt(year) ? { background: color, borderColor: color, color: 'white' } : {}}
                onClick={() => { setActiveYear(parseInt(year)); setOpenId(null); }}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="subject-content">
  <h2 className="subject-unit-heading">{activeYear} — Question Paper</h2>
  {questions.length === 0 ? (
    <div className="no-content">Paper coming soon.</div>
  ) : (
    (() => {
      const grouped = {};
      questions.forEach((q) => {
        const sec = q.section || "Questions";
        if (!grouped[sec]) grouped[sec] = [];
        grouped[sec].push(q);
      });

      let qNum = 0;

      return Object.keys(grouped).map((sectionName) => (
        <div key={sectionName} style={{ marginBottom: '28px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            color: color,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '12px',
            paddingBottom: '8px',
            borderBottom: `2px solid ${color}30`
          }}>
            {sectionName}
          </div>
          {grouped[sectionName].map((q) => {
            qNum++;
            return (
              <div key={q.id} className="sub-q-card" style={openId === q.id ? { borderColor: color } : {}}>
                <div className="sub-q-header" onClick={() => toggle(q.id)}>
                  <div
                    className="sub-q-marks"
                    style={{ background: `${color}18`, color: color, borderColor: color }}
                  >
                    Q{qNum} · {q.marks}
                  </div>
                  <div className="sub-q-text">{q.text}</div>
                  <div
                    className="sub-q-toggle"
                    style={openId === q.id ? { background: color, transform: 'rotate(180deg)' } : {}}
                  >
                    <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                  </div>
                </div>
                <div className="sub-q-answer" style={{ maxHeight: openId === q.id ? '500px' : '0' }}>
                  <div className="sub-q-answer-inner">{q.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      ));
    })()
  )}
</div>
        </>
      )}
    </div>
  );
}

export default SubjectPage;