"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { ImHome } from "react-icons/im";
import { deleteUser, updateUser } from "@/Redux/Slice/dataSlice";
import { isAuth } from "../Auth/isAuth";
import LogoutButton from "../Components/LogoutButton";
import Breadcrumbs from "../Components/BreadCrumbs";

const UserList = () => {
  const { userData } = useSelector((state: any) => state.data);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleEditUser = (item: any, index: number) => {
    dispatch(updateUser(item));
    router.push(`/user-table/${index}`);
  };

  const handleDeleteUser = (index: number) => {
    toast((t) => (
      <span style={{ width: "20vw" }}>
        <b>Are you sure you want to delete this user?</b>
        <br />
        <button className="dismissButton" onClick={() => toast.dismiss(t.id)}>
          Dismiss
        </button>
        <button
          className="deleteButton"
          onClick={() => {
            dispatch(deleteUser(index));
            toast.success("User Deleted Successfully", { duration: 1000 });
            toast.dismiss(t.id);
          }}
        >
          Delete
        </button>
      </span>
    ));
  };

  return (
    <>
    <div className="w-[100vw] h-[100vh] bg-neutral-800 font-mono flex flex-col ">
      <div >
        <nav className="w-[100%] h-[8.5vh] flex space-x-4 bg-black text-white shadow-white">
          <p className=" w-full mt-3 font-bold flex flex-row text-center">
            <div className="w-[50%] flex">
            <span className=" ml-10">
              {" "}
              <ImHome size={20} onClick={()=> router.push("/user-dashboard")} className="cursor-pointer"/>{" "}
            </span>
            <span>
              <Link href="/user-form">/ User Form </Link>
            </span>
            <span >
              {" "}
              <Link href="/user-table">/ User List </Link>{" "}
            </span>
            </div>
            {/* <Breadcrumbs
               homeElement={'Home'}
               separator={<span> | </span>}
               activeClasses='text-amber-500'
               containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600' 
               listClasses='hover:underline mx-2 font-bold'
               capitalizeLinks/> */}
            <div className="w-[50%] flex ">
            <span className="ml-[80%]">
              <LogoutButton />
            </span>
            </div>
          </p>
        </nav>
      </div>
      <div
        className="mt-5 flex flex-col pt-8 items-center ml-56 w-2/3 mr-10"
      >
        <h1 className="font-bold-300 underline text-white">User List</h1>
        <div className="flex flex-col items-center m-5 w-full h-auto">
          {userData.length > 0 ? (
            <>
              <table className="text-md text-left mt-5 
              table-auto shadow-md  rounded border-separate border-spacing-y-4">
                <thead>
                  <tr className="rounded-3xl">
                    <th className="mx-3 px-6 py-3 text-cyan-600">S No.</th>
                    <th className="mx-3 px-6 py-3 text-cyan-600">Name</th>
                    <th className="mx-3 px-6 py-3 text-cyan-600">Email</th>
                    <th className="mx-3 px-6 py-3 text-cyan-600">Contact</th>
                    <th className="mx-3 px-6 py-3 text-cyan-600">Update</th>
                    <th className="mx-3 px-6 py-3 text-cyan-600">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((item: string, index: number) => {
                    return (
                      <>
                        <tr
                          className="border-0 row-radius"
                          key={index}
                        >
                          <td className="text-center text-white px-3">{index + 1}</td>
                          <td className="text-center text-white px-3">{item?.name}</td>
                          <td className="text-center text-white px-3">{item?.email}</td>
                          <td className="text-center text-white px-3">{item?.contact}</td>
                          <td className="text-center text-white px-3">
                            <button
                              className="bg-yellow-600 h-8 text-black rounded-full w-[6vw]"
                              onClick={() => handleEditUser(item, index)}
                            >
                              Update
                            </button>
                          </td>
                          <td className="text-center ">
                            <button
                              className="bg-red-700 h-8 text-white rounded-full w-[6vw]"
                              onClick={() => handleDeleteUser(index)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              <button
                className="h-10 mt-12 text-white rounded-full w-36  border-2 
                border-cyan-600 hover:bg-cyan-600"
                onClick={() => router.push("/user-form")}
              >
                Add Data
              </button>
            </>
          ) : (
            <>
              <p className="font-bold-300 text-white">[No Data Yet]</p>
              <button
                className="h-10 mt-12 text-white rounded-full w-36  border-2 
                border-cyan-600 hover:bg-cyan-600"
                onClick={() => router.push("/user-form")}
              >
                Add Data
              </button>
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default isAuth(UserList);
