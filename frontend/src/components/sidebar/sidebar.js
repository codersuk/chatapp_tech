import React from 'react';
class Sidebar extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
    }
    render(){
        return (
            <>
            <h2>Sidebar</h2>
            <p>{this.props.pr}</p>
            </>
        )
    }
}

export default Sidebar;