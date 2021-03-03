const filterService = require('../services/filter');


const homePageSearch = async (req, res) => {
    const articles = await filterService.homePageSearch(req.params.category ,req.params.title ,req.params.gt ,req.params.lt);
    res.json(articles);
  };

const func = async (req,res)=> {
    await filterService.func();
//params mean from the URL
    res.send();
};

const getArticlesId = async (req, res) => {
    const articles = await filterService.getArticlesId();
    res.json(articles);
  };

const getSumOfCommentsByArticle = async (req, res) => {
    const comments = await filterService.getSumOfCommentsByArticle();
    res.json(comments);
  };


const getSumOfArticlesByCategory = async (req, res) => {
    const categories = await filterService.getSumOfArticlesByCategory();
    res.json(categories);
  };

  
module.exports = {
    homePageSearch,
    func,
    getArticlesId,
    getSumOfCommentsByArticle,
    getSumOfArticlesByCategory
};