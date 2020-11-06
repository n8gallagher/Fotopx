import {connect} from 'react-redux'
import PhotoShow from './photo_show'
import { fetchPhoto } from '../../actions/photo_actions'
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state) => {
  return {
    photo: state.entities.photos,
    user: {}
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => (dispatch(fetchUser(userId))),
    fetchPhoto: (photoId) => (dispatch(fetchPhoto(photoId)))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);