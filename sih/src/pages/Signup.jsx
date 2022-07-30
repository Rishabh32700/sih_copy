import React, { useState, Component } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  FormControl,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import MuiPhoneNumber from "material-ui-phone-number";
import AddressInput from "material-ui-address-input";
import { useForm } from "react-hook-form";

import "./authentication.css";
import { useProgressStyles, useStatStyles } from "@chakra-ui/react";
import axios from 'axios'
import config from "../ApiConfig/Config";


// address class component srart
export class ControlledAddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      addresses: [],
    };
  }

  handleAddAddress = (address) => {
    this.setState({
      addresses: [...this.state.addresses, address],
    });
  };

  handleChangeAddress = (addressIndex) => {
    this.setState({
      address: addressIndex,
    });
  };

  render() {
    return (
      <AddressInput
        className="ph-no__input"
        onAdd={this.handleAddAddress}
        onChange={this.handleChangeAddress}
        value={this.state.address}
        allAddresses={this.state.addresses}
      />
    );
  }
}
// address class component ends

const Signup = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("hello");
    console.log(date);
    console.log(isValidDate());
    data["phoneNumber"] = phone;
    data["email"] = data.email;
    data["name"] = data.firstName + " " + data.lastName

    const user = {user: data}

    console.log("user", user);
    console.log(data);

    axios
    .post(
      config.server.path + config.server.port1 + config.api.signUp,user
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  };
  const [religion, setreligion] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState(false);


  const handlePhnChange = (value) => {
    setPhone(value);
  };

  const isValidDate = () => {
     debugger
     if(date < new Date().toLocaleDateString("en-CA")){
      setDateError(false);
      console.log("If")
    }
    else{
      setDateError(true);
      console.log("else")
     }
    //  return date < new Date().toLocaleDateString("en-CA") ?true:false;
     debugger
      
  };

  return (
    <>
      <div className="signup">
        <div className="overlay"></div>
        <div className="signup__container">
          <div className="signup__form">
            <div className="icon__container">
              <div className="icon__class">
                <PersonAddIcon fontsize="large" />
              </div>
              <div className="text">Sign up</div>
            </div>

            <div className="name__input__container">
              <div className="firstname">
                <TextField
                  id="firstname"
                  type="text"
                  variant="outlined"
                  label="Enter first name"
                  fullWidth
                  required
                  error={errors.firstName}
                  {...register("firstName", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Atleast 3 character" },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Invalid Name",
                    },
                  })}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              </div>
              <div className="lastname">
                <TextField
                  id="lastname"
                  type="text"
                  variant="outlined"
                  label="Enter last name"
                  fullWidth
                  required
                  error={errors.lastName}
                  {...register("lastName", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Atleast 3 character" },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Invalid Name",
                    },
                  })}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              </div>
              <div className="father__name">
                <TextField
                  id="father__name"
                  type="text"
                  variant="outlined"
                  label="Enter father's name"
                  fullWidth
                  required
                  error={errors.fathersName}
                  {...register("fathersName", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Atleast 3 character" },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Invalid Name",
                    },
                  })}
                  helperText={
                    errors.fathersName ? errors.fathersName.message : ""
                  }
                />
              </div>
            </div>

            <div className="personal__information__container">
              <div className="gender__selection__container">
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="gender__radio__button"
                  onChange={(e)=>setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </div>

              <div className="dob__container">
                <TextField
                  id="date"
                  label="Date of Birth"
                  type="date"
                  onChange={(event) => setDate(event.target.value)}
                  defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={dateError}

                />
                {console.log(dateError,"Dtaeerroe")}
              </div>

              <div className="religion__container">
                <FormControl
                  className="religion__selection"
                  variant="standard"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Religion
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Religion"
                    error={errors.religion}
                    {...register("religion", {
                      required: "Religion is required",
                    })}
                    helperText={errors.religion ? errors.religion.message : ""}
                  >
                    <MenuItem value={10}>Hindu</MenuItem>
                    <MenuItem value={20}>Muslim</MenuItem>
                    <MenuItem value={30}>Sikh</MenuItem>
                    <MenuItem value={30}>Christian</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="userename__ph-no__email__password__container">
              <div className="username__phone__container">
                <div className="username__container">
                  <TextField
                    id="username"
                    type="text"
                    variant="outlined"
                    label="Enter user name"
                    fullWidth
                    required
                    error={errors.userName}
                    {...register("userName", {
                      required: "This field is required",
                      minLength: { value: 3, message: "Atleast 3 character" },
                      pattern: {
                        value: /^[A-Za-z0-9]*$/i,
                        message:
                          "Username should consist of number and characters only",
                      },
                    })}
                    helperText={errors.userName ? errors.userName.message : ""}
                  />
                </div>
                <div className="ph-no__container">
                  <MuiPhoneNumber
                    defaultCountry={"in"}
                    onChange={handlePhnChange}
                    value={phone}
                    required
                    error={errors.phone}
                    {...register("phone", {
                      required: "This field is required",
                      minLength: { value: 10, message: "Invlaid Number" },
                      pattern: {
                        value: /^[0-9]+$/i,
                        message: "Phone should consist of number",
                      },
                    })}
                    helperText={errors.phone ? errors.phone.message : ""}
                  />
                </div>
              </div>
              <div className="email__password__conatiner">
                <div className="email">
                  <TextField
                    id="email"
                    type="email"
                    variant="outlined"
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : ""}
                    label="Enter Email"
                    fullWidth
                    required
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
                <div className="password__confirm-password__container">
                  <div className="signup__password">
                    <TextField
                      id="password"
                      type="password"
                      variant="outlined"
                      label="Enter password"
                      fullWidth
                      required
                      error={errors.password}
                      {...register("password", {
                        required: "This field is required",
                        minLength: { value: 8, message: "Atleast 8 character" },
                        maxLength: {
                          value: 16,
                          message: "Atmost 16 character",
                        },
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@','#','$','&','%']).{8,15}$/,
                          message:
                            "Password should consist of atleast one number, one uppercase ,one lowercase and one special character",
                        },
                      })}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                    />
                  </div>
                  <div className="confirm__password">
                    <TextField
                      id="confirm__password"
                      type="password"
                      required
                      variant="outlined"
                      label="Confirm password"
                      fullWidth
                      error={errors.confirm__password}
                      {...register("confirm__password", {
                        required: true,
                        validate: (val) => {
                          if (watch("password") !== val) {
                            return "Your passwords do no match";
                          }
                        },
                      })}
                      helperText={
                        errors.confirm__password
                          ? errors.confirm__password.message
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="address__container">
              <ControlledAddressInput />
            </div>

            <div className="terms__and__button__container__signup">
              <div className="terms__checkbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkboxicon={<CheckBoxIcon />}
                      name="checkedI"
                    />
                  }
                  label="I agree terms and conditions"
                />
              </div>
              <div className="create__account__button button">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                >
                  Create Account
                </Button>
              </div>
            </div>

            <div className="authentication__links__signup">
              <p className="links">
                <Link to="/">Already have an account ?</Link>
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

export default Signup;
