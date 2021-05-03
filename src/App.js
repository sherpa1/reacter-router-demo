import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Home from './components/home/Home';
import Page from './components/page/Page';
import Progressbar from './components/progressbar/Progressbar';
import Userinfos from './components/userinfos/Userinfos';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {user : {progress:0, firstname:"John", lastname:"Doe"}};//initialisation d'un objet dont les valeurs seront propagées dans toute l'application


  }

  on_progress_update = (progress)=>{
    const user = this.state.user;
    user.progress = progress;

    this.setState({user:user});//mise à jour de la valeur progress de l'objet
  }

  render() {

    return (
      <Router>
        <div>
          <main>
            <div className="App">
              
              <header>
                
                <Link to="/">
                  Home
                </Link>
                
                <Link to="/pages/page-1">
                  Page 1
                </Link>

                <Link to="/pages/page-2">
                  Page 2
                </Link>

                <Userinfos user={this.state.user} />

              </header>

              <Progressbar progress={this.state.user.progress} />

              <Switch>
                
                <Route path="/pages/:pagename">
                  <Page user={this.state.user} on_progress_update={this.on_progress_update}/>
                </Route>

                <Route path="/">
                  <Home user={this.state.user} on_progress_update={this.on_progress_update}/>
                </Route>
              
              </Switch>
              
            </div>
            <footer>
              Alexandre Leroux (alex@sherpa.one) - Université de Lorraine - Institut des Sciences du Digital, Management & Cognition - IUT Nancy Charlemagne
            </footer>
          </main>
        </div>
      </Router>
    );
  }

}

