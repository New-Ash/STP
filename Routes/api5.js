const express = require('express');
const { mongo } = require('mongoose');
const ObjectId = require('mongodb').ObjectID;

const router = express.Router();
const blogPostOngoing= require('../models/blogPostOngoing');




router.post('/:id', async(req, res) => {
    console.log(req.params.id)
    var cid=req.params.id;
    
    blogPostOngoing.find( { p_id : cid }  )
    .then((data)=>{
        // console.log('Data ',data);
        res.status(200).json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
        res.status(404);
    })
 
});
module.exports=router;