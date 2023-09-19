import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import FormGroup from "../components/common/FormGroup";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useToggleValue from "../hooks/useToggleValue";
import { IconEyeToggle } from "../components/icons";
import { Button } from "../components/button";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";

const schema = yup.object({
  email: yup.string().email("").required("This field is required !!! "),
  password: yup
    .string()
    .required("This field is required !!! ")
    .min(8, "password at least 8 characters"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const { value: showPassword, handlerToggleValue: handlerShowPassword } =
    useToggleValue();

  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };

  // const handlerSignInGoogle = () => {};

  return (
    <LayoutAuthentication heading="Welcome Back">
      <p className="mb-3 text-xs font-normal text-center lg:mb-8 lg:text-sm  text-text3">
        Already have an account?
        <Link to="/register" className="font-medium underline text-primary">
          {" "}
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email* </Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="nguyenvanA@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password * </Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handlerShowPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <span className="text-primary font-medium text-sm inline-block text-right cursor-pointer">
            Forgot password
          </span>
        </FormGroup>
        <Button
          kind="primary"
          className=" w-full"
          type="submit"
          // isLoading={true}
        >
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
