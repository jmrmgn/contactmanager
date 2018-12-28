import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/Contacts/Contacts';
import AddContact from './components/Contacts/AddContact';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
   render() {
      return (
         <Provider>
            <div className="App">
               <Header branding="Contact Manager" />
               <div className="container">
                  <AddContact />
                  <Contacts />
               </div>
            </div>
         </Provider>
      );
   }
}

export default App;
