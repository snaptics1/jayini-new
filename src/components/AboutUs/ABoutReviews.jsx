import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import core styles and other Swiper styles
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles

// Import required Swiper modules
import { Pagination, Autoplay } from 'swiper/modules';

const ABoutReviews = () => {
    return (
        <div className='ABoutReviews-parent'>
            <div className="container">
                <div className="col-md-12 col-lg-9 mx-auto">
                    {/* Swiper Component */}
                    <Swiper
                        spaceBetween={30}    // Space between slides
                        slidesPerView={2}    // Number of slides to show at once
                        loop={true}          // Infinite loop
                        autoplay={{
                            delay: 3000,      // Time between slides (3 seconds)
                            disableOnInteraction: false,  // Keep autoplaying even when the user interacts
                        }}
                        pagination={{
                            clickable: true,   // Enable clickable pagination
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            // When window width is >= 320px
                            320: {
                                slidesPerView: 1,  // 1 slide visible
                                spaceBetween: 20,   // 20px space between slides
                            },
                            // When window width is >= 768px (tablets)
                            768: {
                                slidesPerView: 2,  // 2 slides visible
                                spaceBetween: 30,   // 30px space between slides
                            },
                            // When window width is >= 1024px (desktops)
                            1024: {
                                slidesPerView: 2,  // 3 slides visible
                                spaceBetween: 40,   // 40px space between slides
                            },
                            // When window width is >= 1440px (large screens)
                            1440: {
                                slidesPerView: 2,  // 4 slides visible
                                spaceBetween: 50,   // 50px space between slides
                            },
                        }}  // Import necessary modules
                    >
                        {/* Slide 1 */} <br /><br />
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/about-review.png" alt="Review 1" />
                                            </div>
                                            <p>We have been Dr.Jayani's patient since past few years. He is excellent in his work of diagnosis as well as recommending treatment and medicine. Entire staff is equally good at the clinic. I would highly recommend anyone looking for orthopedic doctor as he is best at his work.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/about-review2.png" alt="Review 2" />
                                            </div>
                                            <p>Dr Jayani has been very helpful in the mine and my husband's journey of reliving the orthopedic pain. His treatments are accurate and very helpful.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/Artboard 4.png" alt="Review 2" />
                                            </div>
                                            <p>my in law sustained a leg fracture which happened back in July 1st week and i visited a clinic nearby my home and the orthopedician put a Plaster of Paris for him and after 45 days of removal he said my in law would require a surgery. Then I visited Dr. Jayini for his opinion and he checked my uncle and said he don't require a surgery and started him on partial weight bearing for two more weeks followed by now my in law is advised to start with out Walker and he is able to walk normally.
                                                And he is the real people's Doctor...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12">
                                    <div className='about-review-content'>
                                        <div className='about-review-text'>
                                            <div className='about-review-image'>
                                                <img src="/assets/images/Artboard 1.png" alt="Review 2" />
                                            </div>
                                            <p>The doctor is absolutely kind and patient and doesn’t scare you or make you spend more.am happy with my experience .and the administration is kind as well.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ABoutReviews;
