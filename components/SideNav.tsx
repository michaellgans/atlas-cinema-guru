// SideNav Component

// Asset Imports
import { ActivityFeed } from "./ActivityFeed";
import { NavBar } from "./NavBar";

// Script Imports

// Types
// type SideNavProps = {
//     prop: type;
//     prop: type;
// };

// Returns a SideNav Component
export function SideNav() {
  // Define Hook
  return (
    <div className="duration-400 group flex w-24 flex-col overflow-hidden bg-lumi-dark-teal text-lumi-navy transition-all hover:w-64">
      <NavBar />
      <div className="hidden justify-center group-hover:flex">
        <ActivityFeed />
      </div>
    </div>
  );
}
