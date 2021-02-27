import axios from 'axios'
const baseUrl = 'http://localhost:8081';

export const getCommentsByArticleID = async (articleId) => {
    try {
        const comments = await axios.get(`${baseUrl}/comments/${articleId}`);
        return comments;
    } catch (error) { throw new Error(error); }
}

export const createComment = async ( articleId ,name ,body) => {
    try {
        const newComment ={

            articleId : articleId,
            name : name,
            body : body
        };

        const comment = await axios.post(`${baseUrl}/comments/`,newComment);
        return comment;
    } catch (error) { throw new Error(error); }
}
