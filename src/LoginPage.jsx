import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FullPage from "./models/FullPage";

const LoginPage = ({onLogin, history}) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();
    }

    return (
        <FullPage>

            <header className="text-center py-4 mt-2">
                <div className="container">

                    <div className="form-login-logo text-center">
                        <i className="fal fa-camera-alt fa-5x"/>
                    </div>

                    <h1 className="font-weight-light text-dark">Connexion</h1>
                    <p>Vous pouvez créer un compte <Link to="/register">ici</Link></p>
                </div>
            </header>

            <div className="container">
                <div className="row justify-content-center">
                    <form className="col-xs-12 col-md-9 col-xl-6" onSubmit={handleSubmit} autoComplete="off">

                        <div className="form-group">
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input value={credentials.username} onChange={handleChange} type="email" id="inputEmail"
                                   className={"form-control"} placeholder="Email address"
                                   name="username" required="" autoFocus=""/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input value={credentials.password} onChange={handleChange} type="password" id="inputPassword"
                                   className="form-control" placeholder="Password" name="password" required=""/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        </div>

                    </form>
                </div>
            </div>
        </FullPage>
    );
};

export default LoginPage;
