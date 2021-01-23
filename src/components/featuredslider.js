import React, { Component } from 'react';
import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight, FaStar, } from "react-icons/fa";
import herobg from '../assets/images/slider-1.png';
export default class featuredslider extends Component {
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
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
                <div className="slider-area ">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div >
                            <img src={herobg} className="img-fluid" />

                        </div>

                        <div >
                            <img src={herobg} className="img-fluid" />

                        </div>
                    </Slider>
                    <ul className="slidebtn2">
                        <li><button className="home-prev" onClick={this.previous} ><FaChevronLeft /></button></li>
                        <li><button className="home-next" onClick={this.next}><FaChevronRight /></button></li>
                    </ul>

                </div>
            </div>
        )
    }
}
