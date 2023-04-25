/* import { Container, Row, Col } from "react-bootstrap"; */
import './footer.css'
import { RiCopyrightLine } from 'react-icons/ri';

import Linkedin from '../../assets/img/icons/linkedinDark.svg';
import github from '../../assets/img/icons/githubDark.svg';
import instagram from '../../assets/img/icons/instagramDark.svg';
import cv from '../../assets/img/icons/cvDark.svg';



function comingSoon() {
  alert("BLog not available yet!")
}

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="main_logo footer_title">EL-JOSE</h1>
        <ul className="footer_list">
          <li>
            <a href="https://drive.google.com/file/d/1mF-xrlqEzjhG7AL2X_YEha7KyxAhoxPg/view?usp=sharing"
              className="footer_link">Download my CV</a>
          </li>
          <li>
            <a href='#home' onClick={() => comingSoon()}
              className="footer_link">Blog (cooming soon)</a>
          </li>
        </ul>
        <div className="social-icon footer_social">
          <a href='https://www.linkedin.com/in/elmer-jose-mu%C3%B1oz-zu%C3%B1iga-563022240/' target="_blank" rel="noreferrer" ><img alt='linkedin' src={Linkedin}></img></a>
          <a href='https://github.com/Ejmz216' target="_blank" rel="noreferrer" ><img alt='git' src={github}></img></a>
          <a href='https://www.instagram.com/eljose__mz/' target="_blank" rel="noreferrer" ><img alt='instagram' src={instagram}></img></a>
          <a href='https://drive.google.com/file/d/1mF-xrlqEzjhG7AL2X_YEha7KyxAhoxPg/view?usp=sharing'><img alt='cv' src={cv}></img></a>

        </div>
        <p className="footer_copy">P Sherman, 42 Wallaby Way, Sydney</p>
        <p className="footer_copy">Made with ⌚&💙 by El-Jose Muñoz  <RiCopyrightLine /> 2023 </p>

      </div>






      {/*  <Container>
        <Row className="align-items-center" id="mainFooter">
          <Col size={12} sm={6} className="text-center text-sm-end" id="innerContainer">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/elmer-jose-mu%C3%B1oz-zu%C3%B1iga-563022240/'><img alt='linkedin' src={Linkedin}></img></a>
              <a href='https://github.com/Ejmz216'><img alt='git' src={github}></img></a>
              <a href='https://www.instagram.com/eljose__mz/'><img alt='instagram' src={instagram}></img></a>
              <a href='https://drive.google.com/file/d/19dX0z1LboQlzlb_PKYJ42B3DBXcNOp6u/view?usp=sharing'><img alt='cv' src={cv}></img></a>
            </div>
            <p>Made with ⌚&💙 by Elmer Muñoz - Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container> */}
    </footer>
  )
}
