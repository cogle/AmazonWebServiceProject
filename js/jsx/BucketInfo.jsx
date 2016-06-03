import React from 'react';

export default class BucketInfo extends React.Component {
   constructor(props){
      super(props)
      this.state = {nextStateValue : 0};
   }
   onClickFunction(){
       this.props.switchFunc(this.state.nextStateValue);
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
