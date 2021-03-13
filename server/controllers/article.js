const articleService = require('../services/article');
var emitter = require('../common/emitter')

var myEmitter = emitter.myEmitter

const createArticle = async (req, res) => {
  const newArticle = await articleService.createArticle(req.body.title, req.body.subTitle, req.body.img, req.body.category, req.body.body, req.body.published, req.body.lastUpdate);
  myEmitter.emit('createArticle');
  if (!newArticle) {
    return res.status(501).json("No article created");
  }
  res.json(newArticle);
};

const getArticles = async (req, res) => {
  const articles = await articleService.getArticles();
  if (!articles) {
    return res.status(500).json("Articles not found");
  }
  res.json(articles);
};


const getArticleById = async (req, res) => {
  
  console.log(`req with articleId: ${req.params.id} `);
  if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400).json("Valid id is required");
  }
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return res.status(404).json("Article not found");
  }

  res.json(article);
};

const getLatestArticles = async (req, res) => {
  const articles = await articleService.getLatestArticles(req.params.numOfArticles);
  if (!articles) {
    return res.status(500).json("Articles not found");
  }

  res.json(articles);
};

const getArticlesByCategory = async (req, res) => {
  const articles = await articleService.getArticlesByCategory(req.params.category);
  if (!articles) {
    return res.status(500).json("Articles not found");
  }

  res.json(articles);
};


const getNumOfArticlesByCategory = async (req, res) => {
  const articles = await articleService.getNumOfArticlesByCategory(req.params.category, req.params.num);
  if (!articles) {
    return res.send(0);
  }

  res.json(articles);
};


const updateArticle = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }

  const article = await articleService.updateArticle(req.params.id, req.body.title, req.body.subTitle, req.body.category, req.body.body, req.body.img);
  if (!article) {
    return res.status(404).json('Article not found');
  }

  res.json(article);
};

const deleteArticle = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }
  const article = await articleService.deleteArticle(req.params.id);
  if (!article) {
    return res.status(404).json('Article not found');
  }
  myEmitter.emit('deleteArticle');

  res.send();
};

const getNumOfArticles = async (req, res) => {
  const count = await articleService.getNumOfArticles();
  if (!count) {
    return res.send(0);
  }
  res.json(count);
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  getLatestArticles,
  getArticlesByCategory,
  getNumOfArticlesByCategory,
  updateArticle,
  deleteArticle,
  getNumOfArticles
};