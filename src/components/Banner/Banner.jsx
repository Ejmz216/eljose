import React from 'react';
import './Banner.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import headerImg from "../../assets/img/header-img.png";

/* import waves from '../assets/img/layered-waves.svg'; */
import { GiLightSabers } from 'react-icons/gi';

function Banner() {

    const [loopNum, setLoopNum] = React.useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Frontend Developer", "Web Designer", "Electronic & Telecom Engenieer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 800;

    React.useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }

    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-iems-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'> Welcome to my Portfolio </span>
                        <h1>Elmer Jose Muñoz Zúñiga</h1><h2><span className='wrap'>- {text}</span></h2>
                        <br></br>
                        <p>  Student of Electronic Engineering and Telecommunications, with an emphasis in Telematics at the University of Cauca and Frontend Developer.
                            Passionate about software development, user interface design and continuous learning. Teamwork and fun are my work principles.
                            I have developed projects with tools like React Js, Vanilla Js, NextJs, TailWind, Bootstrap, Sass and implementation of REST services.
                            I also have some practical experience in back-end development with NodeJs, PHP, and handling SQL and NoSQL databases (MySQL and MongoDB respectively).
                        </p>
                        <button onClick={() => console.log('connect')}><span>Let’s Connect</span><BsFillArrowRightCircleFill /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header img' />
                    </Col>
                </Row>
            </Container>


        </section>


    );
}

export { Banner }