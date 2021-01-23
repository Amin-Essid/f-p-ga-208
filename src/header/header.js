import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import language from '../assets/images/lang.png';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume, FaFacebookF } from "react-icons/fa";









export default class header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            condition: !this.state.condition
        })
    }
    render() {
        return (
            <>

                <style type="text/css">
                    {/* enter css here */}
                    {`
                    

                    `}
                </style>


                <div className="custom-header">
                    <div className="top-nav">
                        <Container>
                            <Row>
                                <Col>
                                    <ul className="emillink">
                                        <li><span className="green-color"><FaPhoneVolume /></span>&nbsp;(xx) 123 456 789 | (xx) 123 456 789 </li>
                                        <li ><span className="green-color"><IoIosMail /></span>&nbsp;email@golfasia.dk</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <div className="followguide">
                                        <p>Follow us on Facebook       <FaFacebookF /> </p>

                                       | &nbsp;

                                       <img src={language} className=" img-fluid" alt="language" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="">
                        <Container>
                            <Navbar.Brand href="/"><img src={logo} className="App-logo img-fluid" alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={this.state.condition ? "button toggled" : "button"}
                            />
                            <Navbar.Collapse id="responsive-navbar-nav" defaultActiveKey="/">
                                <Nav className="ml-auto">
                                    <Nav.Link href="/">Home      </Nav.Link>

                                    <NavDropdown title="Areas" id="collasible-nav-dropdown">
                                        <Row>
                                            <Col xs={8} >
                                                <h5 className="menutitle"> Thailand
                                                </h5>
                                                <ul className="short-menu">
                                                    <li><a href="/area">Bangkok</a></li>
                                                    <li><a href="/">Chiang Mai & Nordthland</a></li>
                                                    <li><a href="/">Hua Hin</a></li>
                                                    <li><a href="/area">Koh Samui</a></li>
                                                    <li><a href="/">Pattaya</a></li>
                                                    <li><a href="/">Phukety</a></li>
                                                    <li><a href="/">River Kwai</a></li>
                                                </ul>


                                            </Col>

                                            <Col xs={4} >
                                                <h5 className="menutitle"> Vietnam
                                                </h5>
                                                <ul className="short-menu">
                                                    <li><a href="/">City</a></li>
                                                </ul>

                                                <div className="divider"></div>

                                                <h5 className="menutitle"> Vietnam
                                                </h5>
                                                <ul className="short-menu">
                                                    <li><a href="/">City</a></li>
                                                </ul>


                                            </Col>

                                        </Row>


                                    </NavDropdown>



                                    <Nav.Link href="/golfwithhotel">Golf With Hotel      </Nav.Link>
                                    <Nav.Link href="/">Golf Courses & Rates  </Nav.Link>
                                    <Nav.Link href="/">Hotels            </Nav.Link>
                                    <Nav.Link href="/">About Us      </Nav.Link>






                                </Nav>

                            </Navbar.Collapse>

                            <ul className="contact-form-right">
                                <li>
                                    <a href="#" className="desktop-hide fbicons"><FaFacebookF /> </a>

                                </li>
                                <li>    <a href="#deets"><span className="contactus-btn"> Contact </span></a></li>
                                <li><a href="#memes">
                                    <span className="search-her"> <BsSearch /></span>
                                </a>
                                </li>
                            </ul>






                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}
