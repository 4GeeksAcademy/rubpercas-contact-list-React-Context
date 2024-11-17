import React from "react";
import "../../styles/login.css";
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
    return (
        <div>
            <h1 className="text-center mb-5">WELCOME</h1>
            <div className="container-input">
                <input className="c-checkbox" type="checkbox" id="checkbox" />
                <div className="c-formContainer">
                    <form className="c-form" action="">
                        <input className="c-form__input" placeholder="Login / New user" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />
                        <label className="c-form__buttonLabel" for="checkbox">
                            <button className="c-form__button" type="button"><FontAwesomeIcon icon={faUser} style={{color: "#0d6efd",}} /></button>
                        </label>
                        <label className="c-form__buttonLabel" for="checkbox">
                            <button className="c-form__button me-1" type="button"><FontAwesomeIcon icon={faRightToBracket} style={{color: "#0d6efd",}} /></button>
                        </label>
                        <label className="c-form__toggle" for="checkbox" data-title="Login / New user"></label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;