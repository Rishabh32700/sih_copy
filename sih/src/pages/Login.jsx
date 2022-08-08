import React, { useState, useEffect, useRef } from "react";

import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./authentication.css";
import { useForm } from "react-hook-form";

import axios from "axios";
import FormControl from "@mui/material/FormControl";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
      loginType: "2",
    };
    console.log(loginData);

    try {
      const response = await axios.post(
        "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/login",
        { ...loginData }
      );
      alert("User Login");
      sessionStorage.setItem("userID", response.data.user.userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signin">
        <div className="overlay"></div>
        <div className="signin__container">
          <div className="signin__form">
            <div className="icon__container">
              <div className="icon__class">
                <PersonIcon />
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
                  required
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : ""}
                  {...register("email", {
                    required: "Requird field",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid Email",
                    },
                  })}
                />
              </div>
              <div className="password">
                <TextField
                  id="password"
                  type="password"
                  variant="outlined"
                  label="Enter password"
                  fullWidth
                  error={errors.password}
                  {...register("password", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@','#','$','&','%']).{8,16}$/,
                      message:
                        "Password should consist of atleast one number, one uppercase ,one lowercase and one special character",
                    },
                    minLength: { value: 8, message: "Atleast 8 character" },
                    maxLength: {
                      value: 16,
                      message: "Atmost 16 character",
                    },
                  })}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </div>
              <div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    fullWidth
                    defaultValue="Role"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    variant="outlined"
                    {...register("role", {
                      required: "Type is required",
                    })}
                    error={errors.type}
                    helperText={errors.type ? errors.type.message : ""}
                  >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>Regular</MenuItem>
                  </Select>
                </FormControl>
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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Log in
                </Button>
              </div>
            </div>

            <div className="authentication__links">
              <p className="links">
                <Link to="/signup">Do not have an account ?</Link>
                <p>OR</p>
                <Link to="/">Use as guest</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
