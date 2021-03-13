import {Link} from "react-router-dom";


function Footer(){
    return (
        <>
        <footer className="footer-area bg-img background-overlay" style={{backgroundImage: 'url(img/bg-img/4.jpg)'}}>
          {/* Top Footer Area */}
          <div className="top-footer-area section_padding_100_70">
            <div className="container">
              <div className="row">
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="single-footer-widget">
                    <div className="footer-widget-title">
                      <h4 className="font-pt" style={{textAlign: 'left'}}>Categories</h4>
                    </div>
                    <ul className="footer-widget-menu">
                      <li><Link to="/Category/Politics">Politics</Link></li>
                      <li><Link to="/Category/Lifestyle">Lifestyle</Link></li>
                      <li><Link to="/Category/Travel">Travel</Link></li>
                      <li><Link to="/Category/Health">Health</Link></li>
                      <li><Link to="/Category/Entertainment">Entertainment</Link></li>
                      <li><Link to="/Category/Sport">Sport</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="single-footer-widget">
                    <div className="footer-widget-title">
                      <h4 className="font-pt" style={{textAlign: 'left'}}>Our vision</h4>
                    </div>
                    <ul className="footer-widget-menu">
                      <li><a >Our vision is to provide the best news in the world, and the most interesting content while providing the best service possible</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2"></div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2"></div>
                <div ></div>
                <div ></div>
                 {/* Single Footer Widget */}
                 <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="single-footer-widget">
                    <div className="footer-widget-title">
                    <Link to="/AboutUs"><h4 className="font-pt">About Us</h4></Link>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="single-footer-widget">
                    <div className="footer-widget-title">
                    <Link to="/Contact"><h4 className="font-pt">Contact Us</h4></Link>
                    </div>
                    <ul className="footer-widget-menu">
                      {/* <img src="https://www.merhofcu.org/wp-content/uploads/2018/07/time-to-update-website.jpg" className="lazyloaded" data-ll-status="loaded"></img> */}
                      {/* <li><Link to="/Contact">To contact us press here</Link></li> */}
                    </ul>
                  </div>
                </div>
                  
               
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="single-footer-widget">
                    <div className="footer-widget-title">
                      {/* <h4 className="font-pt">+More</h4> */}
                    </div>
                    {/* <ul className="footer-widget-menu">
                      <li><a href="#">Fashion</a></li>
                      <li><a href="#">Design</a></li>
                      <li><a href="#">Architecture</a></li>
                      <li><a href="#">Arts</a></li>
                      <li><a href="#">Autos</a></li>
                      <li><a href="#">Luxury</a></li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Footer Area */}
          <div className="bottom-footer-area">
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12">
                  <div className="copywrite-text">
                    <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright ©️ All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    );
}

export default Footer;