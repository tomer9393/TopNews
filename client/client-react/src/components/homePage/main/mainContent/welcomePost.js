import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticleById } from "../../../../api/ArticleAPI";

const ID = "604ca926f4ddf82ecc5c15c1";
function MainContent() {
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticleById(ID).then((res) => setArticle(res.data));
  }, []);

  return !article ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="gazette-welcome-post">
        {/* Post Tag */}
        <div className="gazette-post-tag">
          <a href="#">Politics</a>
        </div>
        <h2 className="font-pt">{article.title}</h2>
        <p className="gazette-post-date">{new Date(article.published).toLocaleString("he-IL")}</p>
        {/* Post Thumbnail */}
        <div className="blog-post-thumbnail my-5">
          <img
            src={article.img}
            alt="post-thumb"
          />
        </div>
        {/* Post Excerpt */}
        <p>{article.body.substring(0, 500)}...</p>
        {/* Reading More */}
        <div className="post-continue-reading-share d-sm-flex align-items-center justify-content-between mt-30">
          <div className="post-continue-btn">
            <Link to={`/PostDetails/${ID}`} className="font-pt">
              Continue Reading{" "}
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
