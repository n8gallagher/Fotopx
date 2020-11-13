import React from 'react';


class UserEdit extends React.Component { 

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.user_id)
    }



    render() {
        let owner = this.props.owner;
        if (!owner) {
            return null
        } else {
            debugger
            if(owner.id === this.props.currentUser.id) {
                return (
                    <div>
                      <form action="">
                        <label>Username
                          <input type="text"/>
                        </label>
                        <label>Profile Image</label>
                        <input type="file"/>
                        <label>Cover Image</label>
                        <input type="file"/>
                        <input type="submit" value="Update User Info"/>
                      </form>
                    </div>
                )
            } else {
                return (
                  <div>
                    <h1>An error occurred, go back</h1>
                  </div>
                    
                )
            }
        }
        
    }
};

export default UserEdit;