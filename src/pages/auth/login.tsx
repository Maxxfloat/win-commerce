import React, { FC, useContext, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { login } from "modules/auth/login";
import context from "modules/context";
import RedirectBtn from "components/AuthForms/RedirectBtn";

const Login: FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { isAuthenticated } = useContext(context);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, [isAuthenticated]);

  const submitHandler = () => {
    login({ identifier: username, password });
  };

  const { register, handleSubmit } = useForm();
  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-full mx-5 flex-col justify-center items-center sm:border-[1px] sm:px-7 sm:py-9 rounded-lg sm:w-96 md-5">
          <span className="w-full h-20 text-3xl text-center">Logo</span>
          <span className="w-full text-2xl font-bold text-right ">Login</span>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col w-full mt-3 text-right"
            style={{ direction: "ltr" }}
          >
            <button
              type="submit"
              className="w-full h-12 mt-12 text-lg leading-8 text-white bg-red-500 border-none rounded-md active:bg-red-800"
              // onClick={() => {
              //    (getCookie("RTZuser"));
              // }}
            >
              {}
            </button>
            <div></div>
            {/* <RedirectBtn title={title} href={href} /> */}
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
