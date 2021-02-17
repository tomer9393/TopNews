import SingleComment from './singleComment';
import LeaveComment from './leaveComment';

function CommentArea() {
    return (
        <>
            <section className="gazette-post-discussion-area section_padding_100 bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            {/* Comment Area Start */}
                            <div className="comment_area section_padding_50 clearfix">
                                <div className="gazette-heading">
                                    <h4 className="font-bold">Discussion</h4>
                                </div>
                                <ol>
                                    <SingleComment />
                                </ol>
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