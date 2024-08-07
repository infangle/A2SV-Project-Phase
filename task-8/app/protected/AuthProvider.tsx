// src/protected/AuthProvider.tsx
import { SessionProvider } from "next-auth/react";
import React from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
  session: any; // Consider using a more specific type here
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
