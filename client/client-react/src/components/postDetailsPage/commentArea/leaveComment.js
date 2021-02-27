import { useState } from "react";
import { createComment } from "../../../api/CommentAPI";

function LeaveComment(props) {
  const [contactName, setContactName] = useState(undefined);
  const [message, setMessage] = useState(undefined);

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
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </form>
          <button
            type="submit"
            className="btn leave-comment-btn"
            onClick={() => {
              createComment(props.id, contactName, message);
              window.location.reload();
            }}
          >
            SUBMIT <i className="fa fa-angle-right ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default LeaveComment;
