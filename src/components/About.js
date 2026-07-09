import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-avatar">AK</div>
        <h1>Hi, I'm Arif.</h1>
        <p className="about-role">Student · BCA · Kurukshetra University</p>
      </div>

      <div className="about-content">
        <div className="about-block">
          <h2>Why I built ExamEdge</h2>
          <p>
            I come from a small village and studied in a government school
            before joining a Tier-3 college for BCA. When exams came around,
            I noticed something every student around me faced — previous
            year papers scattered across ten different websites, answers
            with no structure, and no idea how much to actually write for
            a 2, 5, or 10 mark question.
          </p>
          <p>
            I always wrote my own answers in an organized, exam-ready
            format — and my teachers noticed it too. ExamEdge started as
            that same habit, built into a website, so every student at
            Kurukshetra University could study the same way.
          </p>
        </div>

        <div className="about-block">
          <h2>What I'm building</h2>
          <p>
            Right now, ExamEdge covers BCA at Kurukshetra University —
            unit-wise notes and full solved papers, organized subject by
            subject. It's built and maintained by one student, one subject
            at a time, with real papers and real answers — no shortcuts.
          </p>
        </div>

        <div className="about-block">
          <h2>What's next</h2>
          <p>
            More subjects, more semesters, and eventually more universities —
            growing the same way it started: one well-covered subject before
            moving to the next.
          </p>
        </div>

        <button className="about-back" onClick={() => navigate('/')}>
          ← Back to ExamEdge
        </button>
      </div>
    </div>
  );
}

export default About;