import React, { Component } from 'react';

class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: ''
   };

   render() {
      const { name, email, phone } = this.state;
      return (
         <div className="card mb-3">
            <div className="card-header">
               <h3 className="card-title">Add Contact</h3>
            </div>
            <div className="card-body">
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                     type="text"
                     name="name"
                     className="form-control form-control-lg"
                     placeholder="Enter name..."
                     defaultValue={name}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                     type="email"
                     name="email"
                     className="form-control form-control-lg"
                     placeholder="Enter email..."
                     defaultValue={email}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                     type="text"
                     name="phone"
                     className="form-control form-control-lg"
                     placeholder="Enter phone..."
                     defaultValue={phone}
                  />
               </div>
               <input 
                  type="submit"
                  value="Add Contact"
                  className="btn btn-primary btn-block"
               />
            </div>
         </div>
      );
   }
}

export default AddContact;