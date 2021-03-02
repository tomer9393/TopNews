const Article = require('../models/article');

const createArticle = async (title, subTitle, img, category, body, published, lastUpdate) => {
    const article = new Article({
        title : title,
        subTitle : subTitle,
        category : category,
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

const getNumOfArticlesByCategory = async (category,num) => {
    return await Article.find({category : category}).sort({ published: 'desc' }).limit(parseInt(num));
};

const getLatestArticles = async (numOfArticles) => {
    return await Article.find().sort({ published: 'desc' }).limit(parseInt(numOfArticles));
};

const updateArticle = async (id, title, subTitle, category, body ,img) => {
    const article = await getArticleById(id);
    if (!article)
        return null;

    article.title = title;
    article.subTitle = subTitle;
    article.category = category;
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



const getNumOfArticles = async () => {
    return await Article.find().count(function(err, count){
        console.log("Number of Articles: ", count );
    });
};



module.exports = {
    createArticle,
    getArticleById,
    getArticles,
    getLatestArticles,
    getArticlesByCategory,
    getNumOfArticlesByCategory,
    updateArticle,
    deleteArticle,
    getNumOfArticles
}