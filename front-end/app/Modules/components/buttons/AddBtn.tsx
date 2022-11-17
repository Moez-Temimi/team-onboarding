import CarAddForm from "../forms/car/CarAddForm";
import React, { useState } from "react";
import UserAddForm from "../forms/user/UserAddForm";
import BrandAddForm from "../forms/brand/BrandAddForm";

export default function AddBtn(props: any) {
  const [hide, setHide] = useState("");

  const handleHideChange = (e: any) => {
    e.preventDefault();
    return setHide(props.type);
  };
  return (
    <>
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        onClick={(e) => {
          handleHideChange(e);
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span className="sr-only">Add</span>
      </button>
      {hide === "car" ? <CarAddForm hide={setHide} user={props.user} /> : <></>}
      {hide === "user" ? <UserAddForm /> : <></>}
      {hide === "brand" ? <BrandAddForm /> : <></>}
    </>
  );
}
