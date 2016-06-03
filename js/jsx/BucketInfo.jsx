import React from 'react';

export default class BucketInfo extends React.Component {
   constructor(props){
      super(props)
      this.state = {nextStateValue : 0,
                    bucketData : []};
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
          success : function( recv_data ){
            this.setState({bucketData: recv_data});
          }.bind(this),
          error: function(xhr, status, err) {
             console.error( status, err.toString());
          }.bind(this)
      });
   }
   render() {
      return (
         <div>
            <div>
               <button className="btn waves-effect waves-light"
                       onClick={this.onClickFunction.bind(this)}>
                  Back
               </button>
            </div>
         </div>

      );
   }
}
