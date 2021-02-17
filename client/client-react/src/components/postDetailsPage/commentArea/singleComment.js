function SingleComment() {
    return (
        <>
            {/* Single Comment Area */}
            <li className="single_comment_area">
                <div className="comment-wrapper d-md-flex align-items-start">
                    {/* Comment Meta */}
                    <div className="comment-author">
                        <img src="img/blog-img/25.jpg" alt />
                    </div>
                    {/* Comment Content */}
                    <div className="comment-content">
                        <h5>John Doe</h5>
                        <span className="comment-date font-pt">December 18, 2017</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum nunc libero, vitae rutrum nunc porta id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam arcu augue, semper at elementum nec, cursus nec ante.</p>
                        <a className="reply-btn" href="#">Reply <i className="fa fa-reply" aria-hidden="true" /></a>
                    </div>
                </div>
                <ol className="children">
                    <li className="single_comment_area">
                        <div className="comment-wrapper d-md-flex align-items-start">
                            {/* Comment Meta */}
                            <div className="comment-author">
                                <img src="img/blog-img/25.jpg" alt />
                            </div>
                            {/* Comment Content */}
                            <div className="comment-content">
                                <h5>John Doe</h5>
                                <span className="comment-date text-muted">December 18, 2017</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum nunc libero, vitae rutrum nunc porta id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam arcu augue, semper at elementum nec, cursus nec ante.</p>
                                <a className="reply-btn" href="#">Reply <i className="fa fa-reply" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </li>
                </ol>
            </li>
        </>
    );
}

export default SingleComment;