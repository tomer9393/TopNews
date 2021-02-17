import SingleCategoryPost from './singleCategoryPost';

function CategoryPage() {
    return (
        <>
            {/* Breadcumb Area Start */}
            <div className="breadcumb-area section_padding_50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breacumb-content d-flex align-items-center justify-content-between">
                                {/* Post Tag */}
                                <div className="gazette-post-tag">
                                    <a href="#">politics</a>
                                </div>
                                <p className="editorial-post-date text-dark mb-0">March 29, 2016</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcumb Area End */}

            <section className="catagory-welcome-post-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                        <SingleCategoryPost/>
                    </div>
                    <div className="row">
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
                    </div>
                </div>
            </section>


        </>
    );
}

export default CategoryPage;