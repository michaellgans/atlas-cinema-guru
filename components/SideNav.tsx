// SideNav Component

// Asset Imports
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
    <div className="w-46 bg-lumi-dark-teal text-lumi-navy">
      <NavBar />
      <div>this is a test</div>
      <div>This should appear under that</div>
    </div>
  );
}
