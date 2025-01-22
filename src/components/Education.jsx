import React from 'react'

const Education = () => {
    const data = [
        {
            img: "/assets/images/educationknee.png",
            title: "Total Knee Replacement: What You Need to Know?",
            content: "Worried about how to take care of your artificial knee after a knee replacement surgery?"
        },
        {
            img: "/assets/images/Shoulder Dislocations.png",
            title: "How to Prevent and Manage Shoulder Dislocations: Expert Tips",
            content: "Total knee replacement surgery is a surgical procedure to fix the knee after it is totally or partially damaged."
        },
        {
            img: "/assets/images/Osteoarthritis on Your Hips_.png",
            title: "The Impact of Osteoarthritis on Your Hips: Symptoms and Treatment Options",
            content: "Total knee replacement surgery is a surgical procedure to fix the knee after it is totally or partially damaged."
        }
    ]
    return (
        <>
            <div className='patient-education-parent'>
                <div className='patient-education-sub'>
                    <div className="container-lg">
                        <h2 className='text-center'>Patient Education</h2>
                        <div className=" col-md-12 col-lg-10 mx-auto">
                            <div className="row p-0 m-0">
                                {
                                    data.map((item, index) => (
                                        <div key={index} className="col-md-4">
                                            <div className='education-sub'>
                                                <div className='education-image'>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="educationText">
                                                    <h5>{item.title} </h5>
                                                    <p>{item.content} </p>
                                                </div>
                                            </div>
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