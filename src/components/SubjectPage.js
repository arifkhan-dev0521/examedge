import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import {
  FaLightbulb, FaYoutube, FaLanguage, FaEdit
} from 'react-icons/fa';
import { db } from '../firebase';
import Breadcrumb from './Breadcrumb';
import AnswerEditor from './AnswerEditor';
import './SubjectPage.css';

// Detects known reference sites from a URL and returns a small branded badge config.
// We use a colored letter badge instead of the real logo image to avoid reproducing trademarked logos.
function getSiteBadge(url) {
  const u = (url || '').toLowerCase();
  if (u.includes('geeksforgeeks.org')) return { label: 'G', name: 'GeeksforGeeks', bg: '#0F9D58', color: '#fff' };
  if (u.includes('tutorialspoint.com')) return { label: 'T', name: 'TutorialsPoint', bg: '#2E8B57', color: '#fff' };
  if (u.includes('javatpoint.com')) return { label: 'J', name: 'Javatpoint', bg: '#E67E22', color: '#fff' };
  if (u.includes('w3schools.com')) return { label: 'W3', name: 'W3Schools', bg: '#04AA6D', color: '#fff' };
  if (u.includes('wikipedia.org')) return { label: 'W', name: 'Wikipedia', bg: '#000', color: '#fff' };
  return { label: '🔗', name: 'Reference', bg: '#64748B', color: '#fff' };
}

function AnswerBody({ answer, color, showHindi, onEdit }) {
  const isRich = typeof answer === 'object' && answer !== null;
  const displayText = isRich ? (showHindi && answer.hindi ? answer.hindi : answer.text) : answer;
  const html = isRich && answer.html;
  const points = isRich && answer.points;
  const image = isRich && answer.image;
  const tip = isRich && answer.tip;
  const links = isRich && answer.links;
  const video = isRich && answer.video;

  return (
    <div>
      {html ? (
        <div className="ans-rich-html" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <>
          <p className="ans-text">{displayText}</p>
          {points && points.length > 0 && (
            <ul className="ans-points">
              {points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
          )}
          {image && (
            <img src={image} alt="Diagram" className="ans-diagram" loading="lazy" />
          )}
        </>
      )}

      {tip && (
        <div className="ans-tip" style={{ borderLeftColor: color }}>
          <FaLightbulb style={{ color }} />
          <span>{tip}</span>
        </div>
      )}

      <div className="ans-bottom-bar">
        <div className="ans-ref-icons">
          {links && links.map((link, i) => {
            const badge = getSiteBadge(link.url);
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="ans-icon-btn"
                style={{ background: badge.bg, color: badge.color }}
                title={badge.name}
                onClick={(e) => e.stopPropagation()}
              >
                {badge.label}
              </a>
            );
          })}
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noreferrer"
              className="ans-icon-btn ans-icon-youtube"
              title="Watch on YouTube"
              onClick={(e) => e.stopPropagation()}
            >
              <FaYoutube />
            </a>
          )}
        </div>
        <button
          className="ans-edit-btn"
          title="Edit this answer"
          onClick={(e) => { e.stopPropagation(); onEdit && onEdit(); }}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

function SubjectPage() {
  const { subjectId, courseId } = useParams();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);
  const [activeUnit, setActiveUnit] = useState(1);
  const [viewMode, setViewMode] = useState('unit');
  const [activeYear, setActiveYear] = useState(null);
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hindiMap, setHindiMap] = useState({});
  const [editingQuestion, setEditingQuestion] = useState(null); // { question, target }

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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--text)' }}>
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

  const toggle = (id) => setOpenId(openId === id ? null : id);
  const toggleHindi = (id) => setHindiMap((prev) => ({ ...prev, [id]: !prev[id] }));

  const questions = viewMode === 'unit'
    ? units[activeUnit]?.questions || []
    : yearWise[activeYear] || [];

  const renderQuestionCard = (q) => {
    const hasHindi = typeof q.answer === 'object' && q.answer.hindi;
    return (
      <div key={q.id} className="sub-q-card" style={openId === q.id ? { borderColor: color } : {}}>
        <div className="sub-q-header" onClick={() => toggle(q.id)}>
          <div className="sub-q-marks" style={{ background: `${color}18`, color, borderColor: color }}>
            {q.marks}
          </div>
          <div className="sub-q-text">{q.text}</div>
          <div className="sub-q-toggle" style={openId === q.id ? { background: color, transform: 'rotate(180deg)' } : {}}>
            <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
          </div>
        </div>
        <div className="sub-q-answer" style={{ maxHeight: openId === q.id ? '900px' : '0' }}>
          <div className="sub-q-answer-inner">
            {hasHindi && (
              <div className="sub-q-answer-actions">
                <button className="ans-lang-toggle" style={{ color, borderColor: color }} onClick={() => toggleHindi(q.id)}>
                  <FaLanguage /> {hindiMap[q.id] ? 'English' : 'हिंदी'}
                </button>
              </div>
            )}
            <AnswerBody
              answer={q.answer}
              color={color}
              showHindi={!!hindiMap[q.id]}
              onEdit={() => setEditingQuestion({
                question: q,
                target: viewMode === 'unit'
                  ? { scope: 'unit', unitKey: activeUnit }
                  : { scope: 'yearWise', year: activeYear }
              })}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="subject-page">
      <Breadcrumb items={[
        { label: "KUK", path: "/kuk" },
        { label: subject.course, path: `/kuk/${courseId}` },
        { label: subject.name }
      ]} />

      <div className="subject-hero">
        <div className="subject-tag" style={{ background: `${color}18`, color, borderColor: color }}>
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

          <AnimatePresence mode="wait">
            <motion.div
              key={activeUnit}
              className="subject-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="subject-unit-heading">
                Unit {activeUnit} — {units[activeUnit]?.title}
              </h2>
              {questions.length === 0 ? (
                <div className="no-content">Questions coming soon for this unit.</div>
              ) : (
                questions.map(renderQuestionCard)
              )}
            </motion.div>
          </AnimatePresence>
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

          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              className="subject-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
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
                        fontSize: '13px', fontWeight: '700', color,
                        textTransform: 'uppercase', letterSpacing: '0.5px',
                        marginBottom: '12px', paddingBottom: '8px',
                        borderBottom: `2px solid ${color}30`
                      }}>
                        {sectionName}
                      </div>
                      {grouped[sectionName].map((q) => {
                        qNum++;
                        return renderQuestionCard({ ...q, marks: `Q${qNum} · ${q.marks}` });
                      })}
                    </div>
                  ));
                })()
              )}
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {editingQuestion && (
        <AnswerEditor
          subjectId={subjectId}
          target={editingQuestion.target}
          question={editingQuestion.question}
          color={color}
          onClose={() => setEditingQuestion(null)}
          onSaved={(newAnswer) => {
            setSubject((prev) => {
              const updated = JSON.parse(JSON.stringify(prev));
              if (editingQuestion.target.scope === 'unit') {
                const arr = updated.units[editingQuestion.target.unitKey].questions;
                const idx = arr.findIndex((q) => q.id === editingQuestion.question.id);
                if (idx !== -1) arr[idx] = { ...arr[idx], answer: newAnswer };
              } else {
                const arr = updated.yearWise[editingQuestion.target.year];
                const idx = arr.findIndex((q) => q.id === editingQuestion.question.id);
                if (idx !== -1) arr[idx] = { ...arr[idx], answer: newAnswer };
              }
              return updated;
            });
          }}
        />
      )}
    </div>
  );
}

export default SubjectPage;