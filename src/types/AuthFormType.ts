import { UseFormRegisterReturn } from "react-hook-form";

export type LoginForm = {
  identifier: string;
  password: string;
};

export type RegisterForm = LoginForm & {
  confirmPassword: string;
};

export type FormInputType = {
  register: UseFormRegisterReturn;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  tabIndex?: number;
  type?: string;
  disabled?: boolean;
  dir?: string;
  className?: string;
};
