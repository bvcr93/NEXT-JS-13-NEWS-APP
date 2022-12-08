"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter(); // router from next13
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search/${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keywords..."
        type="text"
        className="dark:text-orange-400 outline-none bg-transparent flex-1 w-full h-14 rounded-sm placeholder-gray-500"
      />
      <button
        className="text-orage-400 disabled:text-gray-400"
        disabled={!input}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
