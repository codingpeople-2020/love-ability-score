import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import results from "../data/results";
import { useEffect } from "react";
import AdFitUnit from '../components/AdFitUnit';

function ResultPage() {
  const { grade } = useParams(); 
  const numericGrade = parseInt(grade, 10);
  const navigate = useNavigate();
  const location = useLocation();
  const gender = location.state?.gender || 'male';

  const result = results.find(r => r.grade === numericGrade);
  const imageSrc = result?.image[gender];
  console.log(imageSrc);

  useEffect(() => {  
    if (!result) return;
    document.title = `연애 능력 테스트 결과: ${result.title}`;
    
    if (!document.querySelector("#kakao-sdk")) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.id = "kakao-sdk";
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("976539bd8485542131e67dbc2fc85dd2");
        }
      };
      script.onerror = () => {
        // console.error("Kakao SDK 로딩 실패");
      };
      document.head.appendChild(script);
    } else {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("976539bd8485542131e67dbc2fc85dd2");
      }
    }
  });

  const shareKakao = () => {
    if (window.Kakao && result) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `연애 능력 테스트 결과: ${result.name}`,
          description: result.description,
          imageUrl: window.location.origin + imageSrc,
          link: {
            mobileWebUrl: 'https://love-ability-score.vercel.app',
            webUrl: 'https://love-ability-score.vercel.app',
          },
        },
        buttons: [
          {
            title: "나도 테스트해보기",
            link: {
              mobileWebUrl: 'https://love-ability-score.vercel.app',
              webUrl: 'https://love-ability-score.vercel.app',
            },
          },
        ],
      });
    }
    console.log(window.location.origin + imageSrc);
  };

  if (!result) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>결과를 찾을 수 없어요!</h2>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>
    );
  }

  return (
    <div className="container">
      <AdFitUnit unit="DAN-3AcHam36oy1kWn3N" width="728" height="90" />
      <AdFitUnit unit="DAN-pKd2F5tBQ27mq1VK" width="320" height="100" />
      <div className="result-container" style={{ backgroundColor: "#fff1f2" }}>
        <h1 className="result-title">
          나의 연애 능력은?<br />
          💘 LV. {9 - result.grade} - <span style={{ color: "#ffffffff", backgroundColor: "#ec4899", padding: "4px 8px" }}>&nbsp;{result.name}&nbsp;</span>
        </h1>
        <img className="result-image" src={`${imageSrc}`} alt={result.name} />
        <p className="result-description">{result.description}</p>
        <div className="result-tip-box">
          <h3 className="result-tip-title"><span style={{ color: "#ffffffff", backgroundColor: "#ec4899", padding: "4px 8px" }}> {result.name}</span> 연애 잘하는 꿀TIP 🍯</h3>
          <p className="result-tip">{result.tips[0]}</p>
          <p className="result-tip">{result.tips[1]}</p>
          <p className="result-tip">{result.tips[2]}</p>
        </div>
        
        <div className="button-box">
          <button className="tip-button" onClick={() => navigate(`/guide/${grade}`, { state: { gender }})}  style={{ marginBottom: "10px" }}>💡 다른 유형과 연애 궁합이 궁금하다면?</button> <br />
          <button className="kakao-share-button" onClick={shareKakao} style={{ marginRight: "10px" }}>카카오톡 공유하기</button>
          <button className="retest-button"onClick={() => navigate("/")}>다시 테스트하기</button><br /><br />
          <button className="more-tests-button" onClick={() => navigate("/more-tests")}>🎯 다른 테스트도 해보기</button>
        </div>
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

export default ResultPage;