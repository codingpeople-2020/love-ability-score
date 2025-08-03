import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

function Home() {
  return (
    <div className="container">
      <AdFitUnit unit="DAN-J6LhGYfu9C41KjsI" width="728" height="90" />
      <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />

      <div className="start-container" style={{ backgroundColor: "#fff1f2" }}>
        <h1 className="start-title">💘 혹시 나도 모태솔로? 연애 능력 테스트!</h1>
        <h1 className="mobile-start-title">💘 혹시 나도 모태솔로?<br /> 연애 능력 테스트!</h1>
        <p className="start-description">
          16가지 질문으로 알아보는<br />
          당신의 연애 능력과 숨겨진 연애 유형!
        </p>
        <Link to="/quiz">
          <button className="start-button">테스트 시작하기</button>
        </Link><br />
        <div className="ad-box">
          <AdFitUnit unit="DAN-lETwh64uekCxNfZg" width="320" height="50" />
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

export default Home;

