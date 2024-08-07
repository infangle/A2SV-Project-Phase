// middleware.ts or middleware.js

import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Custom middleware logic can be added here if needed
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Customize the authorization logic
        if (
          req.nextUrl.pathname.startsWith('/protected') && // Check if the path requires authentication
          token === null // Check if the user is authenticated
        ) {
          return false; // Deny access if the user is not authenticated
        }
        return true; // Allow access if the user is authenticated or the path doesn't require authentication
      }
    }
  }
);
