
"use client";

import '../css/bootstrap.css'
import '../css/header.css';
import '../css/style.css';

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderOneData } from "../data";
import Image from 'next/image'
// import { Testimonial } from "types";

//import { SliderOne } from "../types/index";

const SliderOne = () => {
  return (
    <>
     
        <section className="section section-slider slider-one flex" >
        
            {/* <div className="row">
              <div className="mx-auto mb-12 md:col-10 lg:col-8 xl:col-6 "> */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={false}
                  loopedSlides={1}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
     

                   
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                  }}
                >
                {SliderOneData.map(({ image, title, button ,button2 }, index) => (
                      <SwiperSlide >
                          <div className="auto-container">
                        <div className="">
                      <div className="slider-one_title-column grid lg:grid-cols-12 grid-cols-1 items-center">
							<div className="slider-one_title-inner lg:col-span-7">
								<h1 className="slider-one_heading" >{title}</h1>
                
                    <a className={`common_btn btn-style-one theme-btn`} href={button.url}>
                    <div className="btn-wrap">
                      <span>{button.label} <i className="fa-solid fa-arrow-right fa-fw"></i></span>
                      </div>
                    </a>
                    <a className={`common_btn btn-style-two theme-btn`} href={button2.url}>
                    <div className="btn-wrap">
                      <span>{button2.label} <i className="fa-solid fa-arrow-right fa-fw"></i></span>
                      </div>
                    </a>

                    {/* <a class="btn-style-one theme-btn" href="contact.html">
										<div class="btn-wrap">
											<span class="text-one">Get In Touch <i class="fa-solid fa-arrow-right fa-fw"></i></span>
											<span class="text-two">Get In Touch <i class="fa-solid fa-arrow-right fa-fw"></i></span>
										</div>
									</a> */}
                 
                {/* <img src={image2} alt="" /> */}
        

                 
								{/* <div class="slider-one_button-box">
									<a class="btn-style-one theme-btn" href="contact.html">
										<div class="btn-wrap">
											<span className="text-one">Get In Touch <i class="fa-solid fa-arrow-right fa-fw"></i></span>
											<span class="text-two">Get In Touch <i class="fa-solid fa-arrow-right fa-fw"></i></span>
										</div>
									</a>
									<a class="btn-style-two theme-btn" href="about.html">
										<div class="btn-wrap">
											<span class="text-one">Discover more <i class="fa-solid fa-arrow-right fa-fw"></i></span>
											<span class="text-two">Discover more <i class="fa-solid fa-arrow-right fa-fw"></i></span>
										</div>
									</a>
								</div> */}
							</div>
              <div className="slider-one_image-column  lg:col-span-5">
                <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video slider-one_play"><span className="fa fa-play"><i className="ripple"></i></span></a>
                <div className="slider-one_image-inner parallax-scene-1">
                  <div className="image" data-depth="0.20">
                    <img src="images/main-slider/image-1.png" alt="" />
                    <div>
                      <Image
                      src={image}
                      alt=""
                      className=""
            
                      priority

                    />
                  </div>
                  </div>
                </div>
              </div>
						</div>
            </div></div>
                      </SwiperSlide>
               ))}

                  
                </Swiper>
              {/* </div>
            </div> */}
          
        </section>

    </>
  );
};

export default SliderOne;









