import { useParams } from "react-router-dom";
import { getArticleByCategory } from "../../api/ArticleAPI";
import React, { useEffect, useState } from "react";

function SingleCategoryPost(props) {
  const article = props.article;
  console.log(article);

  return (
    <>
      <div className="col-12 col-md-4">
        {/* Gazette Welcome Post */}
        <div className="gazette-welcome-post">
          {/* Post Tag */}
          <div className="gazette-post-tag">
            <a href="#">{article.category.name}</a>
          </div>
          <h2 className="font-pt">{article.title}</h2>
          <p className="gazette-post-date">{article.lastUpdate}</p>
          {/* Post Thumbnail */}
          <div className="blog-post-thumbnail my-5">
            <img src={article.img} alt="post-thumb" />
          </div>
          {/* Post Excerpt
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices egestas nunc, quis venenatis orci tincidunt id. Fusce commodo blandit eleifend.</p> */}
          {/* {Reading More */}
          <div className="post-continue-reading-share mt-30">
            <div className="post-continue-btn">
              <a href={`/PostDetails/${article._id}`} className="font-pt">
                Continue Reading{" "}
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCategoryPost;
