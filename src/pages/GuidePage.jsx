import { useParams, useNavigate, useLocation, Link } from "react-router-dom"; 
import results from "../data/results"; 
import guideData from "../data/guide"; 
import AdFitUnit from '../components/AdFitUnit';

function GuidePage() { 
  const { grade } = useParams(); 
  const navigate = useNavigate(); 
  const myResult = results.find(r => r.grade === parseInt(grade, 10)); 
  const guide = guideData.find(g => g.grade === parseInt(grade, 10));

  const location = useLocation();
  const gender = location.state?.gender || "male";

  if (!myResult || !guide) { 
    return ( 
      <div style={{ textAlign: "center", padding: "40px" }}> 
      <h2>결과를 찾을 수 없어요 😢</h2> 
      <button onClick={() => navigate("/")}>
        홈으로 가기
        </button> 
      </div> 
    ); 
  }

const emojiByGrade = ["👑", "💘", "🌷", "🔥", "🧩", "🌱", "🐢", "🐣"];

return ( 
  <div className="container"> 
    <AdFitUnit unit="DAN-AsVXzrUu1qPG3ikh" width="728" height="90" /> 
    <AdFitUnit unit="DAN-nCNnH3xEkL1Dij8l" width="320" height="100" />

  <div className="guide-container" style={{ backgroundColor: "#fff1f2" }}>
    <h1 className="guide-title">
      LV. {9 - guide.grade} - <span style={{ color: "#4f46e5", backgroundColor: "#e5f4f9", padding: "4px 8px" }}>
        {myResult.name}
      </span><br /> 유형 가이드
    </h1>
    <img className="guide-image" src={`${myResult.image[gender]}`} alt={myResult.name} />

    <section className="guide-tip-section">
      <h2 className="guide-tip-title">💘 유형별 연애 TIP</h2>
      {Object.entries(guide.method).map(([key, value]) => {
        const other = results.find(r => r.grade === parseInt(key.replace("grade_", "")));
        return (
          <div className="guide-detail-section" key={key}>
            <h3>
              vs. <strong>{other.name}</strong> {emojiByGrade[other.grade - 1]}
            </h3>
            <p>{value.point}</p>
            <h2>👩‍❤️‍👨 궁합 지수 - {value.index} %</h2>
            <ul>
              {value.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>

    <div style={{ paddingTop: "24px" }}>
      <button
        onClick={() => navigate(`/result/${grade}`, { state: { gender }})}
        style={{
          background: "#24a5aa",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold"
        }}
      >
        결과 페이지로 돌아가기
      </button>
    </div>

    <div className="ad-box">
      <AdFitUnit unit="DAN-M4u2X6XybNwj0cuo" width="320" height="50" />
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

); }

export default GuidePage;