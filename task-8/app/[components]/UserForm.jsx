"use client";
import React, { useEffect, useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Verify from "./Verify";

const UserForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isSubmitSuccessful } = formState;
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const res = await fetch("https://akil-backend.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      const signInRes = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (signInRes?.ok) {
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("email", data.email);
        router.push(`/protected`);
      } else {
        const signInError = await signInRes.error;
        setErrorMessage(signInError);
      }
      setIsSubmitted(true);
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
    <>
      {isSubmitted ? (
        <Verify />
      ) : (
        <div className="flex flex-col items-center justify-center py-[34px] px-[156px] gap-8">
          <h1 className="font-poppins text-4xl font-black leading-10 text-center text-[#25324B]">
            Sign Up Today!
          </h1>
          <div id="google-signin-button" className="my-4">
            {/* This will be where you render your Google Sign-In button */}
          </div>
          <div className="flex flex-row items-center gap-2">
            <hr className="w-[198px] h-0 border-t border-[#D6DDEB]" />
            <p className="font-epilogue text-base font-normal leading-7 text-center text-[#909298]">
              Or Sign Up with Email
            </p>
            <hr className="w-[198px] h-0 border-t border-[#D6DDEB]" />
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="signup-form flex flex-col gap-4 w-1/2">
            <div className="flex flex-col gap-2">
              <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
                placeholder="Enter your full name"
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                    message: "Incorrect email format",
                  },
                })}
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
                placeholder="Enter email address"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
                placeholder="Enter password"
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                {...register("confirmPassword", { required: "Confirm password is required" })}
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
                placeholder="Enter password"
              />
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            </div>
            <button type="submit" className="bg-[#23206f] text-white rounded-[80px] w-full py-2">
              Continue
            </button>
          </form>
          <p className="text-red-500">{errorMessage}</p>
          <p className="font-epilogue text-base font-normal leading-[25.6px] text-[#202430] text-left my-2">
            Already have an account?{" "}
            <Link href="/Login" className="text-[#23206f]">
              Login
            </Link>
          </p>
          <p className="w-full text-left text-[#7C8493]">
            By clicking 'Continue', you acknowledge that you have read and accepted our{" "}
            <Link href="/terms" className="text-[#23206f]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#23206f]">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
};

export default UserForm;
