import React from 'react';
import BucketExplorer from './BucketExplorer.jsx';

export default class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {curService : 0};
   }
   renderLandingPage(){
      let page = (
         <div className="container">
            <div className="row">
               <div className="valign-wrapper valign">
                  <div className="col s12 m6 offset-m3">
                     <div className="card blue-grey darken-1">
                        <div className="card-content white-text valign center-block">
                           <div class="row">
                              <h2 className="card-title center-align">Amazon Bucket Explorer</h2>
                              <p className="center-align">Click to explore the basic operations of a Amazon's S3 Bucket.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="valign-wrapper valign">
                  <div className="col s12 m6 offset-m3">
                     <div className="card blue-grey darken-1">
                        <div className="card-content white-text valign center-block">
                           <div class="row">
                              <h2 className="card-title center-align">Amazon SQS Explorer</h2>
                              <p className="center-align">Click explore the basic operations of a Amazon SQS.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
      return page;
   }
   getCurDisplay(){
      if(this.state.curService === 0){
         return this.renderLandingPage();
      }
   }
   render() {
      let curDisplay = this.getCurDisplay();
      return (
         <div>
            {curDisplay}
         </div>
      );
   }
}
