import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ButtonGoogle } from "../components/button";
import { Checkbox } from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import { Input } from "../components/input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
//bắt validation cho thằn useForm
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "../components/icons";
import useToggleValue from "../hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("This field is required !!! "),
  email: yup
    .string()
    .email("Invalid email address !!! ")
    .required("This field is required !!! "),
  password: yup
    .string()
    .required("This field is required !!! ")
    .min(8, "password at least 8 characters"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const dispatch = useDispatch();
  const handleSignUp = async (values) => {
    try {
      dispatch(authRegister(values));
      reset({});
    } catch (error) {}
  };

  //custom Hook
  //phải gán cho tên riêng (value: acceptTerm,) và hàm riêng (handlerToggleValue: handlerTerm) để quản lí và  sử dụng
  const { value: acceptTerm, handlerToggleValue: handlerTerm } =
    useToggleValue();
  // const [acceptTerm, setAcceptTerm] = useState(false);
  // const handlerTerm = () => {
  //   setAcceptTerm(!acceptTerm);
  // };

  const { value: showPassword, handlerToggleValue: handlerShowPassword } =
    useToggleValue();
  // const [showPassword, setShowPassword] = useState(false);
  // const handlerShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-3 text-xs font-normal text-center lg:mb-8 lg:text-sm  text-text3">
        Already have an account?
        <Link to="/login" className="font-medium underline text-primary">
          {" "}
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google" />
      <p className="mb-4 font-normal text-center text-text2 lg:text-sm lg:mb-8 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name * </Label>
          <Input
            control={control}
            name="name"
            type="text"
            error={errors.name?.message}
            placeholder="Nguyễn Văn A"
          ></Input>
        </FormGroup>
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
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handlerShowPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>

        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox checked={acceptTerm} onClick={handlerTerm}>
            <p className="flex-1 text-sm text-text2 cursor-pointer dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Tearms of Use</span>{" "}
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button
          className="w-full"
          type="submit"
          kind="primary"
          // isLoading={true}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
