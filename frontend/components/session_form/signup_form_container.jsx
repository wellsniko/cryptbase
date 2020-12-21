import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
    formText: ["Create your account", "Create account"],
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
