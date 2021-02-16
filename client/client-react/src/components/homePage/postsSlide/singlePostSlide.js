

function SinglePostSlide() {
    return (
        <div className="single-blog-post-slide bg-img background-overlay-5" style={{backgroundImage: 'url(img/bg-img/1.jpg)'}}>
            {/* Single Blog Post Content */}
            <div className="single-blog-post-content">
                <div className="tags">
                    <a href="#">crypto</a>
                </div>
                <h3><a href="#" className="font-pt">Crypto world goes mad</a></h3>
                <div className="date">
                    <a href="#">March 29, 2018</a>
                </div>
            </div>
        </div>
    );
}

export default SinglePostSlide;