"use client";
import { useParams, useRouter } from "next/navigation";
import React, { FormEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ImHome } from "react-icons/im";
import Link from "next/link";
import { editUserData } from "@/Redux/Slice/dataSlice";
import { isAuth } from "@/app/Auth/isAuth";
import LogoutButton from "@/app/Components/LogoutButton";
import Breadcrumbs from "@/app/Components/BreadCrumbs";

const EditUser = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { editUser } = useSelector((state: any) => state.data);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [contact, setContact] = React.useState<string>("");

  useEffect(() => {
    setName(editUser.userInfo?.name);
    setEmail(editUser.userInfo?.email);
    setContact(editUser.userInfo?.contact);
  }, [editUser.isUpdate]);

  const handleUpdateData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      contact: contact,
    };
    const userInfo = {
      data: data,
      id: id,
    };
    dispatch(editUserData(userInfo));
    toast.success("User Updated Successfully", { duration: 1000 });
    router.push("/user-table");
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-neutral-800 font-mono flex flex-col ">
        <div>
          <nav className="w-[100%] h-[8.5vh] flex space-x-4 bg-black text-white shadow-white">
            <p className="w-full mt-3 font-bold flex flex-row text-center">
              <div className="w-[50%] flex">
                <span className=" ml-10">
                  {" "}
                  <ImHome
                    size={20}
                    onClick={() => router.push("/user-dashboard")}
                    className="cursor-pointer"
                  />{" "}
                </span>
                <span>
                  <Link href="/user-form">/ User Form </Link>
                </span>
                <span className="ml-2">
                  {" "}
                  <Link href="/user-table">/ User List </Link>{" "}
                </span>
                <span className="ml-2">/ Update User </span>
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
        <div className="flex flex-col items-center justify-center w-[100%] h-[60%]">
          <div className="flex flex-col items-center justify-center w-96 h-80">
            <h1 className="font-bold-400 text-white underline">Edit User</h1>
            <form className="mt-5" onSubmit={handleUpdateData}>
              <input
                className="bg-neutral-600	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-neutral-600	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-neutral-600	text-white text-sm rounded-3xl block p-2.5 w-64 m-3 "
                type="text"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <button
                type="submit"
                className="text-white bg-neutral-800 border-2 border-cyan-600 hover:bg-cyan-600 
          font-medium rounded-3xl text-sm px-5 py-2.5 ml-[27%] focus:bg-cyan-600 "
              >
                Update User
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default isAuth(EditUser);
