const Article = require('../models/article');
const { emit } = require('../models/category');
const Category = require('../models/category');
const Comment=require ('../models/comment')


const func = async () => {

    const o = {};
    // `map()` and `reduce()` are run on the MongoDB server, not Node.js,
    // these functions are converted to strings
    o.map = function () { emit(this.articleId, 1) };
    o.reduce = function (k, vals) { return vals.length };
    Comment.mapReduce(o, function (err, results) {
      if(err) throw err;
      console.log(results);
    })
};


const homePageSearch = async (category, title, gt, lt) => {


    if(!category){
        category = "";
    }
    if(!title){ 
        title = "";
    }
    if(!gt){ 
        gt = new Date(Date.now());
        console.log(gt);
    }
    if(!lt){ 
        lt = new Date(Date.now());
        console.log(lt);
    }

    return await Article.aggregate( [
        {
            $match: {
                $or: [
                    {category : {$regex : category}},
                    {title : {$regex : title}},
                    {lastUpdate : {"$gte": new Date(gt), "$lt": new Date(lt)}}
              
              ]
          }
        }
      ] );
};

const getArticlesId = async () => {
    return await Article.find().select("_id");;
};

const getSumOfCommentsByArticle= async () => {
    return await Comment.aggregate( [
        {
          $group: {
            _id: "$articleId",
            count: { $sum: 1 }
          }
        }
      ] );
};

const getSumOfArticlesByCategory= async () => {
    return await Article.aggregate( [
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 }
          }
        }
      ] );
};


module.exports = {
    homePageSearch,
    func,
    getArticlesId,
    getSumOfCommentsByArticle,
    getSumOfArticlesByCategory
};