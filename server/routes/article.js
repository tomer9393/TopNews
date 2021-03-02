const express = require ('express');
var router = express.Router();
const articleController = require ('../controllers/article');

router.route('/')
    .get(articleController.getArticles)
    .post(articleController.createArticle);

router.route('/latestArticles/:numOfArticles')
    .get(articleController.getLatestArticles);

router.route('/:category')
    .get(articleController.getArticlesByCategory);

router.route('/:category/:num')
    .get(articleController.getNumOfArticlesByCategory);

router.route('/articles/count')
    .get(articleController.getNumOfArticles);


router.route('/id/:id')
    .get(articleController.getArticleById)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle);

module.exports = router;