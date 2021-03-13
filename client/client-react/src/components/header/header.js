import SingleStockReport from "./singleStockReport";
import { Link } from "react-router-dom";
import SerachBox from "./SearchBox";
import { useState } from "react";
import logo from "../../img/core-img/logo1.PNG"

function Header() {
  const [showSearch, setShowSearch] = useState();

  return (
    <header className="header-area" style={{marginBottom: '30px'}}>
      
      {/* Top Header Area */}
      <div className="top-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Breaking News Area */}
            <div className="col-12 col-md-6">
              <div className="breaking-news-area">
                <h5 className="breaking-news-title">Exchange Rate</h5>
              </div>
            </div>
            {/* Stock News Area */}
            <div className="col-12 col-md-6">
              <div className="stock-news-area">
                <div id="stockNewsTicker" className="ticker">
                  <ul>
                    <li>
                      <SingleStockReport currSymbol={"ILS"} />
                      <SingleStockReport currSymbol={"EUR"} />
                      <SingleStockReport currSymbol={"GBP"} />
                    </li>
                    <li>
                      <SingleStockReport currSymbol={"CAD"} />
                      <SingleStockReport currSymbol={"RON"} />
                      <SingleStockReport currSymbol={"AUD"} />
                    </li>
                    <li>
                      <SingleStockReport currSymbol={"DKK"} />
                      <SingleStockReport currSymbol={"CHF"} />
                      <SingleStockReport currSymbol={"PLN"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Header Area */}
      <div className="middle-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Logo Area */}
            <div className="col-12 col-md-4">
              {/* <div className="logo-area"></div> */}
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Header Area */}
      <div className="bottom-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="main-menu">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#gazetteMenu"
                    aria-controls="gazetteMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars" /> Menu
                  </button>
                  <div className="collapse navbar-collapse" id="gazetteMenu">
                    {!showSearch && (
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Politics">
                            Politics
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Lifestyle">
                            Lifestyle
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Travel">
                            Travel
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Health">
                            Health
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/Category/Entertainment"
                          >
                            Entertainment
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Sport">
                            sport
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Contact">
                            contact
                          </Link>
                        </li>
                      </ul>
                    )}
                    <SerachBox
                      showSearch={showSearch}
                      setShowSearch={setShowSearch}
                    />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
