import React from 'react';
import Table from './Table.jsx';
import BucketInfoRow from './BucketInfoRow.jsx';

export default class BucketInfo extends React.Component {
   constructor(props){
      super(props)
      this.state = {nextStateValue : 0,
                    bucketObjects : [],
                    curBucket: this.props.curBucket};
   }
   onClickFunction(){
       this.props.switchFunc(this.state.nextStateValue);
   }
   componentDidMount(){
      this.loadDataFromServer();
      this.interval = setInterval(this.loadDataFromServer.bind(this), this.props.pollInterval);
   }
   componentWillUnmount() {
      clearInterval(this.interval)
   }
   loadDataFromServer(){
      let searchBucket = this.state.curBucket;
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
         return(<BucketInfoRow file={ele} 
                               key={i}
                               bucketName={this.state.curBucket}/>);   
      });
      
      return (<Table headerArray={headerArray} 
                     tableBody={bodyContent}/>);
   }
   render() {
      console.log("HERE");
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
