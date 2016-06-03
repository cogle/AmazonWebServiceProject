'use strict'
const AWS = require('aws-sdk');
let express = require('express');
let router = express.Router();
let path = require('path');

AWS.config.update({
   accessKeyId: process.env.accessKeyId,
   secretAccessKey: process.env.secretKey
});

let s3 = new AWS.S3();


let getFiles = (params, fileArray, res) =>{
   s3.listObjectsV2(params,(err, data)=>{
      if(err){throw err;}
      let curData = data.Contents;
      fileArray.push(curData);
      if(data.IsTruncated){
         getFiles({Bucket: params.bucketName, Marker: data.NextMarker}, fileArray);
      }
      else{
         res.json(fileArray);
      }
   });
};

router.get('/', (req, res) =>{
   res.sendFile(path.join(__dirname, '../html_templates', 'template.html'));
});

router.get('/get_bucket_list', (req,res) =>{
   s3.listBuckets(function(err, data) {
      if (err) {
         console.log("Error in get_bucket_list");
         console.log("Error:", err);
         res.status(500).json({ error: 'Unable to get Bucket List' });
      }
      else{
         let bucketNames = [];
         for (var index in data.Buckets) {
            bucketNames.push(data.Buckets[index].Name);
         }
         res.json(bucketNames);
      }
   });
});

router.get('/get_bucket_info', (req,res) =>{
   let bucketName = req.query.bucketName;
   let fileArray = [];
   try{
      getFiles({Bucket: bucketName}, fileArray, res);
   }catch(err){
      console.log("Error in get_bucket_info");
      console.log("Error:", err);
      res.status(500).json({ error: 'Unable to get Bucket Information' });
   }
});

router.get('/delete_bucket_element', (req,res) =>{
   let bucketName = req.query.bucketName;
   let keyToDelete = req.query.Key;
   let params = { Bucket: bucketName, Key: keyToDelete};
   s3.deleteObject(params, function(err, data) {
      if (err){
         console.log(err, err.stack);
         res.status(500).json({error: "Unable to delete a particular Key"});
      } 
      else{     
         res.status(200).json({});
      }
   });
});


module.exports = router;
