import React from "react";
import LirazTeamMember from './LirazTeamMember';
import MatanTeamMember from './MatanTeamMember';
import LeeTeamMember from './LeeTeamMember';
import MeitalTeamMember from './MeitalTeamMember';
import TomerTeamMember from './TomerTeamMember2';
import moment from "moment";
import {Link} from "react-router-dom";
import './aboutUsPage.css';


function AboutUsPage2() 
{

    return (
        <>
            {/* Breadcumb Area Start */}
            
            <div className="breadcumb-area section_padding_50">
                <div className="container ">
                    <div className="row">
                        <div className="col-12">
                            <div className="breacumb-content d-flex align-items-center justify-content-between">
                                <h3 className="font-pt mb-0">About Us</h3>
                                <p className="editorial-post-date text-dark mb-0">{moment().format('DD/MM/YYYY')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcumb Area End */}
            <section className="gazette-about-us-area section_padding_100_70">
                <div className="about-us-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <h3 className="font-pt mb-30">Sort History</h3> */}
                            </div>
                            <div className="col-12 col-md-6">
                                <p>The world's leading news site. Full coverage of news from Israel and the world that deals with diverse and different areas of interest, including sports, economics, culture, food, science and nature.</p>
                                <div>
                                <p>We make sure you always stay up to date.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 team4">
                    <div className="container">
                        <div className="row justify-content-center mb-4">
                        <div className="col-md-7 text-center">
                            <h3 className="mb-3">Experienced & Professional Team</h3>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 mb-5">
                        <TomerTeamMember />
                        </div>
                        <div className="col-lg-3 mb-4">

                        </div>
                        <div className="col-lg-3 mb-4">
                            <div className="row">
                            <div className="col-md-12">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                                <h6 className="subtitle mb-3">Property Specialist</h6>
                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-3 mb-4">
                            <div className="row">
                            <div className="col-md-12">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                                <h6 className="subtitle mb-3">Property Specialist</h6>
                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <div className="row">
                            <div className="col-md-12">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                                <h6 className="subtitle mb-3">Property Specialist</h6>
                                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="gazette-cta-area bg-img background-overlay section_padding_100" style={{ backgroundImage: 'url(img/blog-img/cta.jpg)' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="cta-content text-center">
                                <h2 className="font-pt">Join Our Team</h2>
                                <p>Join the best team the world ever had. We are waiting to join you to the family</p>
                                <Link to="/Contact" className="btn gazette-btn font-pt">Contact Us <i className="fa fa-angle-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default AboutUsPage2;