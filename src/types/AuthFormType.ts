import { Dispatch, SetStateAction } from "react";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = LoginForm & {
  confirmPassword: string;
};

export type RegisterType = {
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
};

export type FormInputType = RegisterType & {
  label: string;
  placeholder: string;
  name: string;
  registerOptions: RegisterOptions;
  tabIndex?: number;
  type?: string;
  disabled?: boolean;
  dir?: string;
  className?: string;
};
