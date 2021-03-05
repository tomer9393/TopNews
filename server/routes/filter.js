const express = require ('express');
var router = express.Router();
const filterController = require ('../controllers/filter');


router.route('/:category/:title/:gt/:lt')
    .get(filterController.homePageSearch);

router.route('/articleComments')
    .get(filterController.getSumOfCommentsByArticle);

router.route('/articlesId')
    .get(filterController.getArticlesId);

router.route('/categories')
    .get(filterController.getSumOfArticlesByCategory);

router.route('/func')
    .get(filterController.func);


module.exports = router;