// import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addSinghTek } from "../Service/Api";
import { useNavigate } from "react-router-dom";
// const FormData = require("form-data");
export default function Register() {
  const [username, setusername] = useState("");

  const [first_name, setfirst_name] = useState("");
  const [email, setemail] = useState("");
  const [department, setdepartment] = useState("");
  const [designation, setdesignation] = useState("");
  const [dealer_code, setdealer_code] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [user_type, setuser_type] = useState("");
  const [last_name, setlast_name] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState("");
  const [docsFile, setdocsFile] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setusername(e.target.value);
        break;
      case "designation":
        setdesignation(e.target.value);
        break;
      case "first_name":
        setfirst_name(e.target.value);
        break;
      case "email":
        setemail(e.target.value);
        break;
      case "department":
        setdepartment(e.target.value);
        break;
      case "productCode":
        setdealer_code(e.target.value);
        break;
      case "mobile_no":
        setmobile_no(e.target.value);
        break;
      case "user_type":
        setuser_type(e.target.value);
        break;
      case "last_name":
        setlast_name(e.target.value);
        break;
      case "password":
        setpassword(e.target.value);
        break;
      case "image":
        setimage(e.target.files[0]);
        break;
      case "docsFile":
        setdocsFile(e.target.files[0]);
        break;

      default:
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, dealer_code);
    const userData = {
      username,
      email,
      first_name,
      image,
      last_name,
      password,
      docsFile,
      user_type,
      mobile_no,
      department,
      designation,
    };
    console.log(userData);
    const result = await addSinghTek(userData);
    if (result != "error") {
      navigate("/login");
    }
  };
  return (
    <div>
      <div classname="wrapper">
        <div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
              <div className="col mx-auto">
                <div className="my-4 text-center">
                  <img
                    src="assets/images/justapay.png"
                    className="logo-text"
                    alt="logo icon"
                    width={180}
                  />
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <label className="form-label fw-bold fs-4 mb-2 text-muted d-block  ">
                        New User Registration
                      </label>
                    </div>
                    <div className="border p-4 rounded">
                      <div className="form-body">
                        <form
                          className="row g-3"
                          onSubmit={handleSubmit}
                          encType="multipart/form-data"
                        >
                          <div className="col-sm-6">
                            <label className="form-label">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              name="username"
                              required
                              onChange={handleChange}
                              placeholder="Enter Username"
                            />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">First Names</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="customername"
                              name="first_name"
                              required
                              onChange={handleChange}
                              placeholder="First Name"
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="username"
                              name="last_name"
                              required
                              onChange={handleChange}
                              placeholder="Last Name"
                            />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">Email</label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                type="email"
                                className="form-control border-end-0"
                                // id="inputChoosePassword"
                                placeholder="Enter Email"
                                name="email"
                                required
                                onChange={handleChange}
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Designation</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="DebitAccountNumber"
                              name="designation"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">Department</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="DebitAccountNumber"
                              name="department"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Mobile No</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="productCode"
                              name="mobile_no"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">User Type</label>
                            <select
                            className="single-select select2-hidden-accessible form-control"
                            data-select2-id={1}
                            tabIndex={-1}
                            aria-hidden="true"
                            onChange={handleChange}
                            name="user_type" 
                          >
                            <option value="Select" data-select2-id={0}>
                              Select
                            </option>
                            <option value="Singhtek Users" data-select2-id={1}>
                              Singhtek Users
                            </option>
                            <option value="Merchants" data-select2-id={2}>
                              Merchants
                            </option>

                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus"
                            dir="ltr"
                            data-select2-id={2}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-labelledby="select2-2yzs-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-2yzs-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Afghanistan"
                                >

                                </span>
                                <span className="select2-selection__arrow" role="presentation">
                                  <b role="presentation" />
                                </span>
                              </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true" />
                          </span>
                          </div>


                        

                          <div className="col-sm-6">
                            <label className="form-label">Password</label>
                            <input
                              type="text"
                              className="form-control"
                              name="password"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Amount</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="creditAccountNumber"
                              name="amount"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-sm-6">
                            <label for="formFileMultiple" class="form-label">
                              Image
                            </label>
                            <input
                              class="form-control"
                              type="file"
                              id="formFileMultiple"
                              name="image"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label for="formFileMultiple" class="form-label">
                              Docs
                            </label>
                            <input
                              class="form-control"
                              type="file"
                              id="formFileMultiple"
                              name="docsFile"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-12">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                              />
                              <label className="form-check-label">
                                I read and agree to Terms &amp; Conditions
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">
                                <i className="bx bx-user" />
                                Sign up
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="text-center">
                        <h3 className>Sign Up</h3>
                        <p>
                          Already have an account?{" "}
                          <Link to="../Login">Sign in here</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/end row/}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Register
