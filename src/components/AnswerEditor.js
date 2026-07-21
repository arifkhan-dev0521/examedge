import { useState, useCallback, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { Image as ImageExt } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TextAlign } from '@tiptap/extension-text-align';
import { Superscript } from '@tiptap/extension-superscript';
import { Subscript } from '@tiptap/extension-subscript';
import { CharacterCount } from '@tiptap/extension-character-count';
import { TaskList } from '@tiptap/extension-task-list';
import { TaskItem } from '@tiptap/extension-task-item';
import { Placeholder } from '@tiptap/extension-placeholder';
import { createLowlight, common } from 'lowlight';
import { doc, setDoc } from 'firebase/firestore';
import {
  FaBold, FaItalic, FaUnderline, FaStrikethrough, FaHighlighter,
  FaListUl, FaListOl, FaTasks, FaImage, FaTable,
  FaQuoteRight, FaLink, FaUndo, FaRedo, FaTimes, FaSave,
  FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify,
  FaSuperscript, FaSubscript, FaGripLines, FaLightbulb, FaTrash, FaPlus
} from 'react-icons/fa';
import { db } from '../firebase';
import './AnswerEditor.css';

const lowlight = createLowlight(common);

function ToolbarButton({ onClick, active, title, children, disabled }) {
  return (
    <button
      type="button"
      className={`ae-tb-btn ${active ? 'active' : ''}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function AnswerEditor({ subjectId, target, question, color, onClose, onSaved }) {
  const [tip, setTip] = useState((question.answer && question.answer.tip) || '');
  const [links, setLinks] = useState(
    (question.answer && question.answer.links && question.answer.links.length)
      ? question.answer.links.map(l => ({ ...l }))
      : [{ label: '', url: '' }]
  );
  const [video, setVideo] = useState((question.answer && question.answer.video) || '');
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const initialHTML = (() => {
    const a = question.answer;
    if (typeof a === 'string') return `<p>${a}</p>`;
    if (a && a.html) return a.html;
    if (a) {
      let html = a.text ? `<p>${a.text}</p>` : '';
      if (a.points && a.points.length) {
        html += '<ul>' + a.points.map(p => `<li>${p}</li>`).join('') + '</ul>';
      }
      return html || '<p></p>';
    }
    return '<p></p>';
  })();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      ImageExt.configure({ inline: false, allowBase64: true }),
      Link.configure({ openOnClick: false, autolink: true }),
      CodeBlockLowlight.configure({ lowlight }),
      Table.configure({ resizable: true }),
      TableRow, TableCell, TableHeader,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Superscript, Subscript,
      TaskList,
      TaskItem.configure({ nested: true }),
      CharacterCount,
      Placeholder.configure({ placeholder: 'Start writing the answer — headings, bold, images, code, tables, everything works here…' })
    ],
    content: initialHTML
  });

  const setColor = useCallback((c) => editor?.chain().focus().setColor(c).run(), [editor]);
  const setHighlight = useCallback((c) => editor?.chain().focus().toggleHighlight({ color: c }).run(), [editor]);

  const insertImage = () => {
    const url = window.prompt('Paste image URL (diagram, screenshot, etc.):');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const insertLink = () => {
    const url = window.prompt('Paste the link URL:');
    if (url) editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const insertCodeBlock = (lang) => {
    editor.chain().focus().toggleCodeBlock({ language: lang }).run();
  };

  const updateLink = (i, field, val) => {
    const next = [...links];
    next[i] = { ...next[i], [field]: val };
    setLinks(next);
  };
  const addLinkRow = () => setLinks([...links, { label: '', url: '' }]);
  const removeLinkRow = (i) => setLinks(links.filter((_, idx) => idx !== i));

  const handleSave = useCallback(async () => {
    if (!editor) return;
    setSaving(true);
    setSaveMsg('');
    const html = editor.getHTML();
    const cleanLinks = links.filter(l => l.url && l.url.trim());

    const newAnswer = { html };
    if (tip.trim()) newAnswer.tip = tip.trim();
    if (cleanLinks.length) newAnswer.links = cleanLinks;
    if (video.trim()) newAnswer.video = video.trim();

    try {
      const { getDoc } = await import('firebase/firestore');
      const docRef = doc(db, 'subjects', subjectId);
      const snap = await getDoc(docRef);
      if (!snap.exists()) throw new Error('Subject not found');
      const data = snap.data();

      if (target.scope === 'unit') {
        const arr = data.units[target.unitKey].questions;
        const idx = arr.findIndex(q => q.id === question.id);
        if (idx === -1) throw new Error('Question not found');
        arr[idx] = { ...arr[idx], answer: newAnswer };
      } else {
        const arr = data.yearWise[target.year];
        const idx = arr.findIndex(q => q.id === question.id);
        if (idx === -1) throw new Error('Question not found');
        arr[idx] = { ...arr[idx], answer: newAnswer };
      }

      await setDoc(docRef, data);
      setSaveMsg('✅ Saved');
      onSaved(newAnswer);
    } catch (err) {
      setSaveMsg('❌ ' + err.message);
    }
    setSaving(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, tip, links, video, subjectId, target, question.id]);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleSave, onClose]);

  if (!editor) return null;

  const chars = editor.storage.characterCount.characters();
  const words = editor.storage.characterCount.words();

  return (
    <div className="ae-overlay">
      <div className="ae-modal">

        <div className="ae-topbar">
          <div className="ae-topbar-q">
            <span className="ae-topbar-label">Editing answer for</span>
            <p>{question.text}</p>
          </div>
          <div className="ae-topbar-actions">
            {saveMsg && <span className="ae-save-msg">{saveMsg}</span>}
            <button className="ae-save-btn" style={{ background: color || '#5B4FE8' }} onClick={handleSave} disabled={saving}>
              <FaSave /> {saving ? 'Saving…' : 'Save (Ctrl+S)'}
            </button>
            <button className="ae-close-btn" onClick={onClose}><FaTimes /></button>
          </div>
        </div>

        <div className="ae-toolbar">
          <div className="ae-tb-group">
            <select
              className="ae-heading-select"
              onChange={(e) => {
                const v = e.target.value;
                if (v === 'p') editor.chain().focus().setParagraph().run();
                else editor.chain().focus().toggleHeading({ level: parseInt(v) }).run();
              }}
              value={
                editor.isActive('heading', { level: 1 }) ? '1' :
                editor.isActive('heading', { level: 2 }) ? '2' :
                editor.isActive('heading', { level: 3 }) ? '3' : 'p'
              }
            >
              <option value="p">Normal Text</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
            </select>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <ToolbarButton title="Bold (Ctrl+B)" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><FaBold /></ToolbarButton>
            <ToolbarButton title="Italic (Ctrl+I)" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><FaItalic /></ToolbarButton>
            <ToolbarButton title="Underline (Ctrl+U)" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><FaUnderline /></ToolbarButton>
            <ToolbarButton title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><FaStrikethrough /></ToolbarButton>
            <ToolbarButton title="Superscript" active={editor.isActive('superscript')} onClick={() => editor.chain().focus().toggleSuperscript().run()}><FaSuperscript /></ToolbarButton>
            <ToolbarButton title="Subscript" active={editor.isActive('subscript')} onClick={() => editor.chain().focus().toggleSubscript().run()}><FaSubscript /></ToolbarButton>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <input type="color" className="ae-color-input" title="Text color" onChange={(e) => setColor(e.target.value)} />
            <ToolbarButton title="Highlight yellow" onClick={() => setHighlight('#fef08a')}><FaHighlighter style={{ color: '#eab308' }} /></ToolbarButton>
            <ToolbarButton title="Highlight green" onClick={() => setHighlight('#bbf7d0')}><FaHighlighter style={{ color: '#22c55e' }} /></ToolbarButton>
            <ToolbarButton title="Highlight pink" onClick={() => setHighlight('#fbcfe8')}><FaHighlighter style={{ color: '#ec4899' }} /></ToolbarButton>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <ToolbarButton title="Align left" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}><FaAlignLeft /></ToolbarButton>
            <ToolbarButton title="Align center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}><FaAlignCenter /></ToolbarButton>
            <ToolbarButton title="Align right" active={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}><FaAlignRight /></ToolbarButton>
            <ToolbarButton title="Justify" active={editor.isActive({ textAlign: 'justify' })} onClick={() => editor.chain().focus().setTextAlign('justify').run()}><FaAlignJustify /></ToolbarButton>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <ToolbarButton title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}><FaListUl /></ToolbarButton>
            <ToolbarButton title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}><FaListOl /></ToolbarButton>
            <ToolbarButton title="Checklist" active={editor.isActive('taskList')} onClick={() => editor.chain().focus().toggleTaskList().run()}><FaTasks /></ToolbarButton>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <ToolbarButton title="Insert image" onClick={insertImage}><FaImage /></ToolbarButton>
            <ToolbarButton title="Insert table" onClick={insertTable}><FaTable /></ToolbarButton>
            <ToolbarButton title="Insert link" active={editor.isActive('link')} onClick={insertLink}><FaLink /></ToolbarButton>
            <ToolbarButton title="Blockquote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}><FaQuoteRight /></ToolbarButton>
            <ToolbarButton title="Horizontal line" onClick={() => editor.chain().focus().setHorizontalRule().run()}><FaGripLines /></ToolbarButton>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <select className="ae-code-lang-select" onChange={(e) => insertCodeBlock(e.target.value)} defaultValue="">
              <option value="" disabled>{'</> Code block…'}</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="sql">SQL</option>
              <option value="php">PHP</option>
              <option value="jsx">React JSX</option>
              <option value="plaintext">Plain text</option>
            </select>
          </div>

          <div className="ae-tb-divider" />

          <div className="ae-tb-group">
            <ToolbarButton title="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()}><FaUndo /></ToolbarButton>
            <ToolbarButton title="Redo (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()}><FaRedo /></ToolbarButton>
          </div>
        </div>

        <div className="ae-body">
          <div className="ae-editor-area">
            <EditorContent editor={editor} className="ae-tiptap" />
            <div className="ae-wordcount">{words} words · {chars} characters</div>
          </div>

          <div className="ae-sidebar">
            <label><FaLightbulb /> Exam tip</label>
            <textarea rows={2} value={tip} onChange={(e) => setTip(e.target.value)} placeholder="A short exam-writing tip…" />

            <label><FaLink /> Reference links</label>
            {links.map((l, i) => (
              <div className="ae-link-row" key={i}>
                <input value={l.label} onChange={(e) => updateLink(i, 'label', e.target.value)} placeholder="Label" />
                <input value={l.url} onChange={(e) => updateLink(i, 'url', e.target.value)} placeholder="https://…" />
                <button onClick={() => removeLinkRow(i)}><FaTrash /></button>
              </div>
            ))}
            <button className="ae-add-link-btn" onClick={addLinkRow}><FaPlus /> Add link</button>

            <label>YouTube video URL</label>
            <input value={video} onChange={(e) => setVideo(e.target.value)} placeholder="https://youtube.com/watch?v=…" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AnswerEditor;