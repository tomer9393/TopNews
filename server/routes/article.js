const express = require ('express');
var router = express.Router();
const articleController = require ('../controllers/article');

router.route('/')
    .get(articleController.getArticles)
    .post(articleController.createArticle);


router.route('/:category')
    .get(articleController.getArticlesByCategory);


router.route('/id/:id')
    .get(articleController.getArticleById)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle);

module.exports = router;