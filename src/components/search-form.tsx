"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };

  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        spellCheck={false}
        onChange={handleChangeSearchText}
        value={searchText}
      />
    </form>
  );
}
