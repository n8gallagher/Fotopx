import React from 'react';

class PostPhoto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // user_id - get from current user
      photoFile: null
    }
  }

  handleInput(e) {
    this.setState({title: e.currentTarget.value});
  }
  
  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[image]', this.state.photoFile);
    formData.append('photo[description]', this.state.photoFile)
    $.ajax({
      url: '/api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (res) => console.log(res.message),
      (res) => console.log(res.responseJSON)
    );
  }

  render() {
    return (
      <div>
        <h2>Post a photo</h2>
        <form>
            <label>Image Title:
              <input type="text"/>
            </label>
            <label>Image Description:
              <input type="text"/>
            </label>
            <label>Image File:
              <input type="file"/>
            </label>
            <input type="submit" value="Post Photo"/>
        </form>
      </div>
    )
  }
}


export default PostPhoto;