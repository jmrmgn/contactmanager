import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from '../../context';

class Contact extends Component {
   state = {
      showContactInfo: false
   };

   onShowClick = () => {
      this.setState({
         showContactInfo: !this.state.showContactInfo
      });
   };

   onDeleteClick = async (id, dispatch) => {
      try {
         await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         dispatch({ type: 'DELETE_CONTACT', payload: id });
      }
      catch(error) {
         console.log(error);
      }
   }

   render() {
      const { id, name, email, phone } = this.props.contact;
      const { showContactInfo } = this.state;

      return (
         <Consumer>
            {value => {
               const { dispatch } = value;
               return (
                  <div className="card card-body mb-3">
                     <h4>
                        {name}
                        <i className="fas fa-sort-down ml-2 down-arrow" onClick={this.onShowClick} />
                        <i className="fas fa-times delete-arrow" onClick={this.onDeleteClick.bind(this, id, dispatch)} />
                     </h4>
                     { showContactInfo ? (
                        <ul className="list-group">
                           <li className="list-group-item">Email {email}</li>
                           <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                     ) : null }
                  </div>
               )
            }}
         </Consumer>
      );
   }
}

Contact.propTypes = {
   contact: PropTypes.object.isRequired
};

export default Contact;
