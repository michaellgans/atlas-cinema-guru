// NavBar Component

// Asset Imports
import { ClockIcon } from "./ClockIcon";
import { FolderIcon } from "./FolderIcon";
import { StarIcon } from "./StarIcon";

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
      <div className="flex">
        <FolderIcon />
        <p className="pl-2">Home</p>
      </div>
      <div className="flex py-6">
        <StarIcon />
        <p className="pl-2">Favorites</p>
      </div>
      <div className="flex">
        <ClockIcon />
        <p className="pl-2">Watch Later</p>
      </div>
    </div>
  );
}
