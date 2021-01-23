import React, { Component } from 'react';
import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight, FaStar, } from "react-icons/fa";


export default class testimonialslider extends Component {
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
        var settings3 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
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
                        arrows: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        };

        return (

            <div>
                <div className="testimonial-margin">

                    <Slider ref={c => (this.slider = c)} {...settings3}>
                        <div className="testimonial-slide">
                            <div className="testi-bg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl at nisi scelerisque iaculis. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.</p>

                                <h4>Name surname</h4>

                                <ul className="star">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                        </div>


                        <div className="testimonial-slide">
                            <div className="testi-bg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl at nisi scelerisque iaculis. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.</p>

                                <h4>Name surname</h4>

                                <ul className="star">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                        </div>

                        <div className="testimonial-slide">
                            <div className="testi-bg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl at nisi scelerisque iaculis. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.</p>

                                <h4>Name surname</h4>

                                <ul className="star">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                        </div>

                        <div className="testimonial-slide">
                            <div className="testi-bg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisl at nisi scelerisque iaculis. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex. Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.Nulla in nisl vulputate, portla in nisl vulputate, porttitor nisl in, dignissim ex.</p>

                                <h4>Name surname</h4>

                                <ul className="star">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul>
                            </div>
                        </div>





                    </Slider>


                    <ul className="test-left-right">
                        <li><a onClick={this.previous} ><span><FaChevronLeft /></span></a></li>
                        <li><a onClick={this.next} ><span><FaChevronRight /></span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
