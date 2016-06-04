import React from 'react';
import BucketExplorer from './BucketExplorer.jsx';

class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {curService : 0};
   }
   renderLandingPage(){
      page = (
         <div class="row">
            <div class="col s12 m6 l6">
               <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                     <span class="card-title center-align">Bucket Explorer</span>
                     <p>Explorer the basic operations of a Amazon's S3 Bucket.</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   render() {
      return (
         <div>

         </div>
      );
   }
}
