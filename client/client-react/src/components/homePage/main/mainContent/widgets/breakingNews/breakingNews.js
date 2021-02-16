import SingleBreakingNews from './singleBreakingNews';


function BreakingNews() {
    return (
        <>

            <div className="breaking-news-widget">
                <div className="widget-title">
                    <h5>breaking news</h5>
                </div>
                {/* Single Breaking News Widget */}
                <SingleBreakingNews/>
                {/* Single Breaking News Widget */}
                <SingleBreakingNews/>

            </div>

        </>
    );
}

export default BreakingNews;