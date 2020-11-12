import React from 'react'


class PhotoShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    

    this.props.fetchPhoto(this.props.match.params.photo_id) 
    

    
    // this.props.fetchUser(this.state.photosphoto.user_id)
  }
  
  
  render () {
    let defaultPhoto = {description: "default", photoUrl: "https://miro.medium.com/max/700/0*H3jZONKqRuAAeHnG.jpg", owner:  {username: "loading"} }
    let photo = this.props.photo ? this.props.photo : defaultPhoto;
    let owner = this.props.photo.owner ? this.props.photo.owner : defaultPhoto.owner;
    if (Object.values(this.props.photo).length === 0) return "";
    if (owner.id === this.props.currentUser.id ) {
      return (
        <div>
          <div className="index-top-div"></div>
          <div className="photo-backdrop relative-box">
            <img className="photo-show-image" src={photo.photoUrl} alt=""/>
          </div>
          <div className="photo-show-main">
            <div className="photo-show-left">
              <div className="photo-show-left-icons">
                <svg className="heart-icon-photo-show" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px" id="icon-heart">
                            <path class="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
                          C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"></path>
                </svg>
                <img src="https://fotopx-dev.s3-us-west-1.amazonaws.com/trash-icon-01.png" alt="trash-icon" className="trash-icon"/>
              </div>
              <h3 id="username">{owner.username}</h3>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
            <div className="photo-show-right">
              
            </div>
          </div>
        </div>
      )
    } else {

      return (
        <div>
          <div className="index-top-div"></div>
          <div className="photo-backdrop relative-box">
            <img className="photo-show-image" src={photo.photoUrl} alt=""/>
          </div>
          <div className="photo-show-main">
            <div className="photo-show-left">
              <div className="photo-show-left-icons">
                <svg className="heart-icon-photo-show" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px" id="icon-heart">
                            <path class="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
                          C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"></path>
                </svg>
              </div>
              <h3 id="username">{owner.username}</h3>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
            <div className="photo-show-right">
              
            </div>
          </div>
        </div>
      )
    }
  }
}


export default PhotoShow;