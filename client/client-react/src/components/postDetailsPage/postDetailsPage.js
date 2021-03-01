import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsArea from "./commentArea/commentsArea";
import { getArticleById } from "../../api/ArticleAPI";

function PostDetailsPage(props) {
  const published = props.published;
  const { id } = useParams();
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    getArticleById(id).then((res) => setArticle(res.data));
  }, []);

  return !article ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="single-post-area">
        {/* Single Post Title */}
        <div
          className="single-post-title bg-img background-overlay"
          style={{ backgroundImage: "url(img/bg-img/1.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-end">
              <div className="col-12">
                <div className="single-post-title-content">
                  {/* Post Tag */}
                  <div className="gazette-post-tag">
                    <a href="#">{article.category}</a>
                  </div>
                  <h2 className="font-pt">{article.title}</h2>
                  <h5 className="font-pt">{article.subTitle}</h5>
                  <p>{new Date(article.published).toLocaleString("he-IL")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          <center>
            <img src={article.img} />
          </center>
        </p>
        <div className="single-post-contents">
          <div className="container">
            <div className="row justify-content-center">{article.body}</div>
          </div>
        </div>
      </section>

      <CommentsArea id={article._id} />
    </>
  );
}

export default PostDetailsPage;
