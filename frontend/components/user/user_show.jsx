import React from 'react';
import {Link} from 'react-router-dom';


class UserShow extends React.Component { 

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.user_id)
    }



    render() {
        let owner = this.props.owner;
        console.log(owner)
        if (!owner) {
            return null
        } else {
            debugger
            if(owner.id === this.props.currentUser.id) {
                return (

                    <div className="user-show-box">
                        <img className="profile-header-image" 
                            src="https://fotopx-dev.s3-us-west-1.amazonaws.com/default-cover.png" 
                            alt="blank-background"
                        />
                        <img className="profile-picture-round-thumb" 
                            src="https://fotopx-dev.s3-us-west-1.amazonaws.com/profile-default.png"
                            alt="blank-profile-picture"
                        />
                        <div className="profile-info-box">
                            <div className="profile-info-content">
                                <h4>{owner.username}</h4>
                            </div>

                            <Link to="" className="pencil-edit-button"><img src="https://image.flaticon.com/icons/svg/158/158727.svg" alt="pencil-edit"/></Link>
                        </div>

                    </div>
                )
            } else {
                return (

                    <div className="user-show-box">
                        <img className="profile-header-image" 
                            src="https://fotopx-dev.s3-us-west-1.amazonaws.com/default-cover.png" 
                            alt="blank-background"
                        />
                        <img className="profile-picture-round-thumb" 
                            src="https://fotopx-dev.s3-us-west-1.amazonaws.com/profile-default.png"
                            alt="blank-profile-picture"
                        />
                        <div className="profile-info-box">
                            <div className="profile-info-content">
                                <h4>{owner.username}</h4>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        
    }
};

export default UserShow;