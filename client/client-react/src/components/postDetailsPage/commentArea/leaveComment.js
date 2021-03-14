import { useState } from "react";
import { createComment, getCommentsByArticleID } from "../../../api/CommentAPI";

function LeaveComment(props) {
  const [contactName, setContactName] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  const onClick = () => {
    createComment(props.id, contactName, message)
    .then((res) => {
      getCommentsByArticleID(props.id).then((res) => {
        props.setComments(res.data)});
      setContactName("");
      setMessage("");});
  }
  return (
    <>
      <div className="leave-comment-area clearfix">
        <div className="comment-form">
          <div className="gazette-heading">
            <h4 className="font-bold">leave a comment</h4>
          </div>
          {/* Comment Form */}
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="contactName"
                name="contactName"
                placeholder="Enter Your Full Name"
                onChange={(event) => setContactName(event.target.value)}
                value={contactName || ''}
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
                onChange={(event) => setMessage(event.target.value)}
                value={message || ''}
              />
            </div>
          </form>
          <button
            type="submit"
            className="btn leave-comment-btn"
            onClick={onClick}
          >
            SUBMIT <i className="fa fa-angle-right ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default LeaveComment;

