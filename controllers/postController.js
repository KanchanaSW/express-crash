let posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post three'}
];

//@desc   get all posts
//@route  GET /api/posts
export const getPosts = (req,res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
       return res.status(200).json(posts.slice(0, limit));
    }

    res.status(200).json(posts);
};

//@desc     get single post
//@route    /api/post/:id
export const getPost = (req,res,next) => {
    const id = parseInt(req.params.id);
    const post =posts.find((post) => post.id === id);

    if (!post) {
        const error =new Error(`A post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }
    
    res.status(200).json(post);
};


//@desc     create new post
//@route    /api/posts
export const createPosts =(req, res,next) =>{
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        const error =new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
    
};

//@desc     update single post
//@route    /api/posts/:id
export const updatePost =(req,res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error =new Error(`A post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts)

};


//@desc     delete single post
//@route    /api/posts/:id
export const deletePost =(req,res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error =new Error(`A post with id ${id} not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts)

}