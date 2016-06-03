'use strict'
const AWS = require('aws-sdk'); 
let express = require('express');
let router = express.Router();
let path = require('path');

AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
});

let s3 = new AWS.S3();

router.get('/', (req, res) =>{
   res.sendFile(path.join(__dirname, '../html_templates', 'template.html'));
});

router.get('/get_bucket_list', (req,res) =>{
    s3.listBuckets(function(err, data) {
        if (err) { 
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

module.exports = router;
