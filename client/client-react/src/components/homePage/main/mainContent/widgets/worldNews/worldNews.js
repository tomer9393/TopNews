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

        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[0]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[1]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[2]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[3]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[4]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[5]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[6]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[7]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[8]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[9]} />
        {/* Single World News */}
        <SingleWorldNews scrape={scrapes[10]} />
      </div>
    </>
  );
}

export default WorldNews;
