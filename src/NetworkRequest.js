import React from "react";
import Constants from "./services/Constant";
let base_url = Constants.base_url;
const NetWorkRequest = {
  signUp: function(data, option) {
    var user = {
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation
    };
    return new Promise((resolve, reject) => {
      fetch(base_url + "api/v1/registrations", {
        method: "POST",
        body: JSON.stringify({ user: user }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(respJson => resolve(respJson))
        .catch(err => reject(new Error(err)));
    });
  },

  login: function() {
    return fetch(base_url + "api/v1/login", { method: "POST" })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
};

export default NetWorkRequest;
// module.exports = NetWorkRequest;
