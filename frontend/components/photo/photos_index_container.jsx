import React from 'react';
import { connect } from 'react-redux';

const Photos = ({ review, author }) => {
    const { rating, body } = review;
    return (
      <div>
        <ul>
          <li>Rating: {rating}</li>
          <li>{body} - by {author.username}</li>
  
        </ul>
      </div>
    );
  };