"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
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
        onClick={onLogin}
        className="p-2 m-3 border border-gray-200 rounded-lg rounded-b-lg"
      >
        Login here
      </button>

      <Link href="/signup">visit signup page</Link>
    </div>
  );
}
