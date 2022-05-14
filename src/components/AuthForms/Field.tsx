import React, { FC } from "react";
import type { FormInputType } from "types/AuthFormType";
const FormInput: FC<FormInputType> = ({
  label,
  register,
  name,
  type,
  disabled = false,
}) => (
  <div>
    <span className="mt-6 mr-1 text-xs text-gray-500">{label}</span>
    <input
      type={type}
      disabled={disabled}
      {...register(
        name
        // { required: true }
      )}
      className="rounded-lg py-1.5 px-3 mt-1.5 border-none bg-gray-200 leading-8 text-lg sm:bg-white sm:border-solid sm:border-[1px] sm:border-gray-300 disabled:bg-gray-300 disabled:border-gray-500 disabled:border-2"
    />
  </div>
);

export default FormInput;
