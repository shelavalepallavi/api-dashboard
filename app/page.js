"use client";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAppContext } from "./context/SearchContext";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useAppContext();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  

  return (
    <div className="flex flex-col gap-3 h-screen">
  {loading ? (
    <div className="flex justify-center items-center mt-4">
      <svg
        className="animate-spin h-8 w-8 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a10 10 0 100 20v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
        ></path>
      </svg>
    </div>
  ) : (
    <DataTable initialPosts={posts} search={search} />
  )}
</div>

  );
};

export default Page;
