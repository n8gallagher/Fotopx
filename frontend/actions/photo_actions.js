import { $CombinedState } from 'redux';
import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
})

export const fetchPhotos = () => dispatch => {
    debugger
    APIUtil.fetchPhotos()
        .then((photos) => {
            dispatch(receivePhotos(photos))
        })
        // .catch(errors => {
        //     dispatch(receivePhotoErrors(errors))
        // })
}

