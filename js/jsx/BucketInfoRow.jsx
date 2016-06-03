import React from 'react';

export default class BucketInfoRow extends React.Component {
   constructor(props){
        super(props);
        this.state = {fileObject: this.props.file,
                      bucketName: this.props.bucketName};
   }
   onDeleteClickFunction(){
      let searchBucket = this.state.bucketName;
      let deleteKey = this.state.fileObject.Key;
      $.ajax
      ({
          type : "GET",
          url : "/delete_bucket_element",
          dataType: 'json',
          data: {bucketName: searchBucket, Key: deleteKey},
          async: false,
          success : function( recv_data ){
               this.extractObjects(recv_data);
          }.bind(this),
          error: function(xhr, status, err) {
             console.error( status, err.toString());
          }.bind(this)
      });
   }
   render() {
        return (
            <tr>
                <td>{this.state.fileObject.Key}</td>
                <td>{this.state.fileObject.Size}</td>
                <td><button className="btn waves-effect waves-light" type="" name="">Show More</button></td>
                <td><button 
                     className="btn waves-effect waves-light"
                     type="" name=""
                     onClick={this.onDeleteClickFunction.bind(this)}>Delete</button></td>
            </tr>
        );
   }
}
