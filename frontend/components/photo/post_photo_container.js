import React from 'react';
import {fetchPhotos} from '../../actions/photo_actions';
import {connect} from 'react-redux';
import PostPhoto from './post_photo';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})


const mapDispatchToProps = (dispatch) => {
  return {fetchPhotos: () => (
    dispatch(fetchPhotos())
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPhoto);