import { useEffect, FC } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { getCsrfToken, signIn, signOut } from "next-auth/react";

import { useSession } from "modules/nextAuth-reactQuery";
import { login } from "modules/auth/login";
import Logo from "components/Layout/Logo";
import Field from "components/AuthForms/Field";
import { LoginForm } from "types/AuthFormType";
import { useMutation } from "react-query";
import useServerRefresher from "hooks/useServerRefresh";

const Login: FC<{ csrfToken: string | undefined }> = ({ csrfToken }) => {
  const router = useRouter();
  const { mutate, isLoading, isSuccess, data } = useMutation(
    (data: LoginForm) => login(data),
    {
      onSuccess: () => router.reload(),
      // useServerRefresher(),
    }
  );

  console.log(data);
  const submitHandler: SubmitHandler<LoginForm> = (value) => {
    mutate(value);
  };
  const [session, loading] = useSession({
    // required: true,
    redirectTo: "/",
    queryConfig: {
      staleTime: 60 * 1000 * 60 * 3, // 3 hours
      refetchInterval: 60 * 1000 * 5, // 5 minutes
    },
  });
  // useEffect(() => {
  //   if (isSuccess) console.log(loading);
  //   console.log("session: ", session);
  // }, [isSuccess, loading, session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  return (
    <>
      <main className="flex items-center justify-center h-screen">
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
            <input
              type="hidden"
              defaultValue={csrfToken}
              {...register("csrfToken")}
            />
          </form>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;
