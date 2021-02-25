const Article = require('../models/article');

const createArticle = async (title, subTitle, img, categoty, body, published, lastUpdate) => {
    const article = new Article({
        title : title,
        subTitle : subTitle,
        categoty : categoty,
        img: img,
        body : body,
    });

    if(published)
        article.published = published;
    if(lastUpdate)
        article.lastUpdate = lastUpdate;

    return await article.save();
};

const getArticleById = async (id) => {
    return await Article.findById(id);
};

const getArticles = async () => {
    return await Article.find({});
};

const getArticlesByCategory = async (category) => {
    return await Article.find({category : category});
};

const getLatestArticles = async (numOfArticles) => {
    return await Article.find().sort({ published: -1 }).limit(numOfArticles);
};

const updateArticle = async (id, title, subTitle, categoty, body ,img) => {
    const article = await getArticleById(id);
    if (!article)
        return null;

    article.title = title;
    article.subTitle = subTitle;
    article.categoty = categoty;
    article.body = body;
    article.img = img;
    article.lastUpdate = Date.now();

    await article.save();
    return article;
};

const deleteArticle = async (id) => {
    const article = await getArticleById(id);
    if (!article)
        return null;

    await article.remove();
    return article;
};



module.exports = {
    createArticle,
    getArticleById,
    getArticles,
    getLatestArticles,
    getArticlesByCategory,
    updateArticle,
    deleteArticle
}