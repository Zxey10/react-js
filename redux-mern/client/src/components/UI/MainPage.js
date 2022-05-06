import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './MainPage.module.scss'
import money from './images/money1.jpg'
import Button from './Button'


export default function MainPage() {

    const mainClasses = {
        backgroundImage: `url(${money})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <Container fluid className={styles.mainPage}>
            <Row>
                <Col>
                    <h1 className='text-center text-light'>Start here your journey on saving <br /> money and see how your money <br /> is managed</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>Get Started</Button>
                </Col>
            </Row>
        </Container>
    )
}