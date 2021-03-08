const filterService = require('../services/filter');
var ActiveUsers = require('../common/realTime');
const article = require('../models/article');

const activeUsers = (req, res) => {
  var countActiveUsers = ActiveUsers.countActiveUsers;
  res.json(countActiveUsers);
}

const homePageSearch = async (req, res) => {
  const articles = await filterService.homePageSearch(req.params.category, req.params.title, req.params.gt, req.params.lt);
  if (!articles) {
    return res.status(404).json({ errors: ['articles not found'] });
  }
  res.json(articles);
};

const articlesSearch = async (req, res) => {
  const articles = await filterService.articlesSearch(req.params.string);
  if (!articles) {
    return res.status(404).json({ errors: ['Articles not found'] });
  }
  res.json(articles);
};

const categoriesSearch = async (req, res) => {
  const categories = await filterService.categoriesSearch(req.params.name);
  if (!categories) {
    return res.status(404).json({ errors: ['Categories not found'] });
  }
  res.json(categories);
};

const commentsSearch = async (req, res) => {
  const comments = await filterService.commentsSearch(req.params.string);
  if (!comments) {
    return res.status(404).json({ errors: ['Comments not found'] });
  }
  res.json(comments);
};

const contactsSearch = async (req, res) => {
  const contacts = await filterService.contactsSearch(req.params.string);
  if (!contacts) {
    return res.status(404).json({ errors: ['Contacts not found'] });
  }
  res.json(contacts);
};

const scrapesSearch = async (req, res) => {
  const scrapes = await filterService.scrapesSearch(req.params.string);
  if (!scrapes) {
    return res.status(404).json({ errors: ['Scrapes not found'] });
  }
  res.json(scrapes);
};

const usersSearch = async (req, res) => {
  const users = await filterService.usersSearch(req.params.string);
  if (!users) {
    return res.status(404).json({ errors: ['Users not found'] });
  }
  res.json(users);
};

const func = async (req, res) => {
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
  articlesSearch,
  categoriesSearch,
  commentsSearch,
  contactsSearch,
  scrapesSearch,
  usersSearch,
  func,
  getArticlesId,
  getSumOfCommentsByArticle,
  getSumOfArticlesByCategory,
  activeUsers
};