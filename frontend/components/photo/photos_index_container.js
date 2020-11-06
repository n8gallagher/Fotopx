import React from 'react';
import {fetchPhotos, fetchPhoto, clearPhotos} from '../../actions/photo_actions';
import {connect} from 'react-redux';
import PhotosIndex from './photos_index';

const mapStateToProps = (state) => ({
    photos: Object.values(state.entities.photos),
    photo: ""
})


const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => (dispatch(fetchPhotos())),
  clearPhotos: () => (dispatch(clearPhotos()))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosIndex);

