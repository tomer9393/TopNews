function SingleCategoryPost() {
    return (
        <>
            <div className="col-12 col-md-4">
                {/* Gazette Welcome Post */}
                <div className="gazette-welcome-post">
                    {/* Post Tag */}
                    <div className="gazette-post-tag">
                        <a href="#">Politices</a>
                    </div>
                    <h2 className="font-pt">The fine print of Trump's tax talking points</h2>
                    <p className="gazette-post-date">March 29, 2016</p>
                    {/* Post Thumbnail */}
                    <div className="blog-post-thumbnail my-5">
                        <img src="img/blog-img/18.jpg" alt="post-thumb" />
                    </div>
                    {/* Post Excerpt */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quis venenatis orci tincidunt id. Fusce commodo blandit eleifend.</p>
                    {/* Reading More */}
                    <div className="post-continue-reading-share mt-30">
                        <div className="post-continue-btn">
                            <a href="#" className="font-pt">Continue Reading <i className="fa fa-chevron-right" aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCategoryPost;