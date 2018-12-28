import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: ''
   };   

   onSubmit = (dispatch, e) => {
      e.preventDefault();
      
      const { name, email, phone } = this.state;

      const newContact = {
         id: uuid(),
         name,
         email,
         phone,
      };

      dispatch({ type: 'ADD_CONTACT', payload: newContact });

      // Clear fields
      this.setState({
         name: '',
         email: '',
         phone: ''
      });
   };

   onContactChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   render() {
      const { name, email, phone } = this.state;

      return (
         <Consumer>
            {value => {
               const { dispatch } = value;
               return (
                  <div className="card mb-3">
                     <div className="card-header">
                        <h3 className="card-title">Add Contact</h3>
                     </div>
                     <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                           <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input 
                                 type="text"
                                 name="name"
                                 className="form-control form-control-lg"
                                 placeholder="Enter name..."
                                 value={name}
                                 onChange={this.onContactChange}
                              />
                           </div>
                           <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input 
                                 type="email"
                                 name="email"
                                 className="form-control form-control-lg"
                                 placeholder="Enter email..."
                                 value={email}
                                 onChange={this.onContactChange}
                              />
                           </div>
                           <div className="form-group">
                              <label htmlFor="phone">Phone</label>
                              <input 
                                 type="text"
                                 name="phone"
                                 className="form-control form-control-lg"
                                 placeholder="Enter phone..."
                                 value={phone}
                                 onChange={this.onContactChange}
                              />
                           </div>
                           <input 
                              type="submit"
                              value="Add Contact"
                              className="btn btn-primary btn-block"
                           />
                        </form>
                     </div>
                  </div>
               )
            }}
         </Consumer>
      );
   }
}

export default AddContact;