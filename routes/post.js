const express = require('express');

const router = express.Router();

const { getAllPost, createPost, getPostById, getPostByCategory, deletePost, updatePost } = require('../controllers/postController')

router.route('/createPost').post(createPost);
router.route('/:id').get(getPostById).delete(deletePost).put(updatePost);
router.route('/').get(getPostByCategory)




module.exports = router