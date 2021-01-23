import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Golfwithhotelblock from '../components/golfwithhotelblock.js'
import Featuredslder from '../components/featuredslider.js'

import Layout from '../components/Layout'

import { MdGolfCourse } from 'react-icons/md'
import { BsPlus } from 'react-icons/bs'
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
  FaUserPlus,
  FaInfoCircle,
  FaCar,
  FaUsers,
  FaBuilding,
} from 'react-icons/fa'

import herobg from '../assets/images/slider-1.png'

import hotelimg from '../assets/images/hotel.png'
import golfimg from '../assets/images/sgolf.png'
export default class golfwithhotel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      arrows: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    }
    return (
      <Layout>
        <div>
          <section className="hero-banner-short">
            <img src={herobg} className="img-fluid" alt="herobg" />

            <h2 className="page-title text-white">
              <b>Golfing</b> &<b> Holidays in the East</b>
            </h2>

            <div className="contact-fomr">
              <Container>
                <Row>
                  <Col xs={12}>
                    <h4 className="text-uppercase font-24 mb-3">
                      Contact us now
                    </h4>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="name" placeholder="NAME" />

                      <span>
                        <FaUserAlt />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="E-MAIL" />

                      <span>
                        <FaEnvelope />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="HOW MANY DAYS?" />

                      <span>
                        <FaRegClock />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="ROUNDS OF GOLF" />

                      <span>
                        <MdGolfCourse />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="DD / MM / YYYY" />

                      <span>
                        <FaRegCalendarAlt />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="HOW MANY PEOPLE?"
                      />

                      <span>
                        <FaUserPlus />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Form.Group controlId="FaUserPlus">
                      <Form.Control type="text" placeholder="HOTEL LOCATION" />

                      <span>
                        <FaMapMarkerAlt />
                      </span>
                    </Form.Group>
                  </Col>

                  <Col md={4} lg={3}>
                    <Button className="search">Send Now</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>

          <div className="clearfix"></div>

          <section className="featured-hotel commanPaddding ">
            <Container>
              <div className="featured-slide">
                <div className="featured-porp-1">
                  <div className="featured-slide-lr">
                    <span className="f-badge-1 ">featured</span>

                    <span className="f-badge-2 ">20 % Off</span>

                    <div className="slide-height-50">
                      <Featuredslder />
                    </div>
                  </div>

                  <div className="featured-slide-lr d-flex align-items-center justify-content-center">
                    <div className="new-box">
                      <div className="green-room">
                        <h3>HUA HIN GOLF PACKAGES WITH HOTEL</h3>

                        <p className="text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent erat tortor, lacinia ut arcu id,
                          pellentesque vulputate massa. Sed egestas ex
                          convallis, hendrerit metus id, euismod urna. Sed
                          hendrerit posuere ligula, ut ultrices lectus aliquam
                          non. Quisque nec hendrerit tortor.{' '}
                        </p>

                        <div className="golf-bio">
                          <Row>
                            <Col lg={8} md={9} xs={7}>
                              <div className="golf-houe">
                                <p className="mb-0">
                                  <strong>The price starts from</strong>
                                </p>
                                <h3 className="green-color mb-0">
                                  <strong>2325 THB</strong>
                                </h3>
                              </div>
                            </Col>

                            <Col lg={4} md={3} xs={5}>
                              <div className="price text-right">
                                <a href="#" className="book-btn new-wi">
                                  Book now
                                </a>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="featured-porp-1">
                  <div className="content-info"></div>
                </div>
              </div>
            </Container>
          </section>

          <section className="softing-filter commanPaddding pt-0">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="softing-bar">
                    <Form.Group>
                      <Form.Label as="legend" className="text-uppercase">
                        sort by:
                      </Form.Label>

                      <div className="radio-custom">
                        <Form.Check
                          type="radio"
                          label="Destination"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="Price"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      </div>
                    </Form.Group>
                  </div>
                </Col>

                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <Golfwithhotelblock />
                    </Col>
                    <Col md={6}>
                      <Golfwithhotelblock />
                    </Col>
                    <Col md={6}>
                      <Golfwithhotelblock />
                    </Col>
                    <Col md={6}>
                      <Golfwithhotelblock />
                    </Col>
                    <Col md={6}>
                      <Golfwithhotelblock />
                    </Col>
                    <Col md={6}>
                      <Golfwithhotelblock />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}
