import React, { Component } from "react";
import AuthService from "../../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
        <div className="container">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Profile</h2>
                    </div>
                </div>
            </section>
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser}</strong>
                </h3>
            </header>
            {/* <p>
                <strong>Token:</strong>{" "}
                {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
                <strong>Id:</strong>{" "}
                {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong>{" "}
                {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)
                }
            </ul> */}
        </div>
        );
    }
}