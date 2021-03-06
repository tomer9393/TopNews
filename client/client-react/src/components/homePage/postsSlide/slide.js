import { getNumOfArticlesByCategory } from "../../../api/ArticleAPI";
import { useEffect, useState } from "react";
import { categories } from "../../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SinglePostSlide from "./singlePostSlide";

function Slide() {
  const [articles, setArticles] = useState(undefined);
  const [tempArticles, setTempArticles] = useState([]);

  useEffect(
    () =>
      categories.forEach((category) => {
        getNumOfArticlesByCategory(category, 1)
          .then((res) => res.data)
          .then((res) => {
            //if there is an article for the category
            if (res.length > 0) {
              setTempArticles((tempArticles) => [...tempArticles, res[0]]);
            }
          });
      }),
    []
  );

  useEffect(() => {
    //if we got all the articles then set articles
    //TODO[Lee]: Change 3 to categories.length
    if (tempArticles.length === 3) {
      setArticles(tempArticles);
    }
  }, [tempArticles]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return !articles ? (
    <div>Loading...</div>
  ) : (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
    >
      {articles.map((article) => (
        <SinglePostSlide article={article} />
      ))}
    </Carousel>
  );
}

export default Slide;
