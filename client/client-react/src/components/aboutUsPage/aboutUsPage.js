import LirazTeamMember from './LirazTeamMember';
import MatanTeamMember from './MatanTeamMember';
import LeeTeamMember from './LeeTeamMember';
import MeitalTeamMember from './MeitalTeamMember';
import TomerTeamMember from './TomerTeamMember';
import moment from "moment";
import {Link} from "react-router-dom";

function AboutUsPage() 
{

    return (
        <>
            {/* Breadcumb Area Start */}
            <div className="breadcumb-area section_padding_50">
                <div className="container">
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
                            </div>
                            <div className="col-12 col-md-6">
                                <p>We make sure you always stay up to date.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-area mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="font-pt mb-50">Our Team</h3>
                            </div>
                        </div>
                        <div className="row">
                            <LirazTeamMember />
                            <MatanTeamMember />
                            <LeeTeamMember />
                            <MeitalTeamMember />
                            <TomerTeamMember />
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

export default AboutUsPage;