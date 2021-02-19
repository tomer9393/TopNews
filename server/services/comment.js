const Comment=require ('../models/comment')

const createComment = async (articleId,name,body,published) => {
    const comment = new Comment({
        articleId: articleId,
        name: name,
        body: body
        
    });
    if (published)
        comment.published = published;

    return await comment.save();
}

const getCommentByID= async (id)=> {
    return await Comment.findByID(id);
}

const getAllCommentsByArticleID= async (articleId) => {
    return await Comment.find({articleId : articleId});
}

const UpdateComment = async(id,name,body,published)=> {
    const comment = await getCommentByID(id);
    if(!comment)
        return null;
    comment.name=name;
    comment.body=body;
    comment.published=Date.now;
    await comment.save();
    return comment;

}

const DeleteComment = async(id)=> {
    const comment = await getCommentByID(id);
    if(!comment)
        return null;
   
    await comment.remove();
    return comment;

}
