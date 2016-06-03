import React from 'react';

export default class BucketInfoRow extends React.Component {
   constructor(props){
        super(props);
        this.state = {fileObject: this.props.file};
   }
   onClickFunction(){
       
   }
   render() {
        return (
            <tr>
                <td>{this.state.fileObject.Key}</td>
                <td>{this.state.fileObject.Size}</td>
                <td><button className="btn waves-effect waves-light" type="" name="">Show More</button></td>
                <td><button className="btn waves-effect waves-light" type="" name="">Delete</button></td>
            </tr>
        );
   }
}
