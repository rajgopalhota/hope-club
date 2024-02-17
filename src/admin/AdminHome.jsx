import React from "react";
import { useAuth } from "../AuthContext";
import panelImg from "../assets/panel.gif";

export default function AdminHome() {
  const auth = useAuth();
  return (
    <div className="flex items-center justify-center m-10">
      <div className="text-center">
        <img className="mx-auto w-[50%] mb-8" src={panelImg} alt="Full Screen Image" />
        <p className="text-4xl font-bold mb-4">Welcome {auth.user.name}!</p>
        <p className="text-lg">
          "Your {auth.user.role} panel is ready to be used, Dive into it with sidebar"
        </p>
      </div>
    </div>
  );
}
