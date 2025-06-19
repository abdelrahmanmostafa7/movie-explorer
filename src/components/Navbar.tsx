import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-red-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
      <ul className="flex gap-4">
        <li className="hidden sm:block">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/favorites"}>Favorites</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/about"}>About</Link>
        </li>
        <SignedOut>
          <SignInButton mode="modal">
            <button className=" cursor-pointer   ">
              SignIn
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </ul>
    </div>
  );
};

export default Navbar;
