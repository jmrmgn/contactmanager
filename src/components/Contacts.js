import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
   state = {
      contacts: [
         {
            id: 1,
            name: 'John Doe',
            email: 'jdoe@gmail.com',
            phone: '555-5555-555'
         },
         {
            id: 2,
            name: 'Karen Williams',
            email: 'karen@gmail.com',
            phone: '123-456-555'
         },
         {
            id: 3,
            name: 'Henry Johnny',
            email: 'henry@gmail.com',
            phone: '000-123-123'
         }
      ]
   };

   render() {
      const { contacts } = this.state;

      return (
         <React.Fragment>
            {
               contacts.map(contact => {
                  return <Contact 
                     key={contact.id}
                     contact={contact}
                  />
               })
            }
         </React.Fragment>
      );
   };
}

export default Contacts;