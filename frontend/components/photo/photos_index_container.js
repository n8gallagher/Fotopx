import React from 'react';
import {fetchPhotos} from '../../actions/photo_actions';
import {connect} from 'react-redux';
import PhotosIndex from './photos_index';

const mapStateToProps = (state) => ({
    photos: Object.values(state.entities.photos)
})


const mapDispatchToProps = (dispatch) => {
  return {fetchPhotos: () => (
    dispatch(fetchPhotos())
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);

