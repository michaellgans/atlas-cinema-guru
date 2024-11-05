// Header Component

// Asset Imports
import { FilmIcon } from "./FilmIcon"
import { LogoutIcon } from "./LogoutIcon";

// Script Imports

// Types
// type HeaderProps = {
//     children: React.ReactNode;
// };

// Returns a Header Component
export function Header() {
    // Define Hook
    return (
        <div className="flex justify-between">
            {/* TITLE AND ICON */}
            <div className="flex">
                <FilmIcon />
                <h1>Cinema Guru</h1>
            </div>
            {/* WELCOME AND LOGOUT */}
            <div className="flex">
                <h3>Welcome, email.name@hotmail.com!</h3>
                <LogoutIcon />
                <p>Logout</p>
            </div>
        </div>
    );
}
