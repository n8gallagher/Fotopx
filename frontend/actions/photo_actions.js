import { $CombinedState } from 'redux';
import * as APIUtil from '../util/photo_api_util';
import { CLEAR_ERRORS } from './session_actions';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS'

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
})

const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
})

const clear = () => ({
    type: CLEAR_PHOTOS
})

export const clearPhotos = () => dispatch => {
    dispatch(clear())
}

export const fetchPhotos = () => dispatch => {
    APIUtil.fetchPhotos()
        .then((photos) => {
            dispatch(receivePhotos(photos))
        })
        // .catch(errors => {
        //     dispatch(receivePhotoErrors(errors))
        // })
}

export const fetchPhoto = (photoId) => dispatch => {
    APIUtil.fetchPhoto(photoId)
        .then((photo) => {
            dispatch(receivePhoto(photo))
        })
}

