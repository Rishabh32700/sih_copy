import React from "react";

import {
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import PersonIcon from "@material-ui/icons/Person";
  import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
  import CheckBoxIcon from "@material-ui/icons/CheckBox";
  import './authentication.css'

const Login = () => {
  return (
    <>
      <div className="signin">
        <div className="overlay"></div>
        <div className="signin__container">
          <div className="signin__form">
            <div className="icon__container">
              <div className="icon__class">
                <PersonIcon/>
              </div>
              <div className="text">Sign in</div>
            </div>

            <div className="mailid__and__password__conatiner signin__mailid__and__password__conatiner">
              <div className="email">
                <TextField
                  id="email"
                  type="email"
                  variant="outlined"
                  label="Enter Email"
                  fullWidth
                />
              </div>
              <div className="password">
                <TextField
                  id="password"
                  type="password"
                  variant="outlined"
                  label="Enter password"
                  fullWidth
                />
              </div>
            </div>

            <div className="terms__and__button__container">
              <div className="terms__checkbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkboxicon={<CheckBoxIcon />}
                      name="checkedI"
                    />
                  }
                  label="Remember me"
                />
              </div>
              <div className="create__account__button button">
                <Button variant="contained" color="primary" fullWidth>
                  Log in
                </Button>
              </div>
            </div>
            
            <div className="authentication__links">
              <p className="links">
                <Link to="/signup">Do not have an account ?</Link>
                <p>OR</p>
                <Link to="/home">Use as guest</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
