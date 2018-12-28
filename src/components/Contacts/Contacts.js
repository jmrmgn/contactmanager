import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

   render() {
      return (
         <Consumer>
            {/* Setting a function to get the value from the CONTEXT */}
            {value => {
               // Value is from the parameters of this function
               const { contacts } = value;
               return (
                  <React.Fragment>
                     <h1 className="display mb-2">
                        <span className="text-danger">Contact List</span>
                     </h1>
                     {
                        contacts.map(contact => {
                           return (
                              <Contact 
                                 key={contact.id}
                                 contact={contact}
                              />
                           );
                        })
                     }
                  </React.Fragment>
               )
            }}
         </Consumer>
      );
   };
}

export default Contacts;