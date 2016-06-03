import React from 'react';
import Table from './Table.jsx';
import BucketInfoRow from './BucketInfoRow.jsx';

export default class BucketInfo extends React.Component {
   constructor(props){
      super(props)
      this.state = {nextStateValue : 0,
                    bucketObjects : []};
   }
   onClickFunction(){
       this.props.switchFunc(this.state.nextStateValue);
   }
   componentDidMount(){
       this.loadDataFromServer();
   }
   loadDataFromServer(){
      let searchBucket = this.props.curBucket;
      $.ajax
      ({
          type : "GET",
          url : "/get_bucket_info",
          dataType: 'json',
          data: {bucketName: searchBucket},
          async: false,
          success : function( recv_data ){
               this.extractObjects(recv_data);
          }.bind(this),
          error: function(xhr, status, err) {
             console.error( status, err.toString());
          }.bind(this)
      });
   }
   extractObjects(list){
      let extractedList = [];
      list.forEach((arr) =>{
         arr.forEach((ele) =>{
            extractedList.push(ele);
         })
      })
      this.setState({bucketObjects : extractedList});
   }
   createTable(){
      let headerArray = ["File Name", "Size", "Show More", "Delete"];
      let bodyContent = this.state.bucketObjects.map((ele, i) => {
         return(<BucketInfoRow file={ele} key={i}/>);   
      });
      
      return (<Table headerArray={headerArray} 
                     tableBody={bodyContent}/>);
   }
   render() {
      let table = this.createTable(); 
      return (
         <div>
            <div>
               <button className="btn waves-effect waves-light"
                       onClick={this.onClickFunction.bind(this)}>
                  Back
               </button>
               {table}
            </div>
         </div>

      );
   }
}
