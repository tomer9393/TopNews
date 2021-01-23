const articleService = require('../services/article');

const createArticle = async (req, res) => {
  const newArticle = await articleService.createArticle(req.body.title, req.body.subTitle, req.body.categoty, req.body.body, req.body.published, req.body.lastUpdate);
  res.json(newArticle);
};

const getArticles = async (req, res) => {
  const articles = await articleService.getArticles();
  res.json(articles);
};

const getArticle = async (req, res) => {
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return res.status(404).json({ errors: ['Article not found'] });
  }

  res.json(article);
};

const getLatestArticles = async (req, res) => {
  const articles = await articleService.getLatestArticles();
  if (!article) {
    return res.status(404).json({ errors: ['No Articles To Display'] });
  }

  res.json(articles);
};

const getArticlesByCategory = async (req, res) => {
  const articles = await articleService.getArticlesByCategory(req.params.categoty);
  if (!article) {
    return res.status(404).json({ errors: ['No Articles To Display For' + req.params.categoty] });
  }

  res.json(articles);
};

const updateArticle = async (req, res) => {
  if (!req.body.id) {
    res.status(400).json({
      message: "id is required",
    });
  }

  const article = await articleService.updateArticle(req.params.id, req.body.title, req.body.subTitle, req.body.categoty, req.body.body, req.body.published, req.body.lastUpdate);
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

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  getLatestArticles,
  getArticlesByCategory,
  updateArticle,
  deleteArticle
};