import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';
import more from '../assets/images/more.svg';
import like from '../assets/images/like.svg';
import comment from '../assets/images/comment.svg';
import send from '../assets/images/send.svg';

class Feed extends Component {
  state = {
    feed: [],
  };

  async componentDidMount() {
    const response = await api.get('post');
    this.setState({ feed: response.data });
    
  }
  render() {
    return (
     <section id="post-list">
       { this.state.feed.map(post => (
         <article>
         <header>
           <div className="user-info">
             <span>{post.author}</span>
             <span className="place">{post.place}</span>
           </div>
           <img src={more} alt="Mais" />
         </header>
         <img src={`http://localhost:3333/files/${post.image}`} alt="" />
         <footer>
           <div className="actions">
           <img src={like} alt="Curtir" />
           <img src={comment} alt="Comentar" />
           <img src={send} alt="Enviar" />
           </div>
           <strong>{post.likes} curtidas</strong>
           <p>{post.description}
             <span>{post.hashtags}</span>
           </p>
         </footer>
        </article>
       ))}
     </section>
    );
  }
}

export default Feed;