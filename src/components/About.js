import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft, FaGithub, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaLinkedin, FaCode, FaLightbulb, FaHeart,
  FaRocket, FaBookOpen, FaUsers
} from 'react-icons/fa';
import './About.css';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const stats = [
  { icon: FaBookOpen, value: "8+",   label: "Subjects" },
  { icon: FaCode,     value: "100+", label: "Questions" },
  { icon: FaUsers,    value: "3",    label: "Years of Papers" },
  { icon: FaRocket,   value: "1",    label: "University, Growing" }
];

const skills = [
  "React", "JavaScript", "Firebase", "HTML & CSS",
  "Framer Motion", "Git & GitHub", "Python", "C++"
];

const timeline = [
  {
    year: "2024",
    title: "Idea Sparked",
    desc: "Noticed how scattered and unstructured previous year papers were. Started writing my own structured answers."
  },
  {
    year: "2025",
    title: "ExamEdge Goes Live",
    desc: "Launched with OS, DBMS, and C Programming for BCA General. First students start using it."
  },
  {
    year: "2026",
    title: "Full BCA Coverage",
    desc: "Expanded to BCA CTIS and BCA AI — Ethical Hacking, Cyber Forensics, OOP C++, Web Technologies and more."
  }
];

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <button className="about-back" onClick={() => navigate('/')}>
        <FaArrowLeft /> Back to ExamEdge
      </button>

      {/* HERO */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-avatar">AK</div>
        <h1>Hi, I'm Arif Khan.</h1>
        <p className="about-role">BCA Student · Kurukshetra University</p>
        <div className="about-meta">
          <span><FaMapMarkerAlt /> Yamunanagar, Haryana</span>
          <span><FaHeart style={{ color: '#e11d48' }} /> Built with love</span>
        </div>

        {/* Stats Row */}
        <div className="about-stats-row">
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <s.icon className="about-stat-icon" />
              <div className="about-stat-value">{s.value}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="about-content">

        {/* The Problem */}
        <motion.div className="about-block" {...fadeUp}>
          <span className="about-label">The Problem</span>
          <h2>Why I built ExamEdge</h2>
          <p>
            I come from a small village and studied in a government school
            before joining a Tier-3 college for BCA. When exams came around,
            I noticed the same problem every student around me faced —
            previous year papers scattered across ten different websites,
            answers with no structure, and no idea how much to actually
            write for a 2, 5, or 10 mark question.
          </p>
          <p>
            I always wrote my own answers in an organized, exam-ready
            format — and my teachers noticed it too. ExamEdge started as
            that same habit, built into a website, so every student at
            Kurukshetra University could study the same way.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="about-block" {...fadeUp}>
          <span className="about-label">Journey</span>
          <h2>How ExamEdge grew</h2>
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div className="about-timeline-item" key={i}>
                <div className="about-timeline-dot" />
                <div className="about-timeline-body">
                  <div className="about-timeline-year">{item.year}</div>
                  <div className="about-timeline-title">{item.title}</div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Today */}
        <motion.div className="about-block" {...fadeUp}>
          <span className="about-label">Today</span>
          <h2>What ExamEdge covers right now</h2>
          <p>
            BCA at Kurukshetra University — unit-wise notes and full solved
            papers, organized subject by subject. It's built and maintained
            by one student, one subject at a time, with real papers and
            real answers. No shortcuts, no filler.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className="about-block" {...fadeUp}>
          <span className="about-label">Tech Stack</span>
          <h2>Tools I used to build this</h2>
          <div className="about-skills">
            {skills.map((skill) => (
              <span className="about-skill-badge" key={skill}>
                <FaCode className="badge-icon" /> {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* What's Next */}
        <motion.div className="about-block" {...fadeUp}>
          <span className="about-label">What's Next</span>
          <h2>Where this is going</h2>
          <div className="about-next-card">
            <FaLightbulb className="about-next-icon" />
            <p>
              More subjects, more semesters, and eventually more universities —
              growing the same way it started: covering one subject properly
              before moving to the next.
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div className="about-contact" {...fadeUp}>
          <h3>Get in touch</h3>
          <p className="about-contact-sub">Have feedback, a subject request, or just want to say hi?</p>
          <div className="about-contact-links">
            <a href="mailto:arifmalik0800@gmail.com">
              <FaEnvelope /> arifmalik0800@gmail.com
            </a>
            <a href="https://github.com/arifkhan-dev0521" target="_blank" rel="noreferrer">
              <FaGithub /> arifkhan-dev0521
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;