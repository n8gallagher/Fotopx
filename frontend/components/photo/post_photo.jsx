import React from 'react';

class PostPhoto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: props.currentUser.id,
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
  }

  update(field){
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }
  
  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  showSpinner() {
    var spinner = document.getElementById("upload-spinner");
    spinner.className = spinner.className.replace(/\bspinner-hide\b/g, "");
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[image]', this.state.photoFile);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[user_id]', this.state.user_id);
    $.ajax({
      url: '/api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (res) => { debugger
        console.log(res.message)},
        this.showSpinner(),
        setTimeout( () => {
          this.props.history.push('/photos')
        }, 1000),
      (res) => console.log(res.responseJSON)
    );
  }

  render() {
    return (
      <div className="post-photo-box">
        <h2 className="post-heading">Post a photo</h2>
        <form className="post-photo-form">
            <label>Image Title:</label>
              <input type="text"
                value={this.state.title}
                onChange={this.update("title")}
              />
            
            <label>Image Description:</label>
              <textarea
                value={this.state.description}
                onChange={this.update("description")}
              />
            
            <label>Image File:</label>
              <input type="file"
                onChange={this.handleFile}
              />
            <input className="post-photo-submit" type="submit" value="Upload Photo" onClick={this.handleSubmit}/>
        </form>
            <div id="upload-spinner" className="loader spinner-hide"></div>
      </div>
    )
  }
}


export default PostPhoto;