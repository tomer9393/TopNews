import BreakingNews from './breakingNews/breakingNews';
import WorldNews from './worldNews/worldNews';

function MainContent() {
    return (
        <>

            <div className="col-12 col-lg-3 col-md-6">
                <div className="sidebar-area">
                    {/* Breaking News Widget */}
                    <BreakingNews/>

                    {/* Don't Miss Widget */}
                    <WorldNews/>
 
                   
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