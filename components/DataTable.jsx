"use client";
import React, { useEffect, useState, useMemo } from "react";

const DataTable = ({ initialPosts, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredPosts = useMemo(
    () =>
      initialPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.id.toString().includes(search)
      ),
    [initialPosts, search]
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className=" rounded-md p-4 shadow h-auto relative bg-[var(--card-bg-color)] text-[var(--text-color)]">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[var(--table-head)]">
          <th className="border p-2 text-sm md:text-base">ID</th>
          <th className="border p-2 text-sm md:text-base">Title</th>
          <th className="border p-2 text-sm md:text-base">Body</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts.map((post) => (
          <tr key={post.id} className="hover:bg-[var(--hover-row)]">
            <td className="border p-2 text-sm md:text-base">{post.id}</td>
            <td className="border p-2 text-sm md:text-base">{post.title}</td>
            <td className="border p-2 text-sm md:text-base">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex flex-col gap-4 md:flex-row justify-between items-center mt-8 md:mt-12">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-orange-500 rounded disabled:opacity-50 cursor-pointer w-full md:w-auto hover:bg-orange-600 font-semibold text-white transition-all"
    >
      Previous
    </button>
    <div className="text-center text-sm md:text-base">
      Page <span className="font-semibold">{currentPage}</span> of {totalPages}
    </div>
    <button
      onClick={() =>
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
      }
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-orange-500 rounded disabled:opacity-50 cursor-pointer w-full md:w-auto hover:bg-orange-600 font-semibold text-white transition-all"
    >
      Next
    </button>
  </div>
</div>

  );
};

export default DataTable;
