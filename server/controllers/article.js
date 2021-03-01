const articleService = require('../services/article');

const createArticle = async (req, res) => {
  const newArticle = await articleService.createArticle(req.body.title, req.body.subTitle, req.body.img, req.body.category, req.body.body, req.body.published, req.body.lastUpdate);
  res.json(newArticle);
};

const getArticles = async (req, res) => {
  const articles = await articleService.getArticles();
  res.json(articles);
};

const getArticleById = async (req, res) => {
  console.log(`req with articleId: ${req.params.id} `);
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return res.status(404).json({ errors: ['Article not found'] });
  }

  res.json(article);
};

const getLatestArticles = async (req, res) => {
  const articles = await articleService.getLatestArticles(req.params.numOfArticles);
  if (!articles) {
    return res.status(404).json({ errors: ['No Articles To Display'] });
  }

  res.json(articles);
};

const getArticlesByCategory = async (req, res) => {
  const articles = await articleService.getArticlesByCategory(req.params.category);
  if (!articles) {
    return res.status(404).json({ errors: ['No Articles To Display For' + req.params.category] });
  }

  res.json(articles);
};

const updateArticle = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({
      message: "id is required",
    });
  }

  const article = await articleService.updateArticle(req.params.id, req.body.title, req.body.subTitle, req.body.category, req.body.body, req.body.img);
  if (!article) {
    return res.status(404).json({ errors: ['Article not found'] });
  }

  res.json(article);
};

const deleteArticle = async (req, res) => {
  const article = await articleService.deleteArticle(req.params.id);
  if (!article) {
    return res.status(404).json({ errors: ['Article not found'] });
  }

  res.send();
};

const getNumOfArticles = async (req,res)=>{
  const count = await articleService.getNumOfArticles();
  res.json(count);
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  getLatestArticles,
  getArticlesByCategory,
  updateArticle,
  deleteArticle,
  getNumOfArticles
};