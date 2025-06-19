import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// ✅ Only protect specific routes (e.g., /settings)
const isProtectedRoute = createRouteMatcher(["/settings(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// ✅ Leave config as-is — it doesn’t enforce protection
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};