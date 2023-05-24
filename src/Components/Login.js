import React, { useState } from 'react'
import { LoginSinghTek } from '../Service/Api';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setemail(e.target.value);
                break;
            case "password":
                setpassword(e.target.value);
                break;
            default: ;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const userData = {
            email   ,
            password,
        }

        console.log(userData)

        const result = await LoginSinghTek(userData);
        console.log(result)
        if (result.token) {
            alert('Login Success')

        }

    };
    return (
        <div>
            <div className="wrapper">
                <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                            <div className="col mx-auto">
                                <div className="mb-4 text-center">
                                    <img src="assets/images/logo-img.png" width={180} alt />
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border p-4 rounded">
                                            <div className="text-center">
                                                <h3 className>Sign in</h3>
                                                <p>
                                                    Don't have an account yet?{' '}
                                                    <Link to="../Register">Sign up here</Link>

                                                </p>
                                            </div>

                                            <div className="form-body">
                                                <form className="row g-3" onSubmit={handleSubmit}>
                                                    <div className="col-12">
                                                        <label htmlFor="inputEmailAddress" className="form-label">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputEmailAddress"
                                                            placeholder="Email Address"
                                                            name="email"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            htmlFor="inputChoosePassword"
                                                            className="form-label"
                                                        >
                                                            Enter Password
                                                        </label>
                                                        <div className="input-group" id="show_hide_password">
                                                            <input
                                                                type="password"
                                                                className="form-control border-end-0"
                                                                id="inputChoosePassword"
                                                                defaultValue={12345678}
                                                                onChange={handleChange}
                                                                name="password"
                                                                placeholder="Enter Password"
                                                            />{' '}
                                                            <a
                                                                href="javascript:;"
                                                                className="input-group-text bg-transparent"
                                                            >
                                                                <i className="bx bx-hide" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="flexSwitchCheckChecked"
                                                                defaultChecked
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexSwitchCheckChecked"
                                                            >
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 text-end">
                                                        {' '}
                                                        <a href="authentication-forgot-password.html">
                                                            Forgot Password ?
                                                        </a>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button type="submit" className="btn btn-light">
                                                                <i className="bx bxs-lock-open" />
                                                                Sign in
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login