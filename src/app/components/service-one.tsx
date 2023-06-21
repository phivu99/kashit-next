
"use client";

import '../css/style.css';

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceOneData } from "../data";
import Image from 'next/image'


const ServiceOne = () => {
  return (
    <>
     
        <section className="services-one" >
          <div className="auto-container">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={false}
                  loopedSlides={4}
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
                      slidesPerView: 4,
                    },
                  }}
                >
                {ServiceOneData.map(({ iconName, title, text, button }, index) => (
                      <SwiperSlide >
                          {/* <div className="auto-container">

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


							</div>
   
						</div>
            </div> */}
   
                        <div className="service-block_one">
                          <div className="service-block_one-inner">
                            <div className="service-block_one-upper-box">
                              <div className="service-block_one-icon"><div className={iconName}></div> </div>
                              <h4 className="service-block_one-title"><a href="service-detail.html">{title}</a></h4>
                              <div className="service-block_one-text">{text}</div>
                            </div>
                            <div className="service-block_one-lower-box">
                              <a className="service-block_one-more" href="service-detail.html">{button.label}</a>
                            </div>
                          </div>
                        </div>
                     
                      </SwiperSlide>
               ))}

                  
                </Swiper>
              {/* </div>
            </div> */}
          </div>
        </section>

    </>
  );
};

export default ServiceOne;









