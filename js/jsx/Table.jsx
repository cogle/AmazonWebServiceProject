import React from 'react';

export default class Table extends React.Component {
    constructor(props){
        super(props);
    }  
    tableHeaderGenerator(){
        let tableHeaderArray = this.props.headerArray.map((ele, i) => {
            return (<th key={i}>{ele}</th>);
        });    
        return tableHeaderArray;
    }
    render() {
        let tableHeaders = this.tableHeaderGenerator();
        let tableBody = this.props.tableBody;
        return (
            <div>
                <table className="centered bordered">
                    <thead>
                        <tr>
                            {tableHeaders}
                        </tr>
                    </thead>
                    <tbody>
                            {tableBody}
                    </tbody>
                </table>
            </div>
        );
   }
}
