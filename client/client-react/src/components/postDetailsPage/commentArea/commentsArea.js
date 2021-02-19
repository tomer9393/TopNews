import SingleComment from "./singleComment";
import LeaveComment from "./leaveComment";
import moment from "moment";

function CommentArea(comments) {
  //comment mock - delete!
  comments = [
    {
      name: "Daniel Braunstein",
      body: "I think that Lee is a very serious egg",
      published: moment().format('DD/MM/YYYY'),
    },
    {
      name: "Lee Lisker",
      body: "I agree with #1",
      published: moment().format('DD/MM/YYYY'),
    },
  ];

  const allComments = comments.map((comment) => {
    console.log("inside map");
    console.log(comment);
    return <SingleComment comment={comment} />;
  });

  return (
    <>
      <section className="gazette-post-discussion-area section_padding_100 bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              {/* Comment Area Start */}
              <div className="comment_area section_padding_50 clearfix">
                <div className="gazette-heading">
                  <h4 className="font-bold">Comments</h4>
                </div>
                <ol>{allComments}</ol>
              </div>

              {/* Leave A Comment */}
              <LeaveComment />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentArea;
