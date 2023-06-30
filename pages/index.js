"use-client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import FloatingButton from "@/components/FloatingButton";

import LandingPage from "@/components/LandingPage/Landingpage";
import HomePage from "@/components/HomePage/HomePage";

const links = [
  { name: "Login", href: "/login/" },
  { name: "Register", href: "/register" },
];
const stats = [
  { name: "Verified Notes", value: "100+" },
  { name: "College Sample Paper", value: "300+" },
  { name: "Active Users", value: "1000+" },
  { name: "Earning for Helpers", value: "Unlimited" },
];

// export async function getServerSideProps(){
//   const res = await axios.get("http://localhost:5000/result", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   const data = await res.data;
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default function Home() {
  // useEffect(() => {
  //   if (typeof window === 'undefined') {
  //     // Server-side rendering (SSR)
  //     console.log('Running on the server');
  //   } else {
  //     // Client-side rendering (CSR)
  //     console.log('Running on the client');
  //   }
  // }, []);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (token) {
      getuser(token);
    }
  }, [token]);
  const getuser = async (token) => {
    try {
      const res = await axios.get("http://localhost:5000/result", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.name === "TokenExpiredError"
      ) {
        alert("token expired! pls login");
      }
    }
  };

  return (
    <>
      {token ? (
        <>
          <Navbar user={user} />
          <HomePage />
          <FloatingButton />
        </>
      ) : (
        <>
          <LandingPage />
        </>
      )}
    </>
  );
}
