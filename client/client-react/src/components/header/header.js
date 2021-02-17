import SingleStockReport from './singleStockReport';


function Header() {
    return (
        <header className="header-area">
            {/* Top Header Area */}
            <div className="top-header">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        {/* Breaking News Area */}
                        <div className="col-12 col-md-6">
                            <div className="breaking-news-area">
                                <h5 className="breaking-news-title">Breaking news</h5>
                                <div id="breakingNewsTicker" className="ticker">
                                    <ul>
                                        <li><a href="#">Brexit breakthrough in Brussels comes after week of drama</a></li>
                                        <li><a href="#">Brexit breakthrough in Brussels</a></li>
                                        <li><a href="#">Brexit breakthrough in Brussels comes after week of drama</a></li>
                                        <li><a href="#">Brex comes after week of drama</a></li>
                                        <li><a href="#">Brexit breakthrough in Bweek of drama</a></li>
                                        <li><a href="#">Brexit bssels comes after week of drama</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Stock News Area */}
                        <div className="col-12 col-md-6">
                            <div className="stock-news-area">
                                <div id="stockNewsTicker" className="ticker">
                                    <ul>
                                        <li>
                                            <SingleStockReport />
                                            <SingleStockReport />
                                            <SingleStockReport />
                                            dodlvd
                                        </li>
                                        <li>
                                            <SingleStockReport />
                                            <SingleStockReport />
                                            <SingleStockReport />
                                        </li>
                                        <li>
                                            <SingleStockReport />
                                            <SingleStockReport />
                                            <SingleStockReport />
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
                            <div className="logo-area">
                                <a href="/"><img src="img/core-img/logo.png" alt="logo" /></a>
                            </div>
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
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#gazetteMenu" aria-controls="gazetteMenu" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /> Menu</button>
                                    <div className="collapse navbar-collapse" id="gazetteMenu">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">Today <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="/">Home</a>
                                                    <a className="dropdown-item" href="/Category">Catagory</a>
                                                    <a className="dropdown-item" href="/PostDetails">Single Post</a>
                                                    <a className="dropdown-item" href="/AboutUs">About Us</a>
                                                    <a className="dropdown-item" href="/Contact">Contact</a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Politics</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Lifestyle</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Travel</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Health</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Entertainment</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">sport</a>
                                            </li>
                                        </ul>
                                        {/* Search Form */}
                                        <div className="header-search-form mr-auto">
                                            <form action="#">
                                                <input type="search" placeholder="Input your keyword then press enter..." id="search" name="search" />
                                                <input className="d-none" type="submit" defaultValue="submit" />
                                            </form>
                                        </div>
                                        {/* Search btn */}
                                        <div id="searchbtn">
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </div>
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