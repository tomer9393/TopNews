import { Link } from "react-router-dom";

function SinglePostSlide(props) {
  const article = props.article;

  return (
    <div
      className="single-blog-post-slide bg-img background-overlay-5"
      style={{ backgroundImage: `url(${article.img})`, height: "400px" }}
    >
      {/* Single Blog Post Content */}
      <div className="single-blog-post-content">
        <div className="tags">
          <Link to={`/Category/${article.category}`}>{article.category}</Link>
        </div>
        <h3>
          <Link to={`/PostDetails/${article._id}`} className="font-pt">
            {article.title}
          </Link>
        </h3>
        <div className="date">
          <Link to={`/PostDetails/${article._id}`}>
            {new Date(article.published).toLocaleString("he-IL")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SinglePostSlide;
