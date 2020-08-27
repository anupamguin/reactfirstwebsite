import React from 'react';
import {NavLink, Switch,Route} from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Service from './Service.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
const App=()=>
{
    return(<>

   <nav className="navbar navbar-expand-md navbar-light bg-light">
              <div className="container">        
                  <a href="https://www.google.com" className="navbar-brand">Anupam Guin</a>
                  <button className="navbar-toggler ml-auto" data-target="#anu" data-toggle="collapse">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="anu">
                      <ul className="navbar-nav  ml-auto text-center">
                          <li className="nav-item"><NavLink  className="nav-link" activeClassName="menu_active" exact to="/">Home</NavLink></li>
                          <li className="nav-item"><NavLink  className="nav-link" activeClassName="menu_active" exact to="/About">About</NavLink></li>
                          <li className="nav-item"><NavLink  className="nav-link" activeClassName="menu_active" exact to="/Service">Service</NavLink></li>
                          <li className="nav-item"><NavLink  className="nav-link" activeClassName="menu_active" exact to="/Contact">Contact</NavLink></li>
                          
                      </ul>
                  </div>
              </div>
            </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Service" component={Service} />
                <Route exact path="/Contact" component={Contact} />
                
            </Switch>
    </>);
}
export default App;