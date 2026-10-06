"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logout successfull.");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/userData");
      console.log(res.data);
      setUserData(res.data.user[0]. username);
    } catch (error) {}
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <hr />
      <h2 className="p-1 rounded bg-green-500">
        {userData === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${userData}`}>{userData}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        User Details
      </button>
    </div>
  );
}
