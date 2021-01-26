import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors}, ownProps) => {

  let myEmail
  if (!ownProps.location.state) {
    myEmail=""
  } else {myEmail = ownProps.location.state.email}

  return {
    inEmail: myEmail,
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
