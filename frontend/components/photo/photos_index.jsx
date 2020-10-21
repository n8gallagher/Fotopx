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
              
                <div className="photo-index-item-box" key={photo.id}>
                  <div className="photo-index-item-info">
                    <h4>title: {photo.title}</h4>
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