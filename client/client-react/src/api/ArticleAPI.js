import axios from 'axios'
const baseUrl = 'http://localhost:8081';

const ERROR = -1;

export const getArticleById = async (id) => {
    try {
        const article = await axios.get(`${baseUrl}/articles/id/${id}`);
        return article;
    } catch (error) { return ERROR; }
}

export const getArticleByCategory = async (category) => {
    try {
        const articles = await axios.get(`${baseUrl}/articles/${category}`);
        return articles;
    } catch (error) { throw new Error(error); }
}

export const getNumOfArticlesByCategory = async (category,num) => {
    try {
        const articles = await axios.get(`${baseUrl}/articles/homeArticles/${category}/${num}`);
        return articles;
    } catch (error) { throw new Error(error); }
}

export const getLatestArticles = async (numOfArticles) => {
    try {
        const articles = await axios.get(`${baseUrl}/articles/latestArticles/${numOfArticles}`);
        return articles;
    } catch (error) { throw new Error(error); }
}

export const homePageSearch = async (category,title,gt,lt) => { // gt,lt - format: "2012,7,14" (yyyy,mm,dd)
    try {
        const articles = await axios.get(`${baseUrl}/filters/${category}/${title}/${gt}/${lt}`);
        return articles;
    } catch (error) { throw new Error(error); }
}