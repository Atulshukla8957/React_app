import React from "react";
import LoginForm from "../forms/LoginForm";
import NetworkRequest from "../../NetworkRequest";

class LoginPage extends React.Component {
	handleSubmit = (data) => {
		console.log(data);
		NetworkRequest.login().then(resp => {
			console.log(resp);
		}, error =>{
			console.log(error);
		}).catch(err => {
			console.log(err);
		})
	}
	render() {
		return(
			<div>
				<h1> Login Page  </h1>
				<LoginForm submit={this.handleSubmit} />
			</div>
		);
	}
}

export default LoginPage;