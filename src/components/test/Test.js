import React, { Component } from 'react';

class Test extends Component {
   state = {
      title: '',
      completed: ''
   };
   
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then(response => response.json())
         .then(data => this.setState({
            title: data.title,
            completed: data.completed
         }));
   }

   // componentWillMount() {
   //    console.log('component will mount...')
   // }

   // componentDidUpdate() {
   //    console.log('component did Updte');
   // }

   // componentWillReceiveProps(nextProps, nextState) {
   //    console.log('componentWillReceiveProps');
   // }

   // static getDerivedStateFromProps(nextProps, prevState) {
   //    return null;
   // }

   // getSnapshotBeforeUpdate(prevProps, prevState) {
   //    console.log('getSnapshotBeforeUpdate');
   // }

   render() {
      const { title, completed } = this.state;
      return(
         <div>
            <h2>{title}</h2>
            <p>{completed}</p>
         </div>
      );
   }
}

export default Test;