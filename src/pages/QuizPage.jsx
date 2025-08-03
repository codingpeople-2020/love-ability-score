import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import questions from '../data/questions';
import results from '../data/results';
import AdFitUnit from '../components/AdFitUnit';

function QuizPage() {
  const [gender, setGender] = useState(null); // 'male' or 'female'
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (point) => {
  const newScore = score + point;
  setScore(newScore);

  const next = current + 1;
  if (next < questions.length) {
    setCurrent(next);
  } else {
    const result = results.find(r =>
      newScore >= r.scoreRange[0] && newScore <= r.scoreRange[1]
    );

    if (result) {
      navigate(`/result/${result.grade}`, { state: { gender } });
    } else {
      alert("결과를 찾을 수 없습니다.");
    }
  }
};

  if (!gender) {
    // 성별 선택 화면
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <AdFitUnit unit="DAN-ZadOeqZNPNfRRrB9" width="728" height="90" />
        <AdFitUnit unit="DAN-nCNnH3xEkL1Dij8l" width="320" height="100" />
        <div className="gender-container" style={{ backgroundColor: "#fff1f2" }}>
          <h2 className="gender-title">당신의 성별을 선택해주세요</h2>
          <div className='button-box'>
            <button className="start-button male-button" onClick={() => setGender('male')}>남 자</button><br /><br />
            <button className="start-button female-button" onClick={() => setGender('female')}>여 자</button>
          </div>
          <div className="ad-box">
            <AdFitUnit unit="DAN-M4u2X6XybNwj0cuo" width="320" height="50" />
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="container">
      <AdFitUnit unit="DAN-ZadOeqZNPNfRRrB9" width="728" height="90" />
      <AdFitUnit unit="DAN-nCNnH3xEkL1Dij8l" width="320" height="100" />

      <div className="quiz-container" style={{ backgroundColor: "#fff1f2" }}>
        <p className="progress-count">
          Q{current + 1} / {questions.length}
        </p>
        <div className="progress-bar">
          <div
            className="progress-piece"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <h2 className="question">{q.question}</h2>
        <div className="answer-box">
          {q.answers.map((opt, idx) => (
            <button
              className="answer-button"
              key={idx}
              onClick={() => handleAnswer(opt.score)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>

      <footer>
        <ul className="footer-nav">
          <li><Link style={{ color: "#999" }} to="/about">About Us</Link></li>
          <li><Link style={{ color: "#999" }} to="/privacy">Privacy Policy</Link></li>
          <li><Link style={{ color: "#999" }} to="/terms">Terms of Service</Link></li>
          <li><Link style={{ color: "#999" }} to="/contact">Contact Us</Link></li>
        </ul>
        <p className="copy">© 2025. CodingPeople All rights reserved</p>
      </footer>
    </div>
  );
}

export default QuizPage;

