import React, { useEffect } from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import "./globals.css";
export default function UserCard({ Details }: { Details: any }) {
  return (
    <div className="text-white  border-2  w-full mx-auto max-w-[550px] p-8  flex justify-between align-middle items-center border-[#27272A]  rounded-xl shadow-md transition-all duration-300 ease-in-out container">
      <div className="image">
        <Image
          src={Details.avatar_url}
          alt="Picture of the author"
          width={150}
          height={150}
          className="rounded-full "
        />
      </div>
      <div className="details ml-10 -mt-3 w-full ">
        <h1 className="text-3xl font-bold text-center">{Details.name}</h1>
        <div className="flex justify-between ml-3 mt-3">
          {Details.location ? (
            <p className="items-center">
              {" "}
              <LocationOnIcon className="mr-2" />
              {Details.location}{" "}
            </p>
          ) : (
            <p></p>
          )}
          {Details.created_at ? (
            <p className="items-center justify-center align-middle">
              <CalendarMonthIcon className="mr-2" />
              {Details.created_at.slice(0, 10)}
            </p>
          ) : (
            <p></p>
          )}
        </div>
        {Details.bio ? (
          <p className="text-center text-lg mt-3">{Details.bio}</p>
        ) : (
          <p className="text-center text-lg mt-3">Oops! You need a bio🙄</p>
        )}
        <div className="flex justify-between ml-3 mt-3">
          {Details.public_repos ? (
            <p className="items-center">
              {" "}
              <span className="font-bold">Repos: </span>
              {Details.public_repos}{" "}
            </p>
          ) : (
            <p></p>
          )}
          {Details.created_at ? (
            <p className="items-center justify-center align-middle">
              <span className="font-bold">Followers: </span>
              {Details.followers}
            </p>
          ) : (
            <p></p>
          )}
          {Details.created_at ? (
            <p className="items-center justify-center align-middle">
              <span className="font-bold">Followers: </span>
              {Details.following}
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <div className="flex justify-center mt-3">
          {Details.html_url ? (
            <Link
              href={Details.html_url}
              target="_blank"
              className="flex items-center justify-center"
            >
              <GitHubIcon className="mr-2" />
              <p>GitHub</p>
            </Link>
          ) : (
            <p></p>
          )}
          {Details.blog ? (
            <Link
              href={Details.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center ml-3"
            >
              <LanguageIcon className="mr-2" />
              <p>Website</p>
            </Link>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
