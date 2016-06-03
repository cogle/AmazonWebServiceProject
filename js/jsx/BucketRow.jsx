import React from 'react';

export default class BucketRow extends React.Component {
   constructor(props){
        super(props);
   }
   onClickFunction(){
        this.props.switchFunc(this.props.stateValue);
        this.props.setBucket(this.props.bucketName);
   }
   render() {
        return (
            <tr>
                <td onClick={this.onClickFunction.bind(this)}>{this.props.bucketName}</td>
                <td><button className="btn waves-effect waves-light" type="" name="">Delete</button></td>
            </tr>
        );
   }
}
