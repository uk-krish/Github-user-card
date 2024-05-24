"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "./UserCard";
import Link from "next/link";
import "./globals.css";
const url = "https://api.github.com/users/";
interface UserDetails {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string|any;
  created_at: string;
  blog: string;
}

const Search_Profile = async (username: string): Promise<UserDetails> => {
  const response = await fetch(`${url}${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
};

export default function SearchBar() {
  const [UserExit, SetUserExit] = useState<boolean>(false);
  const [Username, SetUsername] = useState<string>("");
  const [Details, SetDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    Search_Profile('uk-krish')
      .then((data) => {
        SetUserExit(true);
        SetDetails({
          login: data.login,
          avatar_url: data.avatar_url,
          name: data.name,
          company: data.company,
          location: data.location,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          public_repos: data.public_repos,
          html_url: data.html_url,
          created_at: data.created_at,
          blog: data.blog,
        });
      })
      .catch(() => {
        SetUserExit(false);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Search_Profile(Username)
      .then((data) => {
        SetUserExit(true);
        SetDetails({
          login: data.login,
          avatar_url: data.avatar_url,
          name: data.name,
          company: data.company,
          location: data.location,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          public_repos: data.public_repos,
          html_url: data.html_url,
          created_at: data.created_at,
          blog: data.blog,
        });
      })
      .catch(() => {
        SetUserExit(false);

      });
  };

  return (
    <div className="w-full p-5">
      <form className="flex w-full max-w-[500px] mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          className="flex items-center px-4 py-2 rounded-lg w-full max-w-[500px] focus-within:shadow-md border-2 border-[#27272A] transition-all duration-300 ease-in-out"
        >
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={Username}
            onChange={(e) => SetUsername(e.target.value)}
            className="outline-none focus:outline-none bg-transparent ml-2"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="bg-[#27272A] text-white px-4 py-2 rounded-lg ml-2 transition-all duration-300 ease-in-out hover:bg-[#1A1A1D]"
        />
      </form>
      <div className="align_middle">
        {UserExit && Details ? <UserCard Details={Details} /> : <p className="text-white text-center text-2xl">User not found, You need to Create a 
        <Link 
         href={'https://github.com/signup?source=login'}
         target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline cursor-pointer ml-2"
        >
         Account Here 👉
        </Link> 
        </p>}
      </div>
    </div>
  );
}
