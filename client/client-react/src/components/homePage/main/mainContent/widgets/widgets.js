import BreakingNews from './breakingNews/breakingNews';


function MainContent() {
    return (
        <>

            <div className="col-12 col-lg-3 col-md-6">
                <div className="sidebar-area">
                    {/* Breaking News Widget */}
                    <BreakingNews/>

                    {/* Don't Miss Widget */}
                    <div className="donnot-miss-widget">
                        <div className="widget-title">
                            <h5>Don't miss</h5>
                        </div>
                        {/* Single Don't Miss Post */}
                        <div className="single-dont-miss-post d-flex mb-30">
                            <div className="dont-miss-post-thumb">
                                <img src="img/blog-img/dm-1.jpg" alt />
                            </div>
                            <div className="dont-miss-post-content">
                                <a href="#" className="font-pt">EU council reunites</a>
                                <span>Nov 29, 2017</span>
                            </div>
                        </div>
                        {/* Single Don't Miss Post */}
                        <div className="single-dont-miss-post d-flex mb-30">
                            <div className="dont-miss-post-thumb">
                                <img src="img/blog-img/dm-2.jpg" alt />
                            </div>
                            <div className="dont-miss-post-content">
                                <a href="#" className="font-pt">A new way to travel the world</a>
                                <span>March 29, 2016</span>
                            </div>
                        </div>
                        {/* Single Don't Miss Post */}
                        <div className="single-dont-miss-post d-flex mb-30">
                            <div className="dont-miss-post-thumb">
                                <img src="img/blog-img/dm-3.jpg" alt />
                            </div>
                            <div className="dont-miss-post-content">
                                <a href="#" className="font-pt">Why choose a bank?</a>
                                <span>March 29, 2016</span>
                            </div>
                        </div>
                    </div>
                   
                    {/* Subscribe Widget */}
                    <div className="subscribe-widget">
                        <div className="widget-title">
                            <h5>subscribe</h5>
                        </div>
                        <div className="subscribe-form">
                            <form action="#">
                                <input type="email" name="email" id="subs_email" placeholder="Your Email" />
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainContent;