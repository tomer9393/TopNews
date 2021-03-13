import { format } from "date-fns";

function SingleWorldNews(props) {
  const scrape = props.scrape;
  var date = new Date(scrape.published);
  var formattedDate = format(date, "dd/MM/yyyy");

  return (
    <>
          <div className="single-dont-miss-post d-flex mb-30">
              <div className="dont-miss-post-thumb">
                  <img src={scrape.img} alt="" />             
              </div>
              <div className="dont-miss-post-content">
                  <a className="font-pt">{scrape.title}</a>
                  <span>{formattedDate}</span>
              </div>
          </div>

    </>
  );
}

export default SingleWorldNews;
