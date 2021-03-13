import React from "react";
import {Link} from "react-router-dom";

function SingleCategoryPost(props) {
  const article = props.article;

  return (
    <>
      <div className="col-12 col-md-4">
        {/* Gazette Welcome Post */}
        <div className="gazette-welcome-post">
          {/* Post Tag */}
          <h2 className="font-pt">{article.title}</h2>
          <p>{new Date(article.lastUpdate).toLocaleString("he-IL")}</p>
          {/* Post Thumbnail */}
          <div className="blog-post-thumbnail my-5">
            <img src={article.img} alt="post-thumb" />
          </div>
          {/* Post Excerpt
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quis venenatis orci tincidunt id. Fusce commodo blandit eleifend.</p> */}
          {/* {Reading More */}
          <div className="post-continue-reading-share mt-30">
            <div className="post-continue-btn">
              <Link to={`/PostDetails/${article._id}`} className="font-pt">
                Continue Reading{" "}
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCategoryPost;
