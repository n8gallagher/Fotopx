import { RECEIVE_PHOTOS, CLEAR_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const photos = (prevState = {}, action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            let newState = Object.assign({}, prevState)
            action.photos.forEach(photo => {
                newState[photo.id] = photo
            });
            return newState;
        case RECEIVE_PHOTO:
            return Object.assign({}, prevState, action.photo.photo)
            
        case CLEAR_PHOTOS:
            return {};
        // case RECEIVE_USER_PHOTOS:
        //     return Object.assign({}, prevState, action.data.photos)
        default:
            return prevState;
    }
}

export default photos;