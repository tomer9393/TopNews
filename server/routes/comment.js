const express = require ('express');
var router = express.Router();
const commentController = require ('../controllers/comment');

router.route('/')
    .post(commentController.createComment);


router.route('/:articleId')
    .get(commentController.getAllCommentsByArticleID);


router.route('/:id')
    .get(commentController.getCommentByID)
    .patch(commentController.UpdateComment)
    .delete(commentController.deleteComment);

module.exports = router;