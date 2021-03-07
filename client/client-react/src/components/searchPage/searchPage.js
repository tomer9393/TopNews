import SingleCategoryPost from "../categoryPage/singleCategoryPost";

function SearchPage(props) {
  const articles = props.location?.state?.articles;

  return articles?.length === 0 ? (
    <div style={{ textAlign: "center" }}>No results</div>
  ) : (
    <section className="catagory-welcome-post-area section_padding_100">
      <div className="container">
        <div className="row">
          {articles?.map((article) => (
            <SingleCategoryPost article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default SearchPage;
