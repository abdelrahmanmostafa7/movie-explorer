"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import TopBar from "./TopBar";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone </span>
        </Link>
      </div>

      {/* Trend & Top Rated Links */}
      <div className="flex items-center">
        <TopBar />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="flex gap-4 text-xl items-center">
        <li className="hidden sm:block hover:text-red-500">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block hover:text-red-500">
          <Link href={"/favorites"}>Favorites</Link>
        </li>
        <li className="hidden sm:block hover:text-red-500">
          <Link href={"/about"}>About</Link>
        </li>

        {/* Auth Buttons */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="hidden sm:block cursor-pointer hover:text-red-500">
              SignIn
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="hidden sm:block">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>

        {/* Mobile Menu Button + User Avatar */}
        <div className="sm:hidden flex items-center gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? "X" : "≡"}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
