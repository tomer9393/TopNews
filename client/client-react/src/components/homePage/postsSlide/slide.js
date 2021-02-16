import SinglePostSlide from './singlePostSlide';



function Slide() {
    return (
        <section className="welcome-blog-post-slide owl-carousel">
            {/* Single Blog Post */}
            <SinglePostSlide />
            {/* Single Blog Post */}
            <SinglePostSlide />
            {/* Single Blog Post */}
            <SinglePostSlide />
            {/* Single Blog Post */}
            <SinglePostSlide />
        </section>
    );
}

export default Slide;