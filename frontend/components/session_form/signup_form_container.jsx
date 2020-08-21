import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'Sign up'
   
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);