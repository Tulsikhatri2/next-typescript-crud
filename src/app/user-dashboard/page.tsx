"use client";

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import Link from "next/link";


const Dashboard = () => {

  const [isProfile, setIsProfile] = React.useState<boolean>(false);
console.log(isProfile)
  
  return (
    <>
    <div className="w-[100vw] h-[100vh] bg-neutral-800 font-mono ">
      <div className="bg-black shadow-3xl">
        <ul className="w-[100vw] flex flex-row text-sm font-medium text-gray-300">
          <span className="w-[50%] pl-10">
          <li>
            <Link
              href="/user-dashboard"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-200 group"
            >
              <svg
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-200 dark:text-gray-500 dark:group-hover:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <FaUserCircle size={20} />
              </svg>
              Profile
            </Link>
          </li>
          </span>
          <span className="w-[50%] flex flex-row justify-end pr-10 ">
          <li>
            <Link
              href="/user-table"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-200 group"
              aria-current="page"
            >
              <svg
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-200 dark:text-gray-500 dark:group-hover:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <HiMiniSquares2X2 size={20} />
              </svg>
              User List
            </Link>
          </li>
          <li>
            <Link
              href="/user-form"
              className="inline-flex items-center hover:text-gray-600 hover:border-gray-300 justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-200 group"
            >
              <svg
                className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-200 dark:text-gray-500 dark:group-hover:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <MdOutlineFormatIndentIncrease size={20} />
              </svg>
              Form
            </Link>
          </li>
          </span>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
