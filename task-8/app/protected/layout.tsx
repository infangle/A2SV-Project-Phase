// src/protected/layout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...next-auth]/options';
import Home from "./page";
import AuthProvider from "./AuthProvider";
import React from 'react';

const Layout = async () => {
  // Get the server session using the authOptions object
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider session={session}>
      <Home />
    </AuthProvider>
  );
}

export default Layout;
