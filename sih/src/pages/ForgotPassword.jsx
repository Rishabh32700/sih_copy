import React, { useState } from "react";

import "./authentication.css";

import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

import "./authentication.css";
import { useForm } from "react-hook-form";

import axios from "axios";
import config from "../ApiConfig/Config";
// import { ProcessNumberFunction } from "../helpers/Utils";
import PhoneInput from "react-phone-input-2";

const ForgotPassword = () => {
  // const [phone, setPhone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data["phone"] = phoneNumber;
    // console.log(data);

    // ProcessNumberFunction(phoneNumber);

    // fetch(config.server.path + config.server.port1 + config.api.getFeature)
    //   .then((result) => result.json())
    //   .then((res) => {
    //     console.log(res);
    //     // console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log("the error is::", error);
    //   });
    await axios
      .get(
        config.server.path + config.server.port1 + config.api.forgotpassword,
        {
          params: { phoneNumber: phoneNumber },
        }
      )
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  // const handlePhnChange = (e) => {
  //   setPhone(e.target.value);
  //   // console.log(e.target.value);
  // };

  return (
    <>
      <div className="signin forgot__password">
        <div className="signin_container forgotpassword_container">
          <div className="forgotpassword_form signin_form">
            <div className="icon__container">
              <div className="icon__class">
                <PersonIcon />
              </div>
              <div className="text">Forgot Password</div>
            </div>

            <div className="mailid_andpasswordconatiner signinmailidandpassword_conatiner">
              <div className="ph-no__container">
                <Box
                  component="form"
                  style={{ width: "100%" }}
                  noValidate
                  autoComplete="off"
                >
                  <PhoneInput
                    style={{ width: "100%", height: "100%", outline: "none" }}
                    id="phonenumber"
                    country={"in"}
                    value={phoneNumber}
                    onChange={(value, country) => {
                      // setPhone(e)
                      setPhoneNumber(value);
                      // setError({ ...error, phoneError: "" });
                      // console.log("values::", value )
                      // console.log("country ====>", country);
                      setCountryCode(country.countryCode);
                      setCountryName(country.name);
                    }}
                  />
                </Box>
              </div>
            </div>

            <div className="terms_andbutton_container">
              <div className="create_account_button button">
                <Link to="/verifyotp">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Send Otp
                  </Button>
                </Link>
              </div>
            </div>

            <div className="authentication_links_signup">
              <p className="links">
                <Link to="/">Already have an account ?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;