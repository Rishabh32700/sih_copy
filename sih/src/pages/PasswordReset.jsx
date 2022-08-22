import React, { useState } from "react";

import "./authentication.css";

import { Button, TextField } from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";

import "./authentication.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import config from "../ApiConfig/Config";

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log("sumbit", data);

    if (data.password !== data.re_password) {
      toast.error("Password do not match", { toastId: "hi" });
      return false;
    }
    try {
      setLoading(true);
      const res = await fetch(config.server.path + config.api.updatePassword, {
        password: data.password,
      });
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    toast.success("Password reset");
  };
  return (
    <div className="signin">
      <div className="overlay"></div>
      <div className="signin__container">
        <div className="signin__form">
          <div className="icon__container">
            <div className="icon__class">
              <PersonIcon />
            </div>
            <div className="text">Password Reset</div>
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20%",
            }}
          >
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
              helperText={errors?.password ? errors.password.message : ""}
            />

            <TextField
              id="re_password"
              type="password"
              variant="outlined"
              label=" Re-Enter password"
              fullWidth
              error={errors.password}
              {...register("re_password", {
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
              helperText={errors?.re_password ? errors.re_password.message : ""}
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
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
