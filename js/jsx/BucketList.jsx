import React from 'react';
import BucketRow from './BucketRow.jsx';


export default class BucketList extends React.Component {
   constructor(props){
        super(props);
        this.state = {buckets : [],
                      stateValue: 1};
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
                       stateValue={this.state.stateValue}/>);
            });
            content = (
                <table>
                    <thead>
                        <tr>
                            <th data-field="id">Bucket Name</th>
                            <th data-field="Delete">Delete Bucket</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bucketRows}
                    </tbody>
                </table>
                );
        }
        return(
            <div>
                {content}
            </div>
        );
   }
}