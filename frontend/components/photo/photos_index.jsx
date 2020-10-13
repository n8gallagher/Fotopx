import React from 'react'


class PhotosIndex extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {photos: []}
  }

  componentDidMount () {
    console.log(this.props);
    debugger
    this.props.fetchPhotos()
      // .then((photos) => {
      //   this.setState(Object.values(photos))
      // })
  }


  render () {
    let photos = this.props.photos ? this.props.photos : [];
    return (
      <div>
        <h1>index of photos</h1>
        
        <ul>{photos.map(
          (photo) => {
            return (
              <li>
                <h1>title: {photo.title}</h1>
                <img src={photo.photoUrl} alt=""/>
              </li> 
            )
          }
        )}</ul>
      </div>
    )
  }
}


export default PhotosIndex;