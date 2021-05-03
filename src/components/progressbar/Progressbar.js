import React from "react";
import "./Progressbar.css";

export default class Progressbar extends React.Component{
    render(){
        return (
        <div className="Progressbar">
            <div style={{width:this.props.progress+"%"}}></div>
        </div>
        );
    }
}