import { logoutUser } from "@/Redux/Slice/dataSlice";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const LogoutButton = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const handleLogout = () => {
        toast((t) => (
          <span style={{ width: "20vw" }}>
            <b>Are you sure you want to logout?</b>
            <br />
            <button
              className="dismissButton"
              onClick={() => toast.dismiss(t.id)}
            >
              No
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                dispatch(logoutUser())
                router.push("/")
                signOut()
                toast.success("Logged out", { duration: 1000,
                  style:{
                     backgroundColor:"black",
                      color:"white"
                  }
                 });
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>
          </span>
        ),{
          style:{
            marginTop:"15vh",
          }
        });
      };

  return (
    <div>
      <button
        className="text-white bg-red-700 hover:bg-red-800 rounded-3xl 
            text-xs px-5 py-2 h-8 shadow-3xl"
        onClick={() => {
          handleLogout()
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
