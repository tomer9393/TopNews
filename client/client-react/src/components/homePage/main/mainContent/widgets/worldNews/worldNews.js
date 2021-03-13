import SingleWorldNews from "./singleWorldNews";
import { getLatestScrapes } from "../../../../../../api/ScrapeAPI";
import { useEffect, useState } from "react";

function WorldNews() {
  const [scrapes, setScrapes] = useState();
  useEffect(
    () =>
      getLatestScrapes(11)
        .then((res) => res.data)
        .then((res) => setScrapes(res)),
    []
  );

  return !scrapes ? (
    <div>Loading...</div>
  ) : (
    <>
        <div className="donnot-miss-widget">
              <div className="widget-title">
               <h5>World News</h5>
              </div>
        {scrapes.map((scrape) => {
        return <SingleWorldNews key={scrape._id} scrape={scrape} />;
        })}
      </div>
    </>
  );
}

export default WorldNews;
