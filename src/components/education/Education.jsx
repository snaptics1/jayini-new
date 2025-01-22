import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
    const data = [
        {
            image: '/assets/images/education1.png',
            title: 'Exercises after a Total knee Replacement',
            content: 'Worried about how to take care of your artificial knee after a knee replacement surgery?'
        },
        {
            image: '/assets/images/education2.png',
            title: 'Exercises after a Total knee Replacement',
            content: 'Worried about how to take care of your artificial knee after a knee replacement surgery?'
        },
        {
            image: '/assets/images/education3.png',
            title: 'Exercises after a Total knee Replacement',
            content: 'Worried about how to take care of your artificial knee after a knee replacement surgery?'
        },
        {
            image: '/assets/images/education1.png',
            title: 'Exercises after a Total knee Replacement',
            content: 'Worried about how to take care of your artificial knee after a knee replacement surgery?'
        },
        {
            image: '/assets/images/education2.png',
            title: 'Exercises after a Total knee Replacement',
            content: 'Worried about how to take care of your artificial knee after a knee replacement surgery?'
        },
        {
            image: '/assets/images/education3.png',
            title: 'Exercises after a Total knee Replacement',
            content: 'Worried about how to take care of your artificial knee after a knee replacement surgery?'
        },
    ]
    return (
        <>
            <div className="education-main-parent">
                <div className="education-sub-parent">
                    <div className="container-lg">
                        <div className="col-md-12 col-lg-10 mx-auto">
                            <div className="row p-0 m-0">
                                    {
                                        data.map((item, index) => (
                                            <div key={index} className="col-sm-6 col-md-4">
                                                <Link to='/blog-single'>
                                                <div className="education-card">
                                                    <div className='education-image'>
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className='education-card-content'>
                                                        <h5>{item.title} </h5>
                                                        <p>{item.content} </p>
                                                    </div>
                                                </div>

                                </Link>
                                            </div>
                                        ))
                                    }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Education