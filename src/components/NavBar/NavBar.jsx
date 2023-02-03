import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Linkedin from '../../assets/img/icons/linkedinDark.svg';
import github from '../../assets/img/icons/githubDark.svg';
import instagram from '../../assets/img/icons/instagramDark.svg';
import cv from '../../assets/img/icons/cv2.svg';
import moon from '../../assets/img/icons/moon.svg';
import './navBar.css';

function NavBar() {
    const [activeLink, setActiveLink] = React.useState('home');
    /*    const [scrolled, setScrolled] = React.useState(false);
      React.useEffect(() => {
            const onScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []) */

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    function comingSoon() {
        alert("Sorry! The Nightmode is Coming Soon!")
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <h3 className='main_logo'>EL-JOSE</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#qualification" className={activeLink === 'qualification' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('qualification')}>Qualification</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/elmer-jose-mu%C3%B1oz-zu%C3%B1iga-563022240/' target="_blank" rel="noreferrer" ><img alt='linkedin' src={Linkedin}></img></a>
                            <a href='https://github.com/Ejmz216' target="_blank" rel="noreferrer" ><img alt='git' src={github}></img></a>
                            <a href='https://www.instagram.com/eljose__mz/' target="_blank" rel="noreferrer" ><img alt='instagram' src={instagram}></img></a>
                            <a href='https://drive.google.com/file/d/19dX0z1LboQlzlb_PKYJ42B3DBXcNOp6u/view?usp=sharing' target="_blank" rel="noreferrer" ><img alt='cv' src={cv}></img></a>
                            <a href='#home' onClick={() => comingSoon()}><img alt='moon' src={moon}></img></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export { NavBar }
