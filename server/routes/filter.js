const express = require ('express');
var router = express.Router();
const filterController = require ('../controllers/filter');


router.route('/:category/:title/:gt/:lt')
    .get(filterController.homePageSearch);

router.route('/articles/:string')
    .get(filterController.articlesSearch);

router.route('/categories/:name')
    .get(filterController.categoriesSearch);

router.route('/comments/:string')
    .get(filterController.commentsSearch);

router.route('/contacts/:string')
    .get(filterController.contactsSearch);

router.route('/scrapes/:string')
    .get(filterController.scrapesSearch);

router.route('/users/:string')
    .get(filterController.usersSearch);

router.route('/articleComments')
    .get(filterController.getSumOfCommentsByArticle);

router.route('/articlesId')
    .get(filterController.getArticlesId);

router.route('/categories')
    .get(filterController.getSumOfArticlesByCategory);

router.route('/func')
    .get(filterController.func);

router.route('/activeUsers')
    .get(filterController.activeUsers);

module.exports = router;