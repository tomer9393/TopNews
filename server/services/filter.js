const Article = require('../models/article');
const { emit } = require('../models/category');
const Category = require('../models/category');
const Comment=require ('../models/comment');
const Contact=require ('../models/contact');
const Scrape=require ('../models/scrape');
const User=require ('../models/user');



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
        gt = new Date(2021,1,1);
        console.log(gt);
    }
    if(!lt){ 
        lt = new Date(Date.now());
        console.log(lt);
    }

    return await Article.aggregate( [
        {
            $match: {
                $and: [
                    {category : {$regex : category, $options:'i'}},
                    {title : {$regex : title, $options:'i'}},
                    {lastUpdate : {"$gte": new Date(gt), "$lt": new Date(lt)}}
              
              ]
          }
        }
      ] );
};

const articlesSearch = async (string) => {

  if(!string){ 
      string = "";
  }

  return await Article.aggregate( [
      {
          $match: {
            $or: [
                {title : {$regex : string, $options:'i'}},
                {subTitle : {$regex : string, $options:'i' }},
                {category : {$regex : string, $options:'i'}},
                {img : {$regex : string, $options:'i'}},
                {body : {$regex : string, $options:'i'}}
          ]
      }
      }
    ] );
};


const categoriesSearch = async (name) => {

  if(!name){ 
      name = "";
  }

  return await Category.aggregate( [
      {
          $match: {
            name : {$regex : name, $options:'i'}
          }
      }
    ] );
};

const commentsSearch = async (string) => {

  if(!string){ 
      string = "";
  }

  return await Comment.aggregate( [
      {
          $match: {
            $or: [
                    {articleId : {$regex : string, $options:'i'}},
                    {name : {$regex : string, $options:'i'}},
                    {body : {$regex : string, $options:'i'}}
           ]
         }
      }
    ] );
};

const contactsSearch = async (string) => {

  if(!string){ 
      string = "";
  }

  return await Contact.aggregate( [
      {
          $match: {
            $or: [
                  {fullName : {$regex : string, $options:'i'}},
                  {email : {$regex : string, $options:'i'}},
                  {message : {$regex : string, $options:'i'}}
         ]
}
      }
    ] );
};

const scrapesSearch = async (string) => {

  if(!string){ 
      string = "";
  }

  return await Scrape.aggregate( [
      {
          $match: {
            $or: [
                  {title : {$regex : string, $options:'i'}},
                  {img : {$regex : string, $options:'i'}}
         ]
}
      }
    ] );
};

const usersSearch = async (string) => {

  if(!string){ 
      string = "";
  }

  return await User.aggregate( [
      {
          $match: {
            $or: [
                   {email : {$regex : string, $options:'i'}},
                   {firstname : {$regex : string, $options:'i'}},
                   {lastname : {$regex : string, $options:'i'}},
                   {phone : {$regex : string, $options:'i'}}
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
    articlesSearch,
    categoriesSearch,
    commentsSearch,
    contactsSearch,
    scrapesSearch,
    usersSearch,
    func,
    getArticlesId,
    getSumOfCommentsByArticle,
    getSumOfArticlesByCategory
};