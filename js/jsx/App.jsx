import React from 'react';
import BucketList from './BucketList.jsx';

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
         content = (<BucketList switchFunc={this.switchChoice.bind(this)} 
                     setBucket={this.setBucketName.bind(this)}/>);
      }
      else{
         content = (<h1>{this.state.curBucket}</h1>);  
      }
      return (
         <div className="container center-align">
            <h2>Amazon Bucket Lookup</h2>
            {content}
         </div>
      );
   }
}
