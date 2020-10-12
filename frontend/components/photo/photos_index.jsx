import React from 'react'


class PhotosIndex extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {photos: []}
  }

  componentDidMount () {
    console.log(this.props);
    this.props.fetchPhotos()
      .then((photos) => {
        this.setState(Object.values(photos))
      })
  }


  render () {
    let photos = this.state.photos ? this.state.photos : [];
    return (
      <div>
        <h1>index of photos</h1>
        
        <ul>{photos.map(
          (photo) => {
            <li>
              <h1>{photo.title}</h1>
              <img src={photo.photoUrl} alt=""/>
            </li> 
          }
        )}</ul>
      </div>
    )
  }
}


export default PhotosIndex;