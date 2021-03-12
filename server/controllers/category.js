const categoryService = require('../services/category');
var emitter = require('../common/emitter')

var myEmitter = emitter.myEmitter

const createCategory = async (req, res) =>{
    const newCategory = await categoryService.createCategory(req.body.name);
    if(newCategory !== null)
        myEmitter.emit('createCategory');
    res.json(newCategory);
};

const getCategoryByName = async (req, res) =>{
    const category = await categoryService.getCategoryByName(req.params.name); 
    if (!category)
    {
        return res.status(404).json({ errors : ['Category not found']});
    }

    res.json(category);
};

const updateCategory = async (req, res) =>{
    if (!req.body.name)
    {
        res.status(400).json({
            message : "Category name is required"
        });
    }

    const category = await categoryService.updateCategory(req.params.name);
    if (!category)
    {
        return res.status(404).json({errors: ['Category not found']});
    }

    res.json(category);
};

const removeCategory = async (req, res) =>{
    const category = await categoryService.removeCategory(req.params.name);
    if (!category)
    {
        return res.status(404).json({errors : ['Category not found']});
    }
    myEmitter.emit('deleteCategory');
    res.send();
};

const getAllCategories = async (req,res)=>{
    const categories = await categoryService.getAllCategories();
    if (!categories)
    {
        return res.status(404).json({errors : ['Categories not found']});
    }
    res.json(categories);
};

const getNumOfCategories = async (req,res)=>{
    const count = await categoryService.getNumOfCategories();
    res.json(count);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByName,
    updateCategory,
    removeCategory,
    getNumOfCategories
}

