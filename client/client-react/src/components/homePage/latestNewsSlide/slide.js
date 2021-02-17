import SingleLatestNewsSilde from './SingleLatestNewsSilde';

function LatestNewsSlide() {
    return (
        <div className="latest-news-marquee-area">
            <div className="simple-marquee-container">
                <div className="marquee">
                    <ul className="marquee-content-items">
                        <SingleLatestNewsSilde/>
                        <SingleLatestNewsSilde/>
                        <SingleLatestNewsSilde/>
                        <SingleLatestNewsSilde/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LatestNewsSlide;