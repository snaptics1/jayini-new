import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicePageTabs = () => {
    const [activeTab, setActiveTab] = useState('Knee Care');
    const data = [
        {
            image: 'https://bmjtherapy.com/wp-content/uploads/2021/07/Singapore-physio-stretching-out-patients-inflammed-knee-scaled.jpg',
            title: 'Exercises after a Total Knee Replacement',
            content: 'Effective exercises to aid recovery post knee replacement surgery.',
            category: 'Knee Care'
        },
        {
            image: 'https://media.licdn.com/dms/image/D5612AQFt1RISmqkKUQ/article-cover_image-shrink_720_1280/0/1718690355415?e=2147483647&v=beta&t=jnXeLHY3Q9G4LeY8Un4zSea_mBXtwp5beA94NO5T-Mw',
            title: 'Managing Arthritis Pain',
            content: 'Lifestyle tips to ease arthritis discomfort.',
            category: 'Knee Care'
        },
        {
            image: 'https://www.hiranandanihospital.org/public/uploads/blogs/1708066549.jpg',
            title: 'Sports Injury Rehabilitation',
            content: 'Speed up your recovery with these tailored exercises.',
            category: 'Knee Care'
        },
        {
            image: 'https://grandcarehealth.com/wp-content/uploads/2022/03/shutterstock_1231637074-scaled.jpg',
            title: 'Post-Operative Care for Hip Replacement',
            content: 'Essential steps for a smooth hip surgery recovery.',
            category: 'Hip & Back'
        },
        {
            image: 'https://www.baptisthealth.com/-/media/images/migrated/blog-images/teaser-images/gettyimages-802581672.jpg?rev=2e49d755597e495cb718f31e27e122f9',
            title: 'Back Pain Relief Exercises',
            content: 'Simple exercises to alleviate chronic back pain.',
            category: 'Hip & Back'
        },
        {
            image: 'https://aminoco.com/cdn/shop/articles/FeaturedImage_RheumatoidArthritis.jpg?v=1592868649',
            title: 'Managing Arthritis Pain',
            content: 'Effective exercises and lifestyle tips to manage arthritis pain.',
            category: 'Hip & Back'
        },
        {
            image: 'https://media.istockphoto.com/id/1400845852/photo/one-active-mixed-race-man-from-the-back-stretching-arms-and-triceps-by-pulling-elbow-with.jpg?s=612x612&w=0&k=20&c=lErUOPno73j4RaHm82JUdRJ331IzyzrpVCSBBTcDEAM=',
            title: 'Shoulder Mobility Exercises',
            content: 'Improve shoulder movement with targeted exercises.',
            category: 'Shoulder & Elbow'
        },
        {
            image: 'https://parisorthopedic.com/wp-content/uploads/2020/05/Paris-Orthopedic_Osteoporosis-Treatments-1038x576.jpeg',
            title: 'Preventing Osteoporosis',
            content: 'Strengthen your bones with preventive exercises.',
            category: 'Shoulder & Elbow'
        },
        {
            image: 'https://physioveda.ae/wp-content/uploads/2017/10/posture-correction-physioveda-2.jpg',
            title: 'Posture Correction Tips',
            content: 'Maintain a healthy posture with easy-to-follow routines.',
            category: 'Shoulder & Elbow'
        },
        {
            image: 'https://uoanj.com/wp-content/uploads/2024/05/UOA-ACL-Repair-vs-Reconstruction-Blog-min.png',
            title: 'ACL Injury Prevention',
            content: 'Prevent ACL injuries with these effective strengthening exercises.',
            category: 'Foot & Ankle'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0294/1911/0444/files/Blog_Post_Elbow_Joint_Pain_Treatement_Dr._Ortho_11_Jul_22_1.jpg?v=1657603529',
            title: 'Elbow Pain Relief',
            content: 'Exercises to relieve elbow pain and improve mobility.',
            category: 'Shoulder & Elbow'
        },
        {
            image: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2119331.jpg',
            title: 'Foot and Ankle Exercises',
            content: 'Maintain foot and ankle health with these simple exercises.',
            category: 'Foot & Ankle'
        },
        {
            image: 'https://dance-teacher.com/wp-content/uploads/2020/12/980x-31.jpg',
            title: 'Ankle Strengthening Exercises',
            content: 'Boost ankle stability and prevent injuries with these strengthening exercises.',
            category: 'Foot & Ankle'
        }
    ];
    


    const categories = [...new Set(data.map(item => item.category))];

    return (
        <div className="education-main-parent">
            <div className="education-sub-parent">
                <div className="container-lg">
                    <div className="col-md-12 col-lg-10 mx-auto">
                        <ul className="nav nav-tabs justify-content-center mb-4 gap-2">
                            {categories.map((category, index) => (
                                <li key={index} className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === category ? 'active' : ''}`}
                                        onClick={() => setActiveTab(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="row p-0 m-0">
                            {data
                                .filter(item => item.category === activeTab)
                                .slice(0, 3) // Display maximum 3 cards per tab
                                .map((item, index) => (
                                    <div key={index} className="col-sm-6 col-md-4">
                                         <div className="education-card">
                                                <div className='education-image'>
                                                    <img src={item.image} alt={item.title} />
                                                </div>
                                                <div className='education-card-content'>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageTabs;
