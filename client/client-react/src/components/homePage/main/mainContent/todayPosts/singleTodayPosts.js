

function SingleTodayPosts() {
    return (
        <>
            <div className="gazette-single-todays-post d-md-flex align-items-start mb-50">
                <div className="todays-post-thumb">
                    <img src="img/blog-img/3.jpg" alt />
                </div>
                <div className="todays-post-content">
                    {/* Post Tag */}
                    <div className="gazette-post-tag">
                        <a href="#">Life</a>
                    </div>
                    <h3><a href="#" className="font-pt mb-2">Homeless man steals $350,000 </a></h3>
                    <p className="gazette-post-date mb-2">March 29, 2016</p>
                    <a href="#" className="post-total-comments">3 Comments</a>
                    <p>Aliquam quis convallis enim. Nunc pulvinar molestie sem id blandit. Nunc venenatis
                    interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non.
                Suspendisse in fermentum nunc.</p>
                </div>
            </div>
        </>
    );
}

export default SingleTodayPosts;