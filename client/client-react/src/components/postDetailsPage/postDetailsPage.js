import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CommentsArea from "./commentArea/commentsArea";
import { getArticleById } from "../../api/ArticleAPI";

function NewlineText(props) {
  const text = props.text;
  const newText = text.split('\n\n').map(str => <p>{str}</p>);
  
  return newText;
}
function PostDetailsPage(props) {
  const { id } = useParams();
  const [article, setArticle] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    getArticleById(id).then((res) => {
      if (res === -1) {
        history.push({
          pathname: "/ErrorPage",
        });
      }
      setArticle(res.data);
    });
  }, []);

  return !article ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="single-post-area">
        {/* Single Post Title */}
        <div
          className="single-post-title bg-img background-overlay"
          style={{ backgroundImage: "url(./img/bg-img/1.jpg)" }}
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
        <div className="col-12">
          <div className="single-post-thumb">
            <center>
              <img style={{ marginTop: "50px" }} src={article.img} alt="" />
            </center>
          </div>
        </div>
        <div className="single-post-contents">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <div className="single-post-text">
                  <NewlineText text={article.body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommentsArea id={article._id} />
    </>
  );
}

export default PostDetailsPage;
