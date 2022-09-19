
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import Review from './Rewiew'
 class App extends Component {
  render() {
    return (
      <>
      <main>
        <section className="container">
          <div className="title">
               <h2>Our Rewiews</h2>
               <div className="underline"></div>
             </div>
          <Review />
          </section>
      </main>
      
      </>
    )
  }
}


export default App;
