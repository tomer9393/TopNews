const comment = require('../models/comment');
const commentService = require('../services/comment');

const createComment = async (req, res) =>{
    const newComment = await commentService.createComment(req.body.articleId, req.body.name, req.body.body, req.body.publisehd);
    res.json(newComment);

};

const getCommentByID = async (req,res) =>{
    const comment = await commentService.getCommentByID(req.params.id);
    res.json(comment);
};

const getAllCommentsByArticleID = async (req,res) => {
    const comments = await commentService.getAllCommentsByArticleID(req.params.articleId);
    res.json(comments);
};

const UpdateComment = async (req,res)=> {
    if (!req.params.id) {
        res.status(400).json({
          message: "id is required",
        });
      }
    
      const comment = await commentService.UpdateComment(req.params.id, req.body.name, req.body.body);
      if (!comment) {
        return res.status(404).json({ errors: ['Comment not found'] });
      }
    
      res.json(comment);
};


const deleteComment = async (req,res)=> {
    const comment = await commentService.deleteComment(req.params.id);
//params mean from the URL
    if (!comment) {
        return res.status(404).json({ errors: ['Comment not found'] });
    } 
    res.send();
};

const getAllcomments = async (req, res) => {
    const comments = await commentService.getAllComments();
    res.json(comments);
  };

module.exports = {
    createComment,
    getCommentByID,
    getAllCommentsByArticleID,
    UpdateComment,
    deleteComment,
    getAllcomments
};