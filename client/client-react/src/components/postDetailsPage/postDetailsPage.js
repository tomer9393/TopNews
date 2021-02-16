import CommentsArea from './commentArea/commentsArea';

function PostDetailsPage() {
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
                                        <a href="#">Editorial</a>
                                    </div>
                                    <h2 className="font-pt">Move over, bitcoin.Here comes litecoin</h2>
                                    <p>March 29, 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-post-contents">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8">
                                <div className="single-post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum nunc libero, vitae rutrum nunc porta id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam arcu augue, semper at elementum</p>
                                    <p>nec, cursus nec ante. Vestibulum sed velit scelerisque elit posuere vulputate vel viverra quam. Curabitur laoreet aliquam diam, non mattis arcu feugiat sed. Sed eget pellentesque lacus. Pellentesque in diam vel mauris pretium commodo a ac magna. Suspendisse scelerisque tellus convallis tortor posuere, ut commodo diam blandit. Morbi vel nulla non turpis luctus tempor eu eu urna. Aliquam in lorem a augue mollis volutpat. Nunc iaculis rutrum enim nec viverra. Morbi eleifend metus id tellus luctus, ac porta orci imperdiet.</p>
                                    <p>Morbi efficitur ligula a efficitur mollis. Suspendisse vitae sapien vitae urna eleifend dapibus ut non tortor. In nec metus ac mi ultrices commodo interdum et lacus. Suspendisse potenti. Suspendisse interdum semper dolor nec posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut orci non tortor pretium hendrerit at vel massa. Nunc ut fermentum felis.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-post-thumb">
                                    <img src="img/blog-img/24.jpg" alt />
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="single-post-text">
                                    <p>Suspendisse scelerisque tellus convallis tortor posuere, ut commodo diam blandit. Morbi vel nulla non turpis luctus tempor eu eu urna. Aliquam in lorem a augue mollis volutpat. Nunc iaculis rutrum enim nec viverra. Morbi eleifend metus id tellus luctus, ac porta orci imperdiet.</p>
                                    <p>Morbi efficitur ligula a efficitur mollis. Suspendisse vitae sapien vitae urna eleifend dapibus ut non tortor. In nec metus ac mi ultrices commodo interdum et lacus. Suspendisse potenti. Suspendisse interdum semper dolor nec posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut orci non tortor pretium hendrerit at vel massa. Nunc ut fermentum felis. </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="single-post-blockquote">
                                    <blockquote>
                                        <h6 className="font-pt mb-0">“Vestibulum nulla diam, sodales sit amet erat vel, mollis iaculis lectus. Suspendisse in rhoncus est. Sed aliquet mauris in efficitur tempor. Proin enim felis, laoreet id viverra at”</h6>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="single-post-text">
                                    <p>Suspendisse vitae sapien vitae urna eleifend dapibus ut non tortor. In nec metus ac mi ultrices commodo interdum et lacus. Suspendisse potenti. Suspendisse interdum semper dolor nec posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut orci non tortor pretium hendrerit at vel massa. Nunc ut fermentum felis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <CommentsArea />
        </>
    );
}

export default PostDetailsPage;