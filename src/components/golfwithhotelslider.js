import React, { Component } from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import Golfwithhotelblock from '../components/golfwithhotelblock.js'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default class golfwithhotelslider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplaySpeed: 3000,
            arrows: false,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,


                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        };
        return (
            <div>

                <section className="golf-box commanPaddding bg-light-green">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="d-flex justify-content-between">
                                    <h2 className="site-title text-uppercase ">

                                        <strong>   Golf </strong> + Hotels
                                </h2>

                                    <ul className="lr-arrow">
                                        <li><button className="home-prev2" onClick={this.previous} ><FaChevronLeft /></button></li>
                                        <li><button className="home-next2" onClick={this.next}><FaChevronRight /></button></li>
                                    </ul>

                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="golf-plus-box">
                                    <Slider ref={c => (this.slider = c)} {...settings2}>

                                        <Golfwithhotelblock />

                                        <Golfwithhotelblock />

                                        <Golfwithhotelblock />















                                    </Slider>





                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>



            </div>
        )
    }
}
