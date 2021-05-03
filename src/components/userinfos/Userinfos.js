import React from "react";
import './Userinfos.css';

export default class Userinfos extends React.Component{
    render(){
        return(
            <p>{this.props.user.firstname+" "+this.props.user.lastname} est connecté</p>
        );
    }
}