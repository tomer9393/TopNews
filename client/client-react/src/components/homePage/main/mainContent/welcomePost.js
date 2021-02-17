import TodayPosts from './todayPosts/todayPosts';
import Widgets from './widgets/widgets';


function MainContent() {
    return (
        <>
            <div className="gazette-welcome-post">
                {/* Post Tag */}
                <div className="gazette-post-tag">
                    <a href="#">Politices</a>
                </div>
                <h2 className="font-pt">What's behind the world obsession with gems?</h2>
                <p className="gazette-post-date">March 29, 2016</p>
                {/* Post Thumbnail */}
                <div className="blog-post-thumbnail my-5">
                    <img src="img/blog-img/1.jpg" alt="post-thumb" />
                </div>
                {/* Post Excerpt */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc,
                quis venenatis orci tincidunt id. Fusce commodo blandit eleifend. Nullam viverra tincidunt
                dolor, at pulvinar dui. Nullam at risus ut ipsum viverra posuere. Aliquam quis convallis
                enim. Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus
                nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quis venenatis
            orci tincidunt id. Fusce commodo blandit eleifend.</p>
                {/* Reading More */}
                <div className="post-continue-reading-share d-sm-flex align-items-center justify-content-between mt-30">
                    <div className="post-continue-btn">
                        <a href="#" className="font-pt">Continue Reading <i className="fa fa-chevron-right" aria-hidden="true" /></a>
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