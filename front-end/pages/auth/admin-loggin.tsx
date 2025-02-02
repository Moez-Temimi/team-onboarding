import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import loginUser from "../../app/Modules/api/user-login";

export default function Login() {
  const [admin, setAdmin] = useState({ email: "", password: "" });

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: (context) => {
      console.log("data", context);
      const message = "Welcome Back";
      alert(message);
      return context;
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr dark:bg-gray-900 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GarageTn</h1>
          <p className="text-white mt-1">
            the Car Gallery that you always want{" "}
          </p>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="text-gray-900 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              onChange={(event) =>
                setAdmin((prevState) => {
                  return { ...prevState, email: event.target.value };
                })
              }
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              placeholder="Password"
              className=" text-gray-900  outline-none border-none"
              type="password"
              name=""
              id=""
              onChange={(event) =>
                setAdmin((prevState) => {
                  return { ...prevState, password: event.target.value };
                })
              }
            />
          </div>
          <Link
            href="/admin/UserManagement"
            type="submit"
            className="block w-full dark:bg-gray-900 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={() => onSubmit(admin)}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
