import React from "react";
import './Page.css';
import { withRouter } from "react-router-dom";


class Page extends React.Component {
    constructor(props) {
        super(props);

        this.props.on_progress_update(50);//mise à jour de la valeur de progression, partagée dans toute l'application

        let { pagename } = this.props.match.params;//récupération du nom de la page en fonction de la variable de route (nommée pagename)

        this.state = {pagename};//affectation au state
    }

    render() {
        return (<section>
            <h1>Page : {this.state.pagename}</h1>
        </section>);
    }
}

export default withRouter(Page);