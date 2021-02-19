import moment from "moment";

function LeaveComment() {
  return (
    <>
      <div className="leave-comment-area clearfix">
        <div className="comment-form">
          <div className="gazette-heading">
            <h4 className="font-bold">leave a comment</h4>
          </div>
          {/* Comment Form */}
          <form action="#" method="post">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="contactName"
                name="contactName"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn leave-comment-btn">
              SUBMIT <i className="fa fa-angle-right ml-2" />
            </button>
            <input
              type="hidden"
              id="postDate"
              name="postDate"
              value={moment().format('DD/MM/YYYY')}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default LeaveComment;
