import React from 'react';
import BucketRow from './BucketRow.jsx';
import Table from './Table.jsx';

export default class BucketList extends React.Component {
   constructor(props){
        super(props);
        this.state = {buckets : [],
                      nextStateValue: 1};
   }
   componentDidMount(){
       this.loadBucketsFromServer();
   }
   loadBucketsFromServer(){
        $.ajax
        ({
            type : "GET",
            url : "/get_bucket_list",
            dataType: 'json',
            success : function( recv_data ){
                this.setState({buckets: recv_data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error( status, err.toString());
            }.bind(this)
        });
   }
   render(){
        let content = (<h3>No data to display</h3>);
        if(this.state.buckets.length !== 0){
            let bucketRows = this.state.buckets.map((name, i)=>{
               return(<BucketRow bucketName={name} key={i}
                                 switchFunc={this.props.switchFunc}
                                 setBucket={this.props.setBucket}
                                 nextStateValue={this.state.nextStateValue}/>);
            });
            let tableHeadersArray = ["Bucket Name", "Delete Bucket"];
            content = (<Table headerArray={tableHeadersArray} 
                             tableBody={bucketRows}/>);
        }
        return(
            <div>
                {content}
            </div>
        );
   }
}
