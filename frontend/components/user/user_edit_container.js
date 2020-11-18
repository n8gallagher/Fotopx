import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserEdit from './user_edit';
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return ({

        currentUser: state.entities.users[state.session.id],
        owner: state.entities.users[ownProps.match.params.user_id]
    })
};

const mDTP = (dispatch) => ({
    fetchUser: (userId) => (dispatch(fetchUser(userId)))
})

export default connect(mSTP, mDTP)(UserEdit);