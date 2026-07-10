import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <button className="about-back" onClick={() => navigate('/')}>
        <FaArrowLeft /> Back to ExamEdge
      </button>

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
        </div>
      </motion.div>

      <div className="about-content">

        <motion.div
          className="about-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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

        <motion.div
          className="about-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="about-label">Today</span>
          <h2>What ExamEdge covers right now</h2>
          <p>
            BCA at Kurukshetra University — unit-wise notes and full solved
            papers, organized subject by subject. It's built and maintained
            by one student, one subject at a time, with real papers and
            real answers. No shortcuts, no filler.
          </p>
        </motion.div>

        <motion.div
          className="about-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="about-label">What's Next</span>
          <h2>Where this is going</h2>
          <p>
            More subjects, more semesters, and eventually more universities —
            growing the same way it started: covering one subject properly
            before moving to the next.
          </p>
        </motion.div>

        <motion.div
          className="about-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Get in touch</h3>
          <div className="about-contact-links">
            <a href="mailto:arifmalik0800@gmail.com"><FaEnvelope /> arifmalik0800@gmail.com</a>
            <a href="https://github.com/arifkhan-dev0521" target="_blank" rel="noreferrer"><FaGithub /> arifkhan-dev0521</a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;