import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div>
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
      <div>
        <div className>{this.renderErrors()}</div>
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
          
              <input className={`${this.props.formType}-session-submit`} type="submit" value={this.props.formText[1]} />
            </div>
          </form>
        </div>
        <div className="bottom-blue"></div>
      </div>
    );
  }
}


export default SessionForm;
