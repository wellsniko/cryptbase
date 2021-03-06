import React from 'react';
import Nav2Container from '../nav2/nav2_container'
import HeaderContainer from '../header/header_container'
import { Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.inEmail,
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(){

    this.setState({
      email: "niko@niko.com",
      password: "password"
    })
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
  
  componentWillUnmount() {						
		this.props.removeErrors();
	}

  render() {

    let nameInput;
    (this.props.formType === "signup") ? nameInput = <div className="first-last-name-form"><label><input type="text" placeholder="First name" className="first-name-form"/></label>
    <label><input type="text" placeholder="Last name" className="last-name-form"/></label></div> : nameInput = null
   
    return (
      <div className="home-body-2">
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
                <input className={`${this.props.formType}-session-submit`} type="submit" value={this.props.formText[1]} />
                {this.props.formType === "login" ? <button className={`${this.props.formType}-session-submit-2`} onClick={this.demoLogin}>Demo Login</button> :
                null }
                
                
              </div>
            </div>
              
          </form>
        </div>
        {/* <div className="bottom-blue"></div> */}
      </div>
      </div>
    );
  }
}


export default SessionForm;
