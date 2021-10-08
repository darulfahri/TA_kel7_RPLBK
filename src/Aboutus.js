import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Fade from 'react-bootstrap/Fade'

class Aboutus extends React.Component {
    render() {
        return (
            <>
                <h1>About Us</h1>
                <Fade in={true}>
                    <Row>
                        <Col>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Tentang Kami</Accordion.Header>
                                    <Accordion.Body>
                                        Penyedia data lokasi RUMAH SAKIT dan Klinik di Kec.Tembalang kota SEMARANG.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Informasi Mahasiswa</Accordion.Header>
                                    <Accordion.Body>
                                        <b>
                                            Kelompok 7
                                        </b>
                                        <p>
                                            Darul Fahri ( 211201181200007 )
                                        </p>
                                        <p>
                                            Muhammad Faza I (21120118140083)
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Fade>
            </>
        )
    }
}
export default Aboutus;