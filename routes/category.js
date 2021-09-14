const express = require('express')

const router = express.Router();

const { createCategory, getAllCategories } = require('../controllers/categoryController')

router.route('/').post(createCategory)
router.route('/getAll').get(getAllCategories)


module.exports = router