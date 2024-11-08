// Layout for Home Page

// Imports
import "@/app/global.css";
import { ActivityProvider } from "@/components/ActivityContext";
import { Header } from "@/components/Header";
import { SideNav } from "@/components/SideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <ActivityProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </head>
        <body className={`antialiased  bg-[#00003c] text-white`}>
          {/* HEADER */}
          <Header />
          {/* SIDE NAV & HOME PAGE */}
          <div className="flex flex-row">
            {/* SIDE NAV */}
            <SideNav />
            {children}
          </div>
        </body>
      </html>
    </ActivityProvider>
  );
}
