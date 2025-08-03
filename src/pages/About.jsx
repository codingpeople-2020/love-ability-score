import React from "react";
import { Link } from 'react-router-dom';
import AdFitUnit from '../components/AdFitUnit';

const About = () => {
  return (
    <div className="container">
        <AdFitUnit unit="DAN-3AcHam36oy1kWn3N" width="728" height="90" />

        <p className="home-button"><Link to="/">🏠 HOME</Link></p>
        <div className="footer-nav-container">
            <AdFitUnit unit="DAN-lETwh64uekCxNfZg" width="320" height="50" />
            <h1 className="title">🎨 우리 이야기</h1>
            <p className="title-description">
              <strong>CodingPeople</strong>은 유쾌한 질문과 공감을 통해, 사람들의 <strong>연애 감각과 성향</strong>을 가볍게 들여다보는 테스트를 만듭니다.
            </p>

            <h2 className="sub-title">1. 우리가 추구하는 가치</h2>
            <p className="description">
              · 연애는 숫자도 기술도 아닙니다. <br />
              · 우리는 <strong>다양한 연애 방식과 성향</strong>을 존중하며, 사람들 간의 <strong>공감과 대화의 계기</strong>가 되는 콘텐츠를 제공합니다.
            </p>

            <h2 className="sub-title">2. 혹시 나도 모태솔로? 연애 능력 테스트</h2>
            <p className="description">
              · 16개의 질문을 통해 당신의 <strong>연애 감각 점수</strong>를 알아보세요. <br />
              · ‘연애 신’부터 ‘모태솔로 대표주자’까지 <strong>8단계의 유형</strong>으로 당신의 연애 스타일을 진단해 드립니다.
            </p>

            <h2 className="sub-title">3. 결과 공유와 재미</h2>
            <p className="description">
              · 결과는 <strong>감각적인 연애 진단 카드</strong>로 제공되며, <strong>카카오톡, 인스타그램, 블로그</strong> 등에서 손쉽게 공유할 수 있어요. <br />
              · 친구와 궁합도 비교하고, 함께 웃을 수 있는 <strong>연애 심리 테스트</strong>예요!
            </p>

            <h2 className="sub-title">4. 문의</h2>
            <p className="description">
              · 콘텐츠 제작, 광고 협업, 서비스 소개 등에 관한 문의는 아래 이메일로 연락 주세요. <br />
              · 이메일: codinglab_usdd@naver.co.kr
            </p>
        </div>

        <footer>
            <ul className="footer-nav">
              <li><Link style={{ color:"#999" }} to="/about">About Us</Link></li>
              <li><Link style={{ color:"#999" }} to="/privacy">Privacy Policy</Link></li>
              <li><Link style={{ color:"#999" }} to="/terms">Terms of Service</Link></li>
              <li><Link style={{ color:"#999" }} to="/contact">Contact Us</Link></li>
            </ul>
            <p className="copy">© 2025. CodingPeople All rights reserved</p>
        </footer>
    </div>
  );
};

export default About;
