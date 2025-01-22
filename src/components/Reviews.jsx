import React from 'react'

const Reviews = () => {
    return (
        <>
            <div className='Reviews-parent'>
                <div className='Reviews-sub-parent'>
                    <div className="container">
                    <div className="row p-0 m-0 text-white align-items-center">
                        <div className="col-md-10">
                            <div className='review-content'>
                                <div>
                                    <div>
                                        <img src="/assets/images/Group 18.png" alt="" />
                                    </div>
                                    <h3>Charita Tallapaka</h3>
                                </div>
                                <div className="review-text">
                                    <p>Dr. Jayini P Rammohen was fantastic with my knee pain. They listened carefully, explained my treatment options clearly, and the recommended medication has already made a huge difference! I’m so happy to be back to my daily routine with less pain. Highly recommend</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <div className='google-image'>
                                <img src="/assets/images/google.png" alt="" />
                            </div>
                            <h3 className='text-success'>1000+</h3>
                            <div className='rating-stars'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>


                            </div>

                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Reviews