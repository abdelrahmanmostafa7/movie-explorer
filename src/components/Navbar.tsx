"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import TopBar from "./TopBar";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex gap-1 items-center">
            <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </Link>
        </div>

        {/* Trend & Top Rated Links */}
        <div className="flex items-center">
          <TopBar />
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-4 text-xl items-center">
          <li className="hover:text-red-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/favorites"}>Favorites</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href={"/about"}>About</Link>
          </li>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="cursor-pointer hover:text-red-500">
                SignIn
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </ul>

        {/* Mobile Menu Toggle + Avatar */}
        <div className="sm:hidden flex items-center gap-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? "X" : "≡"}
          </button>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 text-lg flex items-center flex-col z-10 absolute top-16 left-0 w-full bg-black ">
          <Link
            href="/"
            onClick={handleClose}
            className="block hover:text-red-400"
          >
            Home
          </Link>
          <Link
            href="/favorites"
            onClick={handleClose}
            className="block hover:text-red-400"
          >
            Favorites
          </Link>
          <Link
            href="/about"
            onClick={handleClose}
            className="block hover:text-red-400"
          >
            About
          </Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button
                onClick={handleClose}
                className="block mt-2 hover:text-red-400"
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      )}
    </div>
  );
};

export default Navbar;
