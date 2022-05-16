import { Dispatch, SetStateAction } from "react";
import {
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = LoginForm & {
  confirmPassword: string;
};

// export type RegisterType<FormValues> = {
//   register: UseFormRegister<FormValues>;
//   // (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
// };
// export type RegisterType<FormValues> = UseFormRegister<FormValues>;

export type FormInputType = {
  // register: RegisterType<FormValues>;
  register: UseFormRegisterReturn;
  label: string;
  placeholder?: string;
  // registerOptions: RegisterOptions;
  tabIndex?: number;
  type?: string;
  disabled?: boolean;
  dir?: string;
  className?: string;
};
