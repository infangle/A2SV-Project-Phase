"use client";
import React, { useState, useEffect } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data) => {
    setErrorMessage("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!res.ok) {
        setErrorMessage("Invalid credentials");
      } else {
        router.push("/protected"); // Redirect to a protected route
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const onError = (errors) => {
    console.log("form errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-white"></div> {/* Optional: Left half for background */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-md py-8 px-4 gap-8">
          <h2 className="font-poppins text-4xl font-black leading-10 text-center text-[#25324B]">
            Welcome Back,
          </h2>
          {errorMessage && (
            <div className="text-red-500">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/,
                    message: "Incorrect email format",
                  },
                })}
                placeholder="Enter email address"
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password field cannot be empty",
                })}
                placeholder="Enter password"
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
            <button
              type="submit"
              className="bg-[#23206f] text-white rounded-[80px] w-full py-2"
            >
              Login
            </button>
            <p className="font-epilogue text-base font-normal leading-[25.6px] text-[#202430] text-center my-2">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#23206f]">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
