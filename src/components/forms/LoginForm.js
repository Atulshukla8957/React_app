import React from "react";
import PropTypes from 'prop-types';
import { Form, Button } from "semantic-ui-react";
import Validator from  "validator";
import  InlineError from "../messages/InlineError";
import {Link} from "react-router-dom";

class LoginForm extends React.Component{
  

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = evt =>{
    this.setState({ 
      data:{...this.state.data,[evt.target.name]: evt.target.value } 
    });
  };


  validate = (data) =>{
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = "Invalid Email"
    if(!data.password) errors.password = "can't blank"
    return errors;
  }



  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors});
    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data)
    }
  }

	render(){

		const {data, errors} = this.state;

		return(
		<Form> 
			<Form.Field error={!!errors.email}>
				<label htmlFor="email">Email</label>
				<input
          type="email"
          id= "email"
          name= "email"
          placeholder="Enter email"
          value={data.email}
          onChange={this.onChange}
        />
        {errors.email && <InlineError text= {errors.email} /> }
      </Form.Field>  
      <Form.Field error={!!errors.password}> 
        <label htmlFor="password">Password</label> 
        <input
          id= "password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.onChange}
        />
        {errors.password && <InlineError text= {errors.password} /> }
      </Form.Field> 
				<Button onClick={this.onSubmit} primary>Login</Button>
        <Link to="/signup">Sign Up</Link> 
		</Form>
		);
	}
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;