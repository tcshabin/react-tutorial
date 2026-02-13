import AuthProvider from "../modules/auth/context/AuthContext";

function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
