import React from "react";
import SignUpForm from "../forms/SignUpForm";
import NetworkRequest from "../../NetworkRequest";

class SignUpPage extends React.Component {
  handleSubmit = data => {
    NetworkRequest.signUp(data)
      .then(
        resp => {
          console.log(resp.data.user.auth_token);
          localStorage.setItem("token", resp.data.user.auth_token);
        },
        error => {
          console.log(error);
        }
      )
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1> SignUp Page </h1>
        <SignUpForm submit={this.handleSubmit} />
      </div>
    );
  }
}

export default SignUpPage;
