import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../../../../../api/CommentAPI";

function SingleTodayPosts(props) {
  const article = props.article;
  const [comments, setComments] = useState();

  useEffect(() => {
    getCommentsByArticleID(article._id)
      .then((res) => res.data)
      .then((res) => setComments(res));
  }, [props]);

  const getCommentsString = () => {
    if (comments.length === 1) {
    }
  };

  return (
    <>
      <div className="gazette-single-todays-post d-md-flex align-items-start mb-50">
        <div className="todays-post-thumb">
          <img src={article.img} alt="" />
        </div>
        <div className="todays-post-content">
          {/* Post Tag */}
          <div className="gazette-post-tag">
            <Link to={`Category/${article.category}`}>{article.category}</Link>
          </div>
          <h3>
            <Link to={`PostDetails/${article._id}`} className="font-pt mb-2">
              {article.title}
            </Link>
          </h3>
          <p>{new Date(article.published).toLocaleString("he-IL")}</p>
          <Link to="#" className="post-total-comments">
            {comments
              ? comments.length === 1
                ? "1 comment"
                : `${comments.length} comments`
              : ""}
          </Link>
          <p>{article.subTitle}</p>
        </div>
      </div>
    </>
  );
}

export default SingleTodayPosts;
