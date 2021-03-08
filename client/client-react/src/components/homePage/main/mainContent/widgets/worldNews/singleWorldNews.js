
function SingleWorldNews(props) {
  const scrape = props.scrape;


  return (
    <>
          <div className="single-dont-miss-post d-flex mb-30">
              <div className="dont-miss-post-thumb">
                  <img src={scrape.img} alt />             
              </div>
              <div className="dont-miss-post-content">
                  <a href="#" className="font-pt">{scrape.title}</a>
                  <span>{scrape.published}</span>
              </div>
          </div>

    </>
  );
}

export default SingleWorldNews;
