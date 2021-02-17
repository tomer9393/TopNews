import PostsSlide from './postsSlide/slide';
import LatestNewsSlide from './latestNewsSlide/slide';
import Main from './main/main';


function HomePage() {
    return (
        <>
            {/* Welcome Blog Slide Area Start */}
            <PostsSlide/>
            {/* Welcome Blog Slide Area End */}

            {/* Latest News Marquee Area Start */}
            <LatestNewsSlide/>
            {/* Latest News Marquee Area End */}

            {/* Main Content Area Start */}
            <Main/>
            {/* Main Content Area End */}

        </>
    );
}

export default HomePage;