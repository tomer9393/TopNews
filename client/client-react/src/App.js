//import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import CategoryPage from './components/categoryPage/categoryPage';
import PostDetailsPage from './components/postDetailsPage/postDetailsPage';
import AboutUsPage from './components/aboutUsPage/aboutUsPage';
import ContactPage from './components/contactPage/contactPage';

import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Category" component={() => <CategoryPage />} />
          <Route path="/PostDetails" component={() => <PostDetailsPage />} />
          <Route path="/AboutUs" component={() => <AboutUsPage />} />
          <Route path="/Contact" component={() => <ContactPage />} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
