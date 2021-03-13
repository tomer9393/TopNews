import SingleTodayPosts from "./singleTodayPosts";
import { getLatestArticles } from "../../../../../api/ArticleAPI";
import { useEffect, useState } from "react";

function TodayPosts() {
  const [articles, setArticles] = useState();
  useEffect(
    () =>
      getLatestArticles(2)
        .then((res) => res.data)
        .then((res) => setArticles(res)),
    []
  );

  return !articles ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="gazette-todays-post section_padding_100_50">
        <div className="gazette-heading">
          <h4>Latest Articles</h4>
        </div>

        {/* Single Today Post */}
        <SingleTodayPosts article={articles[0]} />
        {/* Single Today Post */}
        <SingleTodayPosts article={articles[1]} />
      </div>
    </>
  );
}

export default TodayPosts;
