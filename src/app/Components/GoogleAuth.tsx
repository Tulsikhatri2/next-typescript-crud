import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginData } from "@/Redux/Slice/dataSlice";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const GoogleAuth = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter()
  useEffect(() => {
    if (session) {
      dispatch(googleLoginData(session?.user));
    }
  }, [session]);

  const handleGoogleLogin = () => {
    signIn();
    const random = Math.random().toString(36).substring(2);
    localStorage.setItem("token", random + random + random);
    router.push("/user-form")
  };

  return (
    <>
      <div
        onClick={() => handleGoogleLogin()}
        className="w-[50%] h-[10%] flex flex-row items-center 
                hover:bg-blue-950 bg-blue-800 cursor-pointer mt-4 rounded"
      >
        <div
          className="bg-blue-950 w-[20%] w-8 h-[100%] flex items-center
                justify-center rounded"
        >
          <FaGoogle color="white" />
        </div>

        <div className="text-white w-[80%] text-center text-xs">
          Login with GOOGLE
        </div>
      </div>
    </>
  );
};

export default GoogleAuth;
