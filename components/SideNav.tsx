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
    <div className="flex w-64 flex-col bg-lumi-dark-teal text-lumi-navy">
      <NavBar />
      <div className="flex justify-center">
        <ActivityFeed />
      </div>
    </div>
  );
}
