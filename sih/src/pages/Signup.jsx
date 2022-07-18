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

import "./authentication.css";

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
  const [religion, setreligion] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    setreligion(event.target.value);
  };

  const handlePhnChange = (value) => {
    setPhone(value);
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
                />
              </div>
              <div className="lastname">
                <TextField
                  id="lastname"
                  type="text"
                  variant="outlined"
                  label="Enter last name"
                  fullWidth
                />
              </div>
              <div className="father__name">
                <TextField
                  id="father__name"
                  type="text"
                  variant="outlined"
                  label="Enter father's name"
                  fullWidth
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
                  defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
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
                    value={religion}
                    onChange={handleChange}
                    label="Religion"
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
                  />
                </div>
                <div className="ph-no__container">
                  <MuiPhoneNumber
                    defaultCountry={"in"}
                    onChange={handlePhnChange}
                    value={phone}
                  />
                </div>
              </div>
              <div className="email__password__conatiner">
                <div className="email">
                  <TextField
                    id="email"
                    type="email"
                    variant="outlined"
                    label="Enter Email"
                    fullWidth
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
                    />
                  </div>
                  <div className="confirm__password">
                    <TextField
                      id="confirm__password"
                      type="password"
                      variant="outlined"
                      label="Confirm password"
                      fullWidth
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
                <Button variant="contained" color="primary" fullWidth>
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
