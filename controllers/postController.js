const Post = require('../models/post')

// Create a post
exports.createPost = async (req, res) =>{
    const post = await Post.create(req.body);
    if(!post){
        res.status(404).json({
            success: false,
            message: " Please type all post's fields"
        });
    }
    res.status(200).json({
        success: true,
        post
    })
}



//Get a post by id
exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(404).json({
            success: false,
            message: " Cannot find post by Id"
        });
    }
    res.status(200).json({
        success: true,
        post
    })   
}

//Get post by category
exports.getPostByCategory = async (req, res) => {
    const catName = req.query.catName;
    let posts;
    if(!catName) {
        posts = await Post.find();
        res.status(200).json({
            success: true,
            posts
        })
    }else {
        posts = await Post.find({ categories: {
            $in : [catName]
        }})
    }
    res.status(200).json({
        success: true,
        posts
    })   
}

// Delete a post
exports.deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if(!post){
        res.status(404).json({ success: false, message: "Cannot find any post by id"})
    }
    await post.remove()
    res.status(200).json({ success: true })
}

//Update post with body that contains title && description
exports.updatePost = async (req,res) => {
    let post = await Post.findById(req.params.id)
    if(!post){
        res.status(404).json({ success: false, message: "Cannot find any post by id"})
    }
    post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(200).json({
        success: true,
        post
    })  
} 