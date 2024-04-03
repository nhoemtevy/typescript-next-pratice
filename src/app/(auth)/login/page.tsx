"use client";
import React from 'react'
import {Formik, Form, ErrorMessage} from "formik"
import * as Yup from "yup"

const userSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is = required"),
  age: Yup.number().required("Age is required")
});

const page = () => {
  const handleSubmit = (values: any) => {
    try {
      fetch("https://dummyjson.com/users/add", {
        method: "POST", 
        headers: {}
      })
    }
  };
  return (
    <div>
      Login page
    </div>
  )
}

export default page
