import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
