import React from 'react'


class PhotosIndex extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {photos: []}
  }

  componentDidMount () {
    console.log(this.props);
    this.props.fetchPhotos()
      // .then((photos) => {
      //   this.setState(Object.values(photos))
      // })
  }


  render () {
    let photos = this.props.photos ? this.props.photos : [];
    return (
      <div className="photos-index-container">
        <div className="index-top-div"></div>
        <div className="flex-photos-index">{photos.map(
          (photo) => {
            return (
              
                <div className="photo-index-item-box relative-box" key={photo.id}>
                  <div className="bottom-gradient-show" id="bot-grad"></div>             
                  <div className="photo-index-item-info">
                    <h4>title: {photo.title}</h4>
                    <svg className="heart-icon" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px" id="icon-heart">
                        <path class="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
                      C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"></path>
                    </svg>
                  </div>
                  <img className="index-item-image" src={photo.photoUrl} alt=""/>
                </div>
              
            )
          }
        ).reverse()}</div>
      </div>
    )
  }
}


export default PhotosIndex;