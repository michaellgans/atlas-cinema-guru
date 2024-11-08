// Header Component
"use client";

// Asset Imports
import { FilmIcon } from "./FilmIcon";
import { LogoutIcon } from "./LogoutIcon";
import { signOut } from "next-auth/react";

// Returns a Header Component
export function Header() {
  // Define Hook
  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="text-large flex h-16 items-center justify-between bg-lumi-teal px-4 font-poppins text-lumi-navy">
      {/* TITLE AND ICON */}
      <div className="flex items-center">
        <FilmIcon />
        <h1 className="pl-3 text-2xl font-bold">Cinema Guru</h1>
      </div>
      {/* WELCOME AND LOGOUT */}
      <div className="flex font-medium">
        <h3 className="pr-3">Welcome, email.name@hotmail.com!</h3>
        <button
          onClick={handleLogout}
          className="flex items-center hover:text-white"
        >
          <LogoutIcon />
          <p className="pl-1">Logout</p>
        </button>
      </div>
    </div>
  );
}
