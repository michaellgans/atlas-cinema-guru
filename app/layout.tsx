// Layout for Home Page

// Imports
import "@/app/global.css";
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
    <html lang="en">
      <body className={`antialiased  bg-[#00003c] text-white`}>
        {/* HEADER */}
        <Header />
        {/* SIDE NAV & HOME PAGE */}
        <div>
          {/* SIDE NAV */}
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
