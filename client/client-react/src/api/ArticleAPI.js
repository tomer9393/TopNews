import axios from 'axios'
const baseUrl = 'http://localhost:8081';

export const getArticleById = async (id) => {
    try {
        const article = await axios.get(`${baseUrl}/articles/id/${id}`);
        return article;
    } catch (error) { throw new Error(error); }
}

export const getArticleByCategory = async (category) => {
    try {
        const articles = await axios.get(`${baseUrl}/articles/${category}`);
        return articles;
    } catch (error) { throw new Error(error); }
}

