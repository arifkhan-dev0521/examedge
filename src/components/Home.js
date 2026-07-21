import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt, FaGlobe, FaMicrochip, FaDatabase, FaUserShield,
  FaFileAlt, FaPen, FaBookOpen, FaMobileAlt, FaGift,
  FaCheckCircle, FaBolt, FaHeart, FaArrowRight, FaSearch, FaStar,
  FaUniversity, FaInstagram, FaFacebook, FaGithub, FaLinkedin,
  FaYoutube, FaEnvelope, FaPhoneAlt
} from 'react-icons/fa';
import './Home.css';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 }
};

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const uniRef = useRef(null);

  const universities = [
    { name: "KUK", fullName: "Kurukshetra University", path: "/kuk", active: true, color: 'violet' },
    { name: "MDU", fullName: "Maharshi Dayanand University", active: false, color: 'blue' },
    { name: "CGC", fullName: "Chandigarh Group of Colleges", active: false, color: 'green' },
    { name: "JNU", fullName: "Jawaharlal Nehru University", active: false, color: 'orange' }
  ];

  const filteredUniversities = universities.filter((uni) =>
    uni.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularSubjects = [
    { name: "Ethical Hacking", meta: "Semester 6 · BCA CTIS", icon: FaShieldAlt, color: 'violet', courseId: "bca-ctis", subjectId: "ethical-hacking" },
    { name: "Cyber Forensics", meta: "Semester 6 · BCA CTIS", icon: FaUserShield, color: 'pink', courseId: "bca-ctis", subjectId: "cyber-forensics" },
    { name: "Web Technologies", meta: "Semester 2 · All Branches", icon: FaGlobe, color: 'blue', courseId: "bca-general", subjectId: "web-technologies" },
    { name: "Operating System", meta: "Semester 3 · BCA General", icon: FaMicrochip, color: 'orange', courseId: "bca-general", subjectId: "os" },
    { name: "DBMS", meta: "Semester 3 · BCA General", icon: FaDatabase, color: 'green', courseId: "bca-general", subjectId: "dbms" }
  ];

  const features = [
    { icon: FaFileAlt, color: 'violet', title: "Previous Papers", desc: "Full solved papers from 2024, 2025 and 2026." },
    { icon: FaPen, color: 'blue', title: "Structured Answers", desc: "Written to the marks it's worth — 2, 5, or 10." },
    { icon: FaBookOpen, color: 'green', title: "Unit-wise Notes", desc: "Sorted exactly the way your syllabus is." },
    { icon: FaMobileAlt, color: 'orange', title: "Mobile Friendly", desc: "Study comfortably from your phone, anywhere." },
    { icon: FaGift, color: 'pink', title: "Free for All", desc: "No login, no paywall, no catch." }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    uniRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">

      {/* HERO */}
      <section className="eh-hero">
        <div className="eh-container eh-hero-grid">

          <div className="eh-hero-copy">
            <div className="eh-eyebrow"><FaStar /> Your Study Companion for KUK BCA</div>
            <h1 className="eh-h1">Answers built the way examiners actually grade.</h1>
            <p className="eh-sub">
              Previous year papers, unit-wise notes, and structured answers —
              matched to the marks they're worth. 100% free.
            </p>

            <div className="eh-cta-row">
              <button className="eh-btn-primary" onClick={() => navigate('/kuk')}>
                Explore Subjects <FaArrowRight />
              </button>
              <button className="eh-btn-outline" onClick={() => navigate('/subject/bca-ctis/concepts-of-os')}>
                View a Solved Paper <FaFileAlt />
              </button>
            </div>

            <div className="eh-pills">
              <span><FaCheckCircle className="pill-green" /> 100% Free</span>
              <span><FaBolt className="pill-orange" /> Easy to Use</span>
              <span><FaHeart className="pill-pink" /> Built by a Student</span>
            </div>

            <form className="eh-search" onSubmit={handleSearchSubmit}>
              <FaSearch className="eh-search-icon" />
              <input
                type="text"
                placeholder="Search a university, subject, or unit…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="eh-hero-visual" aria-hidden="true">
            <div className="eh-paper">
              <div className="eh-paper-top">
                <div>
                  <div className="eh-paper-label">Roll No.</div>
                  <div className="eh-roll-boxes">
                    {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
                  </div>
                </div>
                <div className="eh-paper-pages">Total Pages : 3</div>
              </div>
              <div className="eh-paper-uni">Kurukshetra University</div>
              <div className="eh-paper-code">BCA · Semester 6 · Ethical Hacking</div>
              <div className="eh-paper-meta">
                <span>Time : Three Hours</span>
                <span>Max Marks : 50</span>
              </div>
              <div className="eh-paper-rule" />
              <div className="eh-paper-q">
                <span className="eh-q-badge">Q6 · 10 Marks</span>
                <p>Explain the phases of hacking in detail.</p>
                <div className="eh-answer-preview">
                  <span>Definition</span>
                  <span>5 Phases</span>
                  <span>Diagram</span>
                  <span>Exam Tip</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* UNIVERSITIES */}
<motion.section className="eh-universities" ref={uniRef} {...reveal}>
  <div className="eh-container">
    <div className="eh-section-head eh-section-head-center">
      <h2><FaUniversity className="eh-section-star" /> Choose Your University</h2>
    </div>
    <div className="eh-uni-grid">
      {filteredUniversities.map((uni) => (
        <div
          key={uni.name}
          className="eh-uni-card"
          onClick={() => uni.active ? navigate(uni.path) : navigate('/coming-soon')}
          style={{ opacity: uni.active ? 1 : 0.6 }}
        >
          <div className={`eh-uni-icon icon-${uni.color}`}><FaUniversity /></div>
          <div className="eh-uni-text">
            <h3>{uni.name}</h3>
            <p>{uni.fullName}</p>
            {!uni.active && <span className="eh-soon">Coming Soon</span>}
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.section>

      {/* FEATURES */}
<motion.section className="eh-features" {...reveal}>
  <div className="eh-container">
    <div className="eh-section-head eh-section-head-center">
      <h2>What You Get</h2>
    </div>
    <div className="eh-features-grid">
            {features.map((f) => (
              <div className="eh-feature" key={f.title}>
                <div className={`eh-feature-icon icon-${f.color}`}><f.icon /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* POPULAR SUBJECTS */}
      <motion.section className="eh-popular" {...reveal}>
        <div className="eh-container">
          <div className="eh-popular-inner">
            <div className="eh-section-head">
              <h2><FaStar className="eh-section-star" /> Popular Subjects</h2>
            </div>
            <div className="eh-popular-list">
              {popularSubjects.map((s) => (
                <div
                  key={s.subjectId}
                  className="eh-popular-row"
                  onClick={() => navigate(`/subject/${s.courseId}/${s.subjectId}`)}
                >
                  <div className={`eh-popular-icon icon-${s.color}`}><s.icon /></div>
                  <div className="eh-popular-text">
                    <h3>{s.name}</h3>
                    <p>{s.meta}</p>
                  </div>
                  <FaArrowRight className="eh-popular-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA BANNER */}
      <motion.section className="eh-cta-section" {...reveal}>
        <div className="eh-container">
          <div className="eh-cta-banner">
            <div className="eh-cta-text">
              <h2>Preparing for exams?</h2>
              <p>Jump straight into solved papers and structured answers.</p>
            </div>
            <button onClick={() => navigate('/kuk')}>
              Explore Now <FaArrowRight />
            </button>
          </div>
        </div>
      </motion.section>

      {/* MISSION */}
      <motion.section className="eh-mission-section" {...reveal}>
        <div className="eh-container">
          <div className="eh-mission">
            <div className="eh-mission-photo">
              <div className="eh-mission-avatar">AK</div>
              <h4>Arif Khan</h4>
              <p>Founder, ExamEdge</p>
            </div>
            <div className="eh-mission-body">
              <span className="eh-mission-label">Our Mission</span>
              <h3>Built by a student, for students who deserve better study resources.</h3>
              <p>
                ExamEdge started because previous year papers and notes were
                scattered across ten different places, with no structure and
                no idea how much to actually write in an exam. This is
                that fix — one subject at a time.
              </p>
              <div className="eh-mission-stats">
                <div><h3>14+</h3><p>Subjects</p></div>
                <div><h3>400+</h3><p>Questions</p></div>
                <div><h3>3</h3><p>Years of Papers</p></div>
                <div><h3>1</h3><p>University, Growing</p></div>
              </div>
              <button className="eh-mission-link" onClick={() => navigate('/about')}>
                Read my full story <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="eh-footer">
        <div className="eh-container">
          <div className="eh-footer-grid">

            <div className="eh-footer-brand">
              <div className="eh-footer-logo">ExamEdge</div>
              <p>Built by a BCA student, for BCA students. Currently live for Kurukshetra University.</p>
              <div className="eh-footer-socials">
                <a href="https://instagram.com/malik_arif_07" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://facebook.com/yourhandle" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://github.com/arifkhan-dev0521" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/arifkhan442" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://youtube.com/@yourhandle" target="_blank" rel="noreferrer"><FaYoutube /></a>
              </div>
            </div>

            <div className="eh-footer-col">
              <h4>Explore</h4>
              <button onClick={() => navigate('/kuk/bca-ctis')}>BCA CTIS</button>
              <button onClick={() => navigate('/kuk/bca-general')}>BCA General</button>
              <button onClick={() => navigate('/kuk/bca-ai')}>BCA AI</button>
              <button onClick={() => navigate('/about')}>About the Developer</button>
            </div>

            <div className="eh-footer-col">
              <h4>Contact</h4>
              <a href="mailto:arifmalik0800@gmail.com"><FaEnvelope /> arifmalik0800@gmail.com</a>
              <a href="tel:+918708003442"><FaPhoneAlt /> +91 87080 03442</a>
            </div>

          </div>

          <div className="eh-footer-bottom">
            <p>© 2026 ExamEdge · Made with ❤️ in Haryana</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;