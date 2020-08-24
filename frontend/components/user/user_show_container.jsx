import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserShow from './user_show';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mSTP)(UserShow);