import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ClientFavorites from "./ClientFavorites";

export default async function FavoritesPage() {
  // Check if the user is authenticated
  // If not authenticated, redirect to sign-in page
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Movies ❤️</h1>
      <ClientFavorites />
    </div>
  );
}
