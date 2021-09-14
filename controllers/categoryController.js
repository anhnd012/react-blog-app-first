const Category = require('../models/categories')

exports.createCategory = async (req, res) => {
    const category = await Category.create(req.body);
    if(!category) {
        res.status(404).json({ success: false, message: " Cannot create category." });
    }
    res.status(200).json({success: true})
}

exports.getAllCategories = async (req, res) => {
    const categories = await Category.find();
    if(!categories) {
        res.status(404).json({ success: false, message: "Cannot find any category" });
    }
    res.status(200).json({success: true, categories})
}