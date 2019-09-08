import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let styles = {
  textDecoration: 'none',
  color: 'black'
};

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
    <Link to='/' style={styles}>Home</Link>
    </div>
  </div>
);

export default SavedList;
