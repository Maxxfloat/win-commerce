import { FC } from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useSession } from "modules/nextAuth-reactQuery";
import { login } from "modules/auth/login";
import Logo from "components/Layout/Logo";
import Field from "components/AuthForms/Field";
import { LoginForm } from "types/AuthFormType";
import { useMutation } from "react-query";

const Login: FC = () => {
  const router = useRouter();
  const { mutate, isLoading, isSuccess, data } = useMutation(
    (v: LoginForm) =>
      signIn("login", {
        ...v,
        callbackUrl: `${window.location.origin}/auth/login`,
        // redirect: false,
      })
    // {
    //   onSuccess: () => router.reload(),
    // }
  );

  const submitHandler: SubmitHandler<LoginForm> = (value) => {
    mutate(value);
  };

  const [session, loading] = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  if (isLoading || isSuccess)
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <AiOutlineLoading3Quarters className="w-24 h-24 animate-spin" />
      </div>
    );

  return (
    <>
      <main className="flex items-center justify-center my-10 lg:h-auto lg:my-32">
        <div className="flex w-full mx-5 flex-col justify-center items-center sm:border-[1px] sm:px-7 sm:py-9 rounded-lg sm:w-96 md-5">
          <Logo />
          <span className="w-full text-2xl font-bold ">Login</span>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col w-full mt-3"
          >
            <Field
              type="email"
              label="Email"
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
              disabled={Object.keys(errors).length > 0 && isLoading}
              className="w-full h-12 mt-12 text-lg leading-8 text-white bg-red-500 border-none rounded-md active:bg-red-800"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Login;
