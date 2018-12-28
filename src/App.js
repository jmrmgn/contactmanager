import React, { Component } from 'react';
// Browser = Parent, Route = route, Switch = Error page
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

// Test Component
import Test from './components/test/Test';

// Not Found Component
import NotFound from './components/pages/NotFound';

// Provider for Context
import { Provider } from './context';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
   render() {
      return (
         <Provider>
            <Router basename={process.env.PUBLIC_URL}>
               <div className="App">
                  <Header branding="Contact Manager" />
                  <div className="container">
                     <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact/add" component={AddContact} />
                        <Route exact path="/contact/edit/:id" component={EditContact} />
                        <Route exact path="/test" component={Test} />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </Provider>
      );
   }
}

export default App;
