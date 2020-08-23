import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'Sign up',
      navLink: <p>Already have an account? <Link to="/login" className="under-form-link">Log in</Link></p>
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(signup(user)),
      processLoginForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);