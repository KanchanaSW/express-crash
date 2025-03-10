import express from 'express';
import {getPosts,getPost,createPosts,updatePost,deletePost} from '../controllers/postController.js'
const router = express.Router();


//get all posts
router.get('/', getPosts );

//get single post
router.get('/:id', getPost );

//create new post
router.post('/', createPosts);

//update post
router.put('/:id' , updatePost );

//delete post
router.delete('/:id' , deletePost );

export default router;