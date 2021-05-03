import React from "react";
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.props.on_progress_update(0);//mise à jour de la valeur de progression, partagée dans toute l'application
    }

    render() {
        return (<section>
            <h1>Home</h1>
        </section>);
    }
}