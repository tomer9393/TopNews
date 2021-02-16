import SingleTeamMember from './singleTeamMember';

function AboutUsPage() {
    return (
        <>
            {/* Breadcumb Area Start */}
            <div className="breadcumb-area section_padding_50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breacumb-content d-flex align-items-center justify-content-between">
                                <h3 className="font-pt mb-0">About Us</h3>
                                <p className="editorial-post-date text-dark mb-0">28 November 2017</p>
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
                                <h3 className="font-pt mb-30">Sort History</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue placerat finibus. Fusce a enim non erat faucibus pellentesque. Ut mattis vel leo sit amet tincidunt. Sed placerat condimentum ante vitae ornare. Nam nibh leo, pharetra vel lacus in, dictum tincidunt magna. Aliquam ut placerat justo. Duis elementum justo in sapien auctor, ut placerat purus sodales. Pellentesque a risus eu elit scelerisque fermentum in sed nisi. Sed maximus vel lectus sit</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>amet rhoncus. Vestibulum ut mattis mi, ac aliquam turpis. Suspendisse potenti. In semper nec urna sed mattis. Vivamus augue tellus, placerat nec lectus a, sodales sollicitudin arcu. enean a porta sem. In a nunc sapien. Aliquam justo augue, ornare eu mauris varius, scelerisque consequat purus. Ut semper ac neque eu cursus. Cras pellentesque quam vel metus bibendum, ac fringilla tellus tempus.</p>
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
                            <SingleTeamMember />
                            <SingleTeamMember />
                            <SingleTeamMember />
                            <SingleTeamMember />
                            <SingleTeamMember />
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor, elit vel pellentesque faucibus, massa ligula rutrum erat, id aliquam orci urna in ante.</p>
                                <a href="#" className="btn gazette-btn font-pt">Contact Us <i className="fa fa-angle-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUsPage;