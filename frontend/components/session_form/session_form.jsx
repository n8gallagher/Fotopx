import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="error-message">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render(){
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2>{this.props.formType}</h2>
                    <br/>
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label>Username*
                            <br/>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <label>Password*
                            <br/>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />

                        <button className="demo-login">Login as demo user</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;