import React from 'react';
import BucketList from './BucketList.jsx';
import BucketInfo from './BucketInfo.jsx';

export default class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {curChoice : 0,
                    curBucket: ''};
   }
   switchChoice(newChoice){
      this.setState({curChoice : newChoice});
   }
   setBucketName(name){
      this.setState({curBucket : name});
   }
   render() {
      let content;
      if(this.state.curChoice === 0){
         content = ( <div><h3>Amazon Bucket Lookup</h3>
                     <BucketList switchFunc={this.switchChoice.bind(this)}
                     setBucket={this.setBucketName.bind(this)}/></div>);
      }
      else{
         content = ( <div><h3>Display information for {this.state.curBucket}</h3>
                     <BucketInfo switchFunc={this.switchChoice.bind(this)}
                                 curBucket={this.state.curBucket} 
                                 pollInterval={15000}/></div>);
      }
      return (
         <div className="container center-align">

            {content}
         </div>
      );
   }
}
