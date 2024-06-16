import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

class Login extends Component {
  state = { username: "" };

  updateUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onClickSubmitButton = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { username } = this.state;
    if (username !== "") {
      Cookies.set("username", username);
      history.replace("/");
    }
  };

  render() {
    // const customerName = Cookies.get("username");
    // if (customerName !== undefined) {
    //   return <Redirect to="/" />;
    // }
    const { username } = this.state;
    return (
      <div className="login-page-container">
        <h1 className="react-tiles-heading">React Tiles</h1>
        <div className="login-form-container">
          <h1 className="name-heading">Enter Your Name</h1>
          <input
            onChange={this.updateUsername}
            className="input-name"
            value={username}
            type="text"
          />
          <button
            onClick={this.onClickSubmitButton}
            className="submit-btn"
            type="button"
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
