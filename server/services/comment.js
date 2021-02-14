const Comment=require ('../models/comment')

const createComment = async (name,body,published) => {
    const comment = new Comment({
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

const getComments= async () => {
    return await Comment.find({});
}

const UpdateComment = async(id,name,body,published)=> {
    const comment = await getCommentByID(id);
    if(!comment)
        return null;
    comment.name=name;
    comment.body=body;
    comment.published=published;
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
