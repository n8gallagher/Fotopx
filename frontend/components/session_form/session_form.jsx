import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
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
        this.props.processForm(user)
            .then(() => this.props.history.push("/discover"));
    }

    loginDemoUser() {
        const user = { username: 'Jerrysmith', password: 'plut0isApl4net' };
        let { username, password } = user;

        this.props.processLoginForm(user)
            .then(() => this.props.history.push("/"));
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
        if (this.props.formType === 'Sign Up') {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h2>{this.props.formType}</h2>
                        <br/>
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
    
                            <input className="demo-login" type="submit" onClick={this.loginDemoUser} value="Log in as demo user" />
                            <div className="session-form-nav-link">{this.props.navLink}</div>
                        </div>
                    </form>
                </div>
            )
        } else {

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
    
                            <input className="demo-login" type="submit" onClick={this.loginDemoUser} value="Log in as demo user" />
                            <div className="session-form-nav-link">{this.props.navLink}</div>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default SessionForm;