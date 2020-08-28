import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const photos = (prevState = {}, action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, prevState, action.data.photos);
        case RECEIVE_USER:
            return Object.assign({}, prevState, action.data.photos)
        default:
            return prevState;
    }
}

export default photos;