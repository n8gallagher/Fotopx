import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const photos = (prevState = {}, action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_PHOTO:
            let newState = Object.assign({}, prevState)
            newState[photo] = photo
            return newState;
        case RECEIVE_USER:
            return Object.assign({}, prevState, action.data.photo)
        default:
            return prevState;
    }
}

export default photos;