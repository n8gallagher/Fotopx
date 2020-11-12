import * as UserAPI from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = data => {
    return {
        type: RECEIVE_USER,
        data
    } 
};

export const fetchUser = userId => dispatch => {
    return UserAPI.fetchUser(userId)
        .then(data => dispatch(receiveUser(data)))
};

