import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

   deleteContact = (id) => {
      const { contacts } = this.state;

      const newContacts = contacts.filter(contact => contact.id !== id );

      this.setState({
         contacts: newContacts
      });

   }

   render() {
      return (
         <Consumer>
            {/* Setting a function to get the value from the CONTEXT */}
            {value => {
               // Value is from the parameters of this function
               const { contacts } = value;
               return (
                  <React.Fragment>
                     {
                        contacts.map(contact => {
                           return (
                              <Contact 
                                 key={contact.id}
                                 contact={contact}
                                 deleteClickHandler={this.deleteContact.bind(this, contact.id)}
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