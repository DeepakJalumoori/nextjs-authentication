"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="bg-amber-50 text-black"
      />
      <label htmlFor="email">email</label>
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className=" bg-amber-50 text-black"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="bg-amber-50 text-black"
      />
      <button
        onClick={onSignup}
        className="p-2 m-3 border border-gray-200 rounded-lg rounded-b-lg"
      >
        Signup here
      </button>

      <Link href="/login">visit login page</Link>
    </div>
  );
}
