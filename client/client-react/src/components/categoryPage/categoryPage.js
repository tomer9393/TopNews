import SingleCategoryPost from "./singleCategoryPost";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getArticleByCategory } from "../../api/ArticleAPI";
import React, { useEffect, useState } from "react";

function CategoryPage() {
  const { name } = useParams();
  const [articles, setArticles] = useState(undefined);

  useEffect(() => {
    getArticleByCategory(name).then((res) => setArticles(res.data));
  }, []);

  const singleCategoriesPosts = articles?.map((article) => <SingleCategoryPost article={article}/>);

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
                  <a href="#">{articles[0].category.name}</a>
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
          {/* <div className="row">
                        <div className="col-12">
                            <div className="gazette-pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next"><i className="fa fa-angle-right" /></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> */}
        </div>
      </section>
    </>
  );
}

export default CategoryPage;
