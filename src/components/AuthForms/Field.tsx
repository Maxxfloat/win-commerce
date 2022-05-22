import React, { FC } from "react";
import type { FormInputType, LoginForm } from "types/AuthFormType";
const FormInput: FC<FormInputType> = ({
  label,
  register,
  type,
  disabled = false,
  defaultValue,
}) => {
  return (
    <div>
      <span className="block mt-6 mr-1 text-lg text-gray-500">{label}</span>
      <input
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        {...register}
        className="rounded-lg py-1.5 px-3 mt-1.5 leading-8 text-lg bg-white  border-[1px] border-gray-300 disabled:bg-gray-300 disabled:border-gray-500 w-full disabled:border-2"
      />
    </div>
  );
};

export default FormInput;
