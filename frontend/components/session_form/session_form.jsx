import React from 'react';
import Nav2Container from '../nav2/nav2_container'
import HeaderContainer from '../header/header_container'
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <div className="error-danger">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </div>
    );
  }
  demoLogin(e) {
    e.preventDefault();
    const user = { email: "teddyroosevelt@test.com", password: "password" };
    this.props.processForm(user)
  }
  
  componentWillUnmount() {						
		this.props.removeErrors();
	}

  render() {
    const demoUser = {
      email: "niko",
      password: "password"
    }

    let nameInput;
    (this.props.formType === "signup") ? nameInput = <div className="first-last-name-form"><label><input type="text" placeholder="First name" className="first-name-form"/></label>
    <label><input type="text" placeholder="Last name" className="last-name-form"/></label></div> : nameInput = null
    
    return (
      <div className="home-body">
      <header>
        
        <Link to="/" className="cryptbase-logo">Cryptbase</Link>
        <Nav2Container/>
        <HeaderContainer/>
      </header>
          
      <div>
        <div >{this.renderErrors()}</div>
        <div className={`${this.props.formType}-form-container`}>
          <h1>{this.props.formText[0]}</h1>
          <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
            
            <div className={`${this.props.formType}-form`}>
              {nameInput}
              <label>
                <input type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className={`${this.props.formType}-input`}
                />
              </label>
        
              <label>
                <input type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className={`${this.props.formType}-input`}
                />
              </label>
              <div className={`${this.props.formType}-session-submit-line`}>
                <button className={`${this.props.formType}-session-submit-2`} onClick={() => this.props.login(demoUser)}>Demo Login</button>
                <input className={`${this.props.formType}-session-submit`} type="submit" value={this.props.formText[1]} />
              </div>
            </div>
              
          </form>
        </div>
        <div className="bottom-blue"></div>
      </div>
      </div>
    );
  }
}


export default SessionForm;
