const categoryService = require('../services/category');

const createCategory = async (req, res) =>{
    const newCategory = await categoryService.createCategory(req.body.name);
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

    res.send();
};

const getAllCategories = async (res)=>{
    const categories = await categoryService.getAllCategories();
    res.json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByName,
    updateCategory,
    removeCategory
}

