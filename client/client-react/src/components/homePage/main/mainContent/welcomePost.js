import TodayPosts from './todayPosts/todayPosts';
import Widgets from './widgets/widgets';
import {Link} from "react-router-dom";


function MainContent() {
    return (
        <>
            <div className="gazette-welcome-post">
                {/* Post Tag */}
                <div className="gazette-post-tag">
                    <a href="#">Travel</a>
                </div>
                <h2 className="font-pt">A new expedition for Mt Everest</h2>
                <p className="gazette-post-date">March 2, 2021</p>
                {/* Post Thumbnail */}
                <div className="blog-post-thumbnail my-5">
                    <img src="https://ychef.files.bbci.co.uk/1600x640/p097wxsb.jpg" alt="post-thumb" />
                </div>
                {/* Post Excerpt */}
                <p>Because of the ongoing pandemic, Mt Everest was closed to climbers for much of 2020, which has forced some to reconsider how it's being used In March 2020, the Nepalese government announced that it was shutting down expeditions to Mt Everest for the rest of the climbing season due to the global coronavirus pandemic. In an age when there are now so many people summiting the world's highest mountain (900 in 2019 alone), with queues snaking up its slopes and piles of rubbish left behind, the closure has prompted officials to reconsider the mountain's future. </p>
                {/* Reading More */}
                <div className="post-continue-reading-share d-sm-flex align-items-center justify-content-between mt-30">
                    <div className="post-continue-btn">
                    <Link to={`/PostDetails/60438fb5824ab66b3c103b90`} className="font-pt">
                Continue Reading{" "}
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </Link>
                    </div>
                    <div className="post-share-btn-group">
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;