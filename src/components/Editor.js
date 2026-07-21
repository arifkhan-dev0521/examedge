import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import {
  FaSave, FaPlus, FaTrash, FaEye, FaCode, FaCheckCircle,
  FaLightbulb, FaImage, FaLink, FaYoutube, FaChevronLeft
} from 'react-icons/fa';
import { db } from '../firebase';
import '../components/SubjectPage.css';
import './Editor.css';

// ---- Same badge logic as SubjectPage, kept in sync manually ----
function getSiteBadge(url) {
  if (!url) return { label: '?', bg: '#94a3b8', color: '#fff', name: 'Link' };
  const u = url.toLowerCase();
  if (u.includes('geeksforgeeks')) return { label: 'G', bg: '#2F8D46', color: '#fff', name: 'GeeksforGeeks' };
  if (u.includes('tutorialspoint')) return { label: 'T', bg: '#2C6FBB', color: '#fff', name: 'TutorialsPoint' };
  if (u.includes('javatpoint')) return { label: 'J', bg: '#E67E22', color: '#fff', name: 'Javatpoint' };
  if (u.includes('w3schools')) return { label: 'W3', bg: '#2A9D8F', color: '#fff', name: 'W3Schools' };
  if (u.includes('wikipedia')) return { label: 'W', bg: '#111827', color: '#fff', name: 'Wikipedia' };
  return { label: '🔗', bg: '#94a3b8', color: '#fff', name: 'Reference' };
}

function AnswerPreview({ answer, color }) {
  if (!answer) return null;
  return (
    <div className="ed-preview-card">
      <p className="ans-text">{answer.text}</p>
      {answer.points && answer.points.length > 0 && (
        <ul className="ans-points">
          {answer.points.filter(Boolean).map((pt, i) => <li key={i}>{pt}</li>)}
        </ul>
      )}
      {answer.image && <img src={answer.image} alt="Diagram" className="ans-diagram" loading="lazy" />}
      {answer.tip && (
        <div className="ans-tip" style={{ borderLeftColor: color || '#5B4FE8' }}>
          <FaLightbulb style={{ color: color || '#5B4FE8' }} />
          <span>{answer.tip}</span>
        </div>
      )}
      <div className="ans-bottom-bar">
        <div className="ans-ref-icons">
          {(answer.links || []).filter(l => l.url).map((link, i) => {
            const badge = getSiteBadge(link.url);
            return (
              <span key={i} className="ans-icon-btn" style={{ background: badge.bg, color: badge.color }} title={link.label}>
                {badge.label}
              </span>
            );
          })}
          {answer.video && (
            <span className="ans-icon-btn ans-icon-youtube" title="YouTube"><FaYoutube /></span>
          )}
        </div>
      </div>
    </div>
  );
}

function emptyAnswer() {
  return { text: '', points: [''], tip: '', image: '', links: [{ label: '', url: '' }], video: '' };
}

function Editor() {
  const [subjectIds, setSubjectIds] = useState([]);
  const [subjectId, setSubjectId] = useState('');
  const [subjectDoc, setSubjectDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  // which question is being edited: { scope: 'unit'|'yearWise', unitKey, year, index, isNew }
  const [target, setTarget] = useState(null);
  const [draftAnswer, setDraftAnswer] = useState(null);
  const [draftMeta, setDraftMeta] = useState({ text: '', marks: '', section: '' });

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, 'subjects'));
      setSubjectIds(snap.docs.map(d => d.id).sort());
    })();
  }, []);

  const loadSubject = async (id) => {
    setSubjectId(id);
    setTarget(null);
    setSaveMsg('');
    if (!id) { setSubjectDoc(null); return; }
    setLoading(true);
    const snap = await getDoc(doc(db, 'subjects', id));
    setSubjectDoc(snap.exists() ? snap.data() : null);
    setLoading(false);
  };

  const openQuestion = (scope, unitKey, year, index) => {
    let q;
    if (scope === 'unit') q = subjectDoc.units[unitKey].questions[index];
    else q = subjectDoc.yearWise[year][index];

    const isRich = typeof q.answer === 'object' && q.answer !== null;
    setDraftMeta({ text: q.text || '', marks: q.marks || '', section: q.section || '' });
    setDraftAnswer(isRich
      ? {
          text: q.answer.text || '',
          points: q.answer.points && q.answer.points.length ? [...q.answer.points] : [''],
          tip: q.answer.tip || '',
          image: q.answer.image || '',
          links: q.answer.links && q.answer.links.length ? q.answer.links.map(l => ({ ...l })) : [{ label: '', url: '' }],
          video: q.answer.video || ''
        }
      : { text: q.answer || '', points: [''], tip: '', image: '', links: [{ label: '', url: '' }], video: '' }
    );
    setTarget({ scope, unitKey, year, index, isNew: false });
    setSaveMsg('');
  };

  const openNewQuestion = (scope, unitKey, year) => {
    setDraftMeta({ text: '', marks: '', section: scope === 'unit' ? '' : 'Unit 1' });
    setDraftAnswer(emptyAnswer());
    setTarget({ scope, unitKey, year, index: -1, isNew: true });
    setSaveMsg('');
  };

  const updatePoint = (i, val) => {
    const pts = [...draftAnswer.points];
    pts[i] = val;
    setDraftAnswer({ ...draftAnswer, points: pts });
  };
  const addPoint = () => setDraftAnswer({ ...draftAnswer, points: [...draftAnswer.points, ''] });
  const removePoint = (i) => setDraftAnswer({ ...draftAnswer, points: draftAnswer.points.filter((_, idx) => idx !== i) });

  const updateLink = (i, field, val) => {
    const links = [...draftAnswer.links];
    links[i] = { ...links[i], [field]: val };
    setDraftAnswer({ ...draftAnswer, links });
  };
  const addLink = () => setDraftAnswer({ ...draftAnswer, links: [...draftAnswer.links, { label: '', url: '' }] });
  const removeLink = (i) => setDraftAnswer({ ...draftAnswer, links: draftAnswer.links.filter((_, idx) => idx !== i) });

  const buildCleanAnswer = () => {
    const points = draftAnswer.points.map(p => p.trim()).filter(Boolean);
    const links = draftAnswer.links.filter(l => l.url && l.url.trim());
    const clean = { text: draftAnswer.text.trim() };
    if (points.length) clean.points = points;
    if (draftAnswer.tip.trim()) clean.tip = draftAnswer.tip.trim();
    if (draftAnswer.image.trim()) clean.image = draftAnswer.image.trim();
    if (links.length) clean.links = links;
    if (draftAnswer.video.trim()) clean.video = draftAnswer.video.trim();
    // if nothing but plain text, keep it simple as a string for consistency with old data
    if (Object.keys(clean).length === 1) return clean.text;
    return clean;
  };

  const saveQuestion = async () => {
    if (!draftMeta.text.trim()) { setSaveMsg('⚠️ Question text is required.'); return; }
    setSaving(true);
    setSaveMsg('');
    const updatedDoc = JSON.parse(JSON.stringify(subjectDoc));
    const finalAnswer = buildCleanAnswer();

    if (target.scope === 'unit') {
      if (!updatedDoc.units[target.unitKey].questions) updatedDoc.units[target.unitKey].questions = [];
      const arr = updatedDoc.units[target.unitKey].questions;
      const nextId = arr.length ? Math.max(...arr.map(q => q.id || 0)) + 1 : 1;
      if (target.isNew) arr.push({ id: nextId, marks: draftMeta.marks, text: draftMeta.text, answer: finalAnswer });
      else arr[target.index] = { ...arr[target.index], marks: draftMeta.marks, text: draftMeta.text, answer: finalAnswer };
    } else {
      if (!updatedDoc.yearWise) updatedDoc.yearWise = {};
      if (!updatedDoc.yearWise[target.year]) updatedDoc.yearWise[target.year] = [];
      const arr = updatedDoc.yearWise[target.year];
      const nextId = arr.length ? Math.max(...arr.map(q => q.id || 0)) + 1 : 1;
      if (target.isNew) arr.push({ id: nextId, section: draftMeta.section, marks: draftMeta.marks, text: draftMeta.text, answer: finalAnswer });
      else arr[target.index] = { ...arr[target.index], section: draftMeta.section, marks: draftMeta.marks, text: draftMeta.text, answer: finalAnswer };
    }

    try {
      await setDoc(doc(db, 'subjects', subjectId), updatedDoc);
      setSubjectDoc(updatedDoc);
      setSaveMsg('✅ Saved to Firestore.');
    } catch (err) {
      setSaveMsg('❌ Save failed — check Firestore rules (write must be temporarily enabled). ' + err.message);
    }
    setSaving(false);
  };

  return (
    <div className="editor-page">
      <div className="editor-header">
        <h1>Content Editor</h1>
        <p>Internal tool — edit answers with live preview, save straight to Firestore.</p>
      </div>

      <div className="editor-toolbar">
        <select value={subjectId} onChange={(e) => loadSubject(e.target.value)}>
          <option value="">Select a subject…</option>
          {subjectIds.map(id => <option key={id} value={id}>{id}</option>)}
        </select>
        {loading && <span className="ed-loading">Loading…</span>}
      </div>

      {subjectDoc && !target && (
        <div className="editor-browser">
          <h3>{subjectDoc.name}</h3>

          {subjectDoc.units && (
            <div className="ed-section">
              <h4>Unit-wise Questions</h4>
              {Object.entries(subjectDoc.units).map(([unitKey, unit]) => (
                <div key={unitKey} className="ed-unit-block">
                  <div className="ed-unit-title">Unit {unitKey} — {unit.title}</div>
                  <div className="ed-q-list">
                    {(unit.questions || []).map((q, i) => (
                      <button key={i} className="ed-q-row" onClick={() => openQuestion('unit', unitKey, null, i)}>
                        <span>{q.text}</span>
                        {typeof q.answer === 'object' ? <FaCheckCircle className="ed-rich-icon" title="Rich format" /> : null}
                      </button>
                    ))}
                    <button className="ed-add-q" onClick={() => openNewQuestion('unit', unitKey, null)}>
                      <FaPlus /> Add question to Unit {unitKey}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {subjectDoc.yearWise && (
            <div className="ed-section">
              <h4>Solved Papers (Year-wise)</h4>
              {Object.entries(subjectDoc.yearWise).map(([year, questions]) => (
                <div key={year} className="ed-unit-block">
                  <div className="ed-unit-title">{year}</div>
                  <div className="ed-q-list">
                    {questions.map((q, i) => (
                      <button key={i} className="ed-q-row" onClick={() => openQuestion('yearWise', null, year, i)}>
                        <span>[{q.section}] {q.text}</span>
                        {typeof q.answer === 'object' ? <FaCheckCircle className="ed-rich-icon" title="Rich format" /> : null}
                      </button>
                    ))}
                    <button className="ed-add-q" onClick={() => openNewQuestion('yearWise', null, year)}>
                      <FaPlus /> Add question to {year}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {target && draftAnswer && (
        <div className="editor-form-layout">
          <div className="editor-form">
            <button className="ed-back-btn" onClick={() => setTarget(null)}><FaChevronLeft /> Back to list</button>

            <label>Question text</label>
            <textarea rows={2} value={draftMeta.text} onChange={(e) => setDraftMeta({ ...draftMeta, text: e.target.value })} />

            <div className="ed-inline-fields">
              <div>
                <label>Marks</label>
                <input value={draftMeta.marks} onChange={(e) => setDraftMeta({ ...draftMeta, marks: e.target.value })} placeholder="e.g. 10 Marks" />
              </div>
              {target.scope === 'yearWise' && (
                <div>
                  <label>Section</label>
                  <input value={draftMeta.section} onChange={(e) => setDraftMeta({ ...draftMeta, section: e.target.value })} placeholder="e.g. Unit 2" />
                </div>
              )}
            </div>

            <label>Answer — main text</label>
            <textarea rows={3} value={draftAnswer.text} onChange={(e) => setDraftAnswer({ ...draftAnswer, text: e.target.value })} />

            <label><FaCode /> Bullet points</label>
            {draftAnswer.points.map((pt, i) => (
              <div className="ed-list-row" key={i}>
                <input value={pt} onChange={(e) => updatePoint(i, e.target.value)} placeholder={`Point ${i + 1}`} />
                <button className="ed-icon-btn-del" onClick={() => removePoint(i)}><FaTrash /></button>
              </div>
            ))}
            <button className="ed-add-btn" onClick={addPoint}><FaPlus /> Add point</button>

            <label><FaLightbulb /> Exam tip (optional)</label>
            <input value={draftAnswer.tip} onChange={(e) => setDraftAnswer({ ...draftAnswer, tip: e.target.value })} placeholder="A short exam-writing tip" />

            <label><FaImage /> Diagram image URL (optional)</label>
            <input value={draftAnswer.image} onChange={(e) => setDraftAnswer({ ...draftAnswer, image: e.target.value })} placeholder="https://…" />

            <label><FaLink /> Reference links (optional)</label>
            {draftAnswer.links.map((link, i) => (
              <div className="ed-list-row ed-link-row" key={i}>
                <input value={link.label} onChange={(e) => updateLink(i, 'label', e.target.value)} placeholder="Label, e.g. Read on GeeksforGeeks" />
                <input value={link.url} onChange={(e) => updateLink(i, 'url', e.target.value)} placeholder="https://…" />
                <button className="ed-icon-btn-del" onClick={() => removeLink(i)}><FaTrash /></button>
              </div>
            ))}
            <button className="ed-add-btn" onClick={addLink}><FaPlus /> Add link</button>

            <label><FaYoutube /> YouTube video URL (optional)</label>
            <input value={draftAnswer.video} onChange={(e) => setDraftAnswer({ ...draftAnswer, video: e.target.value })} placeholder="https://youtube.com/watch?v=…" />

            <button className="ed-save-btn" onClick={saveQuestion} disabled={saving}>
              <FaSave /> {saving ? 'Saving…' : 'Save to Firestore'}
            </button>
            {saveMsg && <p className="ed-save-msg">{saveMsg}</p>}
          </div>

          <div className="editor-preview">
            <div className="ed-preview-label"><FaEye /> Live Preview</div>
            <div className="ed-preview-q">
              <span className="ed-preview-badge">{draftMeta.marks || 'Marks'}</span>
              <p>{draftMeta.text || 'Question text will appear here…'}</p>
            </div>
            <AnswerPreview answer={draftAnswer} color={subjectDoc?.color} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Editor;