import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Featuredslder from '../components/featuredslider.js'

import Layout from '../components/Layout'

import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
  FaRegCalendarAlt,
  FaPencilAlt,
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
  FaCar,
  FaUsers,
  FaBuilding,
} from 'react-icons/fa'

import { AiFillEdit } from 'react-icons/ai'
import { MdGolfCourse } from 'react-icons/md'
import { GiPathDistance, GiConverseShoe } from 'react-icons/gi'
import { IoIosUmbrella } from 'react-icons/io'
import herobg from '../assets/images/slider-1.png'
import golfcar from '../assets/images/golf-cart-eps.png'
import bearing from '../assets/images/bearing-eps.png'
import open from '../assets/images/open-eps.png'
import driving from '../assets/images/golfer-eps.png'

import destimage from '../assets/images/destication.png'

export default class area extends Component {
  render() {
    return (
      <Layout>
        <div>
          <section className="hero-banner">
            <img src={herobg} className="img-fluid" alt="herobg" />
            <div className="area-hero-content">
              <Container>
                <Row>
                  <Col md={6}>
                    <div className="area-content text-white">
                      <h1 className="heading ">Banyan Golf Hua Hin</h1>
                      <h6 className="sub-heading text-uppercase mb-4">
                        <FaMapMarkerAlt />
                        Thailand
                      </h6>

                      <p>
                        The golf course is recognized as one of{' '}
                        <b>the best new courses in Southeast Asia </b>and a must
                        on your golf vacation in Hua Hin.
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="green-from text-white">
                      <h4>
                        Contact us now about <br></br>your golf trip
                      </h4>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="name" placeholder="NAME" />

                            <span>
                              <FaUserAlt />
                            </span>
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="number" placeholder="PHONE" />

                            <span>
                              <FaPhoneAlt />
                            </span>
                          </Form.Group>
                        </Col>

                        <Col md={12}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-MAIL" />

                            <span>
                              <FaEnvelope />
                            </span>
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Label className="text-uppercase">
                            Wanted game date
                          </Form.Label>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="name"
                              placeholder="DD / MM / YYYY"
                            />

                            <span>
                              <FaRegCalendarAlt />
                            </span>
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Label className="text-uppercase">
                            Wanted teetime
                          </Form.Label>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="name" placeholder="hh : mm" />

                            <span>
                              <FaRegClock />
                            </span>
                          </Form.Group>
                        </Col>

                        <Col md={12}>
                          <Form.Group as={Row}>
                            <Form.Label
                              as="legend"
                              column
                              xs={6}
                              className="text-uppercase"
                            >
                              Including transfer?
                            </Form.Label>
                            <Col xs={6}>
                              <div className="radio-custom">
                                <Form.Check
                                  type="radio"
                                  label="Yes"
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios1"
                                />
                                <Form.Check
                                  type="radio"
                                  label="No"
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios2"
                                />
                              </div>
                            </Col>
                          </Form.Group>
                        </Col>

                        <Col md={12}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              as="textarea"
                              rows={4}
                              placeholder="ANYTHING ELSE TO ADD?"
                            />
                            <span>
                              <FaPencilAlt />
                            </span>
                          </Form.Group>

                          <Button className="btn-orange-sendmg mr-auto ml-auto">
                            send now
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          <section className="area-fill commanPaddding ">
            <Container>
              <Row>
                <Col md={12}>
                  <h3 className="special-title pl-5 pr-5 mt-3 mb-5">
                    Banyan is one of the newer courses in Hua Hin and it is
                    nothing short of a fantastic golf course.
                  </h3>
                </Col>

                <Col md={12}>
                  <div className="mb-5">
                    <Featuredslder />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="short-bio text-justify">
                    <p>
                      BANYAN GOLF CLUB, HUA HIN - Banyan is the newest of the
                      courses in Hua Hin, and it must be noted that it is also a
                      very ambitious golf course. GolfEAST, which has designed
                      and been responsible for the establishment of the course,
                      is also behind other top courses in the East. Blue Canyon
                      on Phuket, which the Tour has used several times and ranks
                      high.{' '}
                    </p>

                    <p>
                      {' '}
                      GolfEAST even believes that Banyan has the opportunity to
                      become one of the very best courses in Southeast Asia. It
                      is a beautiful sight that one encounters when entering The
                      Banyan. The course is beautifully integrated into the
                      nature between trees and rocks. Challenges like lakes are
                      at play in five holes, and a stream crosses six holes. The
                      course is in par 72. The most beautiful sight can be found
                      at the tea spot on hole 15.
                    </p>

                    <p>
                      Here you can see the mountains around and the blue sea in
                      the background. With GolfAsia.dk you can also choose to
                      stay in one of the 5 star villas on the golf course. Some
                      with private pool and many with plenty of room for four
                      adults.{' '}
                    </p>

                    <p>
                      Banyan is thus a wonderful overall experience when you go
                      on vacation and play golf at the same time. As with the
                      other courses in the area, there are great clubhouse and
                      restaurant facilities.
                    </p>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="alert-badge text-uppercase">
                    <span>
                      <FaInfoCircle />
                    </span>
                    <p>
                      The price of this course includes Green fee & Caddie Fee.
                      Transfer is not inclusive but can be purchased.
                    </p>
                  </div>

                  <div className="price-per-person mt-3 mb-2">
                    <h4>Price in THB per person</h4>
                    <div className="person-1 no-left-border">
                      <h6>weekdays</h6>
                      <h4>3900 THB</h4>
                      <p>PER PERSON</p>
                    </div>

                    <div className="person-1">
                      <h6>weekdays</h6>
                      <h4>3900 THB</h4>
                      <p>PER PERSON</p>
                    </div>

                    <p className="mt-3">
                      <i>
                        The price is valid from 01 October - 30 April &
                        includes: Contact us for any discount price between 01
                        May - 31 Oct
                      </i>
                    </p>
                  </div>

                  <div className="price-per-person mt-3 mb-0">
                    <h4>Price in THB per person</h4>
                    <div className="person-1 no-left-border">
                      <h6>weekdays</h6>
                      <h4>3900 THB</h4>
                      <p>PER PERSON</p>
                    </div>

                    <div className="person-1">
                      <h6>weekdays</h6>
                      <h4>3900 THB</h4>
                      <p>PER PERSON</p>
                    </div>

                    <p className="mt-3">
                      <i>
                        The price is valid from 01 October - 30 April &
                        includes: Contact us for any discount price between 01
                        May - 31 Oct
                      </i>
                    </p>
                  </div>
                </Col>

                <Col md={12}>
                  <a href="#" className="load-more btn-orange">
                    Order now
                  </a>
                </Col>
                <Col md={12} className="mt-5">
                  <h2 className="site-title text-uppercase ">
                    <strong> Fact Sheet </strong>
                  </h2>

                  <ul className="fact-list">
                    <li>
                      <div className="field-40">
                        <p>
                          <FaMapMarkerAlt />
                          Location:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>9 kilometers south of Hua Hin</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          <MdGolfCourse />
                          Holes / Pairs / Length:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>18 holes par 72 (7361 yards)</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          <FaRegCalendarAlt />
                          Founded:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>2008</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          <AiFillEdit />
                          Designer:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>Golf East Co. (Appliances)</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          <GiPathDistance />
                          Distance:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>
                          The city center is 20 minute walking distance from the
                          hotel
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          {' '}
                          <img src={golfcar} className="img-fluid" /> Golf carts
                          :
                        </p>
                      </div>

                      <div className="field-60">
                        <p>Forced. Included in price, max 1 person per car.</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          {' '}
                          <img src={bearing} className="img-fluid" /> Bearing:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>1000 THB</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          <GiConverseShoe />
                          Golf Shoes:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>Can be rented for 200 THB</p>
                      </div>
                    </li>
                    <li>
                      <div className="field-40">
                        <p>
                          <IoIosUmbrella />
                          Umbrella:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>Can be rented for 150 THB</p>
                      </div>
                    </li>
                    <li>
                      <div className="field-40">
                        <p>
                          <FaUsers />
                          Maximum number of players per group:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>4</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          {' '}
                          <img src={open} className="img-fluid" />
                          Open:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>The monkey every day</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          {' '}
                          <img src={driving} className="img-fluid" />
                          Driving Range:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>Yes</p>
                      </div>
                    </li>

                    <li>
                      <div className="field-40">
                        <p>
                          <FaBuilding />
                          Amenities:
                        </p>
                      </div>

                      <div className="field-60">
                        <p>Hotel, Massage, Restaurants, Spa, Swimming Pool</p>
                      </div>
                    </li>
                  </ul>
                </Col>

                <Col md={12} className="mt-5">
                  <hr className="mb-5"></hr>

                  <h2 className="site-title text-uppercase ">
                    <strong>
                      {' '}
                      PERHAPS THE FOLLOWING COULD ALSO CATCH YOUR INTEREST{' '}
                    </strong>
                  </h2>

                  <ul className="popular-dest new-desting">
                    <li className="suggester">
                      <div className="hotel-img">
                        <img src={destimage} className="img-fluid" />

                        <div className="product-inquiry">
                          <h6 className="mb-0 text-uppercase">
                            Black Mountain Golf
                          </h6>
                        </div>
                      </div>
                      <div className="golf-bio">
                        <div className="golf-houe2">
                          <p className="mb-0 text-uppercase">
                            <small>The price starts from</small>
                          </p>
                          <h3 className="green-color">2325 THB</h3>
                        </div>

                        <div className="price">
                          <a href="#" className="book-btn">
                            Read more
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="suggester">
                      <div className="hotel-img">
                        <img src={destimage} className="img-fluid" />

                        <div className="product-inquiry">
                          <h6 className="mb-0 text-uppercase">
                            Black Mountain Golf
                          </h6>
                        </div>
                      </div>
                      <div className="golf-bio">
                        <div className="golf-houe2">
                          <p className="mb-0 text-uppercase">
                            <small>The price starts from</small>
                          </p>
                          <h3 className="green-color">2325 THB</h3>
                        </div>

                        <div className="price">
                          <a href="#" className="book-btn">
                            Read more
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="suggester">
                      <div className="hotel-img">
                        <img src={destimage} className="img-fluid" />

                        <div className="product-inquiry">
                          <h6 className="mb-0 text-uppercase">
                            Black Mountain Golf
                          </h6>
                        </div>
                      </div>
                      <div className="golf-bio">
                        <div className="golf-houe2">
                          <p className="mb-0 text-uppercase">
                            <small>The price starts from</small>
                          </p>
                          <h3 className="green-color">2325 THB</h3>
                        </div>

                        <div className="price">
                          <a href="#" className="book-btn">
                            Read more
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="suggester">
                      <div className="hotel-img">
                        <img src={destimage} className="img-fluid" />

                        <div className="product-inquiry">
                          <h6 className="mb-0 text-uppercase">
                            Black Mountain Golf
                          </h6>
                        </div>
                      </div>
                      <div className="golf-bio">
                        <div className="golf-houe2">
                          <p className="mb-0 text-uppercase">
                            <small>The price starts from</small>
                          </p>
                          <h3 className="green-color">2325 THB</h3>
                        </div>

                        <div className="price">
                          <a href="#" className="book-btn">
                            Read more
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="any-question text-white">
            <Container>
              <Row>
                <Col md={4}>
                  <h2 className="quest">Any questions?</h2>
                </Col>

                <Col md={6}>
                  <p>
                    Visit our FAQ's and clarify all your doubts. If your
                    question is not answered, please feel free to send us a
                    message.
                  </p>
                </Col>

                <Col md={2}>
                  <a
                    href="#"
                    className="btn btn-orange full-width-btn mt-0 text-white"
                  >
                    FAQ
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}
