import React, { FC, useContext, useState } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import nookies, { parseCookies } from "nookies";
import { useMutation } from "react-query";

import instance from "modules/apiInstance";
import { login } from "modules/auth/login";
import context from "modules/context";
import Logo from "components/Layout/Logo";
import Field from "components/AuthForms/Field";
import useServerRefresher from "hooks/useServerRefresh";
import useUser from "hooks/useUser";

const Login: FC = () => {
  const { isAuthenticated, user, setUser } = useContext(context);

  const router = useRouter();

  // const {
  //   isLoading,
  //   isError,
  //   mutate: loginMutation,
  //   data,
  // } = useMutation(
  //   (params: FormValues) => login(params),
  //   // (params: FormValues) => instance.post("/auth/local", params),
  //   {
  //     // onSuccess: useServerRefresher(),
  //     onSuccess: (v) => {
  //       setUser(v.data.user);
  //       console.log(user);
  //     },
  //   }
  // );
  // const onSubmit = async (params: FormValues) => loginMutation(params);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push("/"); // redirect if you're already logged in
  //   }
  //   console.log("user: ", user);
  // }, [isAuthenticated, router, user]);

  type FormValues = {
    identifier: string;
    password: string;
  };

  const submitHandler: SubmitHandler<FormValues> = (value) => {
    login({
      identifier: value.identifier,
      password: value.password,
    }).then((res) => setUser(res.data.user));
    console.log(parseCookies().accessToken);

    // if (parseCookies().accessToken) {
    //   router.push("/");
    // }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="flex w-full mx-5 flex-col justify-center items-center sm:border-[1px] sm:px-7 sm:py-9 rounded-lg sm:w-96 md-5">
          <Logo />
          <span className="w-full text-2xl font-bold ">Login</span>
          <form
            onSubmit={handleSubmit(submitHandler)}
            // onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full mt-3"
          >
            <Field
              type="email"
              label="Email"
              // register={register}
              register={register("identifier", {
                required: { value: true, message: "Enter your email" },
              })}
            />
            <Field
              type="password"
              label="Password"
              register={register("password", {
                required: { value: true, message: "Enter your password" },
              })}
            />
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0}
              className="w-full h-12 mt-12 text-lg leading-8 text-white bg-red-500 border-none rounded-md active:bg-red-800"
            >
              Login
            </button>
            <div></div>
            {/* <RedirectBtn title={title} href={href} /> */}
          </form>
          <button onClick={() => console.log(user)}>CC</button>
        </div>
      </main>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (
// ) => {
//   const { user } = nookies.get(ctx);
//   // ctx.res.writeHead(3007, { location: "/login" });
//   // ctx.res.end();
//   // console.log("ctx", ctx.req);
//   console.log("USERt", user);
//   if (user) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return { props: {} };
// };

export default Login;
