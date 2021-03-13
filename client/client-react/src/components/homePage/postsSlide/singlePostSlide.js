import { Link } from "react-router-dom";

function SinglePostSlide(props) {
  const article = props.article;

  return (
    // <Link to={`/PostDetails/${article._id}`}>
      <div
        className="single-blog-post-slide bg-img background-overlay-5"
        style={{ backgroundImage: `url(${article.img})`, height: "400px" }}
      >
        {/* Single Blog Post Content */}
        <div className="single-post-title-content" style={{marginLeft: "30px", paddingTop: "30px"}}>
          <div className="gazette-post-tag" style={{color:'white'}} >
         <a>{article.category}</a> 
          </div>
          <h3>
            <Link to={`/PostDetails/${article._id}`} className="font-pt">
              {article.title}
            </Link>
          </h3>
          <div className="date" style={{color:'white'}}>
           
              {new Date(article.published).toLocaleString("he-IL")}
            
          </div>
        </div>
      </div>
    // </Link>
  );
}

export default SinglePostSlide;
