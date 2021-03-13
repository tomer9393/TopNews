import SingleCategoryPost from "./singleCategoryPost";
import moment from "moment";
import { useHistory, useParams } from "react-router-dom";
import { getArticleByCategory } from "../../api/ArticleAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryPage() {
  const { name } = useParams();
  const [articles, setArticles] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    getArticleByCategory(name).then((res) => {
      if (res.data.length === 0) {
        history.push({
          pathname: "/ErrorPage",
        });
      }
      setArticles(res.data);
    });
  }, [name]);

  const singleCategoriesPosts = articles?.map((article) => (
    <SingleCategoryPost key={article._id} article={article} />
  ));

  return !articles ? (
    <div>Loading...</div>
  ) : (
    <>
      {/* Breadcumb Area Start */}
      <div className="breadcumb-area section_padding_50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breacumb-content d-flex align-items-center justify-content-between">
                {/* Post Tag */}
                <div className="gazette-post-tag">
                  <Link to={`/Category/${name}`}>{name}</Link>
                </div>
                <p className="editorial-post-date text-dark mb-0">
                  {moment().format("DD/MM/YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcumb Area End */}

      <section className="catagory-welcome-post-area section_padding_100">
        <div className="container">
          <div className="row">{singleCategoriesPosts}</div>
        </div>
      </section>
    </>
  );
}

export default CategoryPage;
