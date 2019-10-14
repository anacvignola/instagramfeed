import React, { Component } from 'react';

import './Feed.css';
import more from '../assets/images/more.svg';
import like from '../assets/images/like.svg';
import comment from '../assets/images/comment.svg';
import send from '../assets/images/send.svg';

class Feed extends Component {
  render() {
    return (
     <section id="post-list">
       <header>
         <div className="user-info">
           <span>Diego Fernandes</span>
           <span className="place">Rio do Sul</span>
         </div>
         <img src={more} alt="Mais" />
       </header>
     </section>
    );
  }
}

export default Feed;