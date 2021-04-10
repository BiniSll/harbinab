import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';


const Skill = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
        } else {
        setIsMobile(true);
        setIsDesktop(false);
        }
    }, []);
    return (
        <Container>
            <Row className="skills-wrapper">
                <p className="skills-wrapper-title">Skills</p>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <h3 className="skills-wrapper-details">Programming, .Net Development, React, Python, Java Development, Software Development, Proces improvement</h3>
                </Fade>
            </Row>
        </Container>
    );
};

export default Skill;