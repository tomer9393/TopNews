function SingleComment(comment) {
  comment = comment.comment;
  return (
    <>
      {/* Single Comment Area */}
      <li className="single_comment_area">
        <div className="comment-wrapper d-md-flex align-items-start">
          {/* Comment Meta */}
          {/* <div className="comment-author">
                        <img src="img/blog-img/25.jpg" alt />
                    </div> */}
          {/* Comment Content */}
          <div className="comment-content">
            <h5>{comment.name}</h5>
            <span className="comment-date font-pt">{comment.published}</span>
            <p>{comment.body}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default SingleComment;