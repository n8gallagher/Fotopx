import { $CombinedState } from 'redux';
import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
})

export const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
})

export const fetchPhotos = () => dispatch => {
    APIUtil.fetchPhotos()
        .then((photos) => {
            dispatch(receivePhotos(photos))
        })
        // .catch(errors => {
        //     dispatch(receivePhotoErrors(errors))
        // })
}

export const fetchPhoto = () => dispatch => {
    APIUtil.fetchPhoto()
        .then((photo) => {
            dispatch(receivePhoto(photo))
        })
}

