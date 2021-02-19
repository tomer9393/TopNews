import CommentsArea from './commentArea/commentsArea';

function PostDetailsPage(article, comments) {
    //mock - to delete
    article = {
        title: "BLABLA",
        subTitle: "SUBTITLEEEE",
        img: "https://s14415.pcdn.co/wp-content/uploads/2019/01/egg-header.png",
        category: "SPORT",
        body: 'Lee is an egg and Daniel is the king 😃',
    };

    return (
        <>
            <section className="single-post-area">
                {/* Single Post Title */}
                <div className="single-post-title bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/1.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-end">
                            <div className="col-12">
                                <div className="single-post-title-content">
                                    {/* Post Tag */}
                                    <div className="gazette-post-tag">
                                        <a href="#">{article.category}</a>
                                    </div>
                                    <h2 className="font-pt">{article.title}</h2>
                                    <h5 className="font-pt">{article.subTitle}</h5>
                                    <p>{article.published}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={article.img} />
                </div>
                <div className="single-post-contents">
                    <div className="container">
                        <div className="row justify-content-center">
                            {article.body}
                        </div>
                    </div>
                </div>
            </section>

            <CommentsArea comments={comments} />
        </>
    );
}

export default PostDetailsPage;