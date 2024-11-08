// NavBar Component
"use client";

// Asset Imports
import { ClockIcon } from "./ClockIcon";
import { FolderIcon } from "./FolderIcon";
import { StarIcon } from "./StarIcon";
import Link from "next/link";

// Script Imports

// Types
// type NavBarProps = {
//     prop: type;
//     prop: type;
// };

// Returns a NavBar Component
export function NavBar() {
  // Define Hook
  return (
    // NAV CONTAINER
    <div className="flex flex-col p-7 font-poppins text-white">
      <Link href="/" className="flex">
        <FolderIcon />
        <p className="hidden pl-2 group-hover:block">Home</p>
      </Link>
      <Link href="/favorites" className="flex py-6">
        <StarIcon onClick={() => {}} />
        <p className="hidden pl-2 group-hover:block">Favorites</p>
      </Link>
      <Link href="/watch-later" className="flex">
        <ClockIcon onClick={() => {}} />
        <p className="hidden pl-2 group-hover:block">Watch Later</p>
      </Link>
    </div>
  );
}
