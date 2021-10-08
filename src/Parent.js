import { Component } from "react"; import React from "react";
import Aboutus from "./Aboutus";
import Home from "./Beranda";
// import './Rental.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.handleChangePage = this.handleChangePage.bind(this)

        this.state = {
            Home: true,
            aboutUs: false
        }
    }
    handleChangePage(e) {
        e.preventDefault()
        console.log(e.target.id);
        if (e.target.id === "") {
            this.setState(() => {
                return {
                    Home: this.state.Home = true,
                    aboutUs: this.state.aboutUs = false

                }
            })
        } else {
            if (e.target.id === "home-id") {
                this.setState(() => {
                    return {
                        Home: this.state.Home = true,
                        aboutUs: this.state.aboutUs = false

                    }
                })
            } else {
                if (e.target.id === "aboutus-id") {
                    this.setState(() => {
                        return {
                            aboutUs: this.state.aboutUs = true,
                            Home: this.state.Home = false

                        }
                    })
                }
            }
        }
    }

    render() {

        return (
            <>
                <Container>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#" id="home-id" onClick={this.handleChangePage}>HOSPITAL LIST TEMBALANG CARE</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#" id="home-id" onClick={this.handleChangePage}>Beranda</Nav.Link>
                                <Nav.Link href="#" id="aboutus-id" onClick={this.handleChangePage}>Tentang Kami</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    {this.state.Home && <Home />}
                    {this.state.aboutUs && <Aboutus />}
                </Container>

            </>
        );
    }
}
export default Parent;