const Category = require('../models/category');

const createCategory = async (name) => {
    const category = new Category({ name: name });

    let categoryDocument = await category.save();
    console.log('category:');
    console.log(categoryDocument);

    return categoryDocument;
}

const getCategoryByName = async (name) => {
    return await Category.find({ name: name });
}

const updateCategory = async (name) => {
    const category = await getCategoryByName(name);
    if (!category)
        return null;

    category.name = name;
    return await category.save();
}

const removeCategory = async (name) => {
    const category = await getCategoryByName(name);
    if (!category)
        return null;

    return await Category.remove();

}

const getAllCategories = async () => {
    return await Category.find();
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByName,
    updateCategory,
    removeCategory
}


