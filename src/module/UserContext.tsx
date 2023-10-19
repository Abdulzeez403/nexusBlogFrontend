import React, { createContext, useContext, useState } from "react";

interface IUser {
  user: any;
  CurrentUser: () => void;
  LogOutUser: () => Promise<any>;
}

const UserContext = createContext<IUser>({
  user: null,
  CurrentUser() {
    return null;
  },
  LogOutUser() {
    return null as any;
  },
});
export const useUserContext = () => {
  let context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const UserContextProvder: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<any>({} as any);

  const CurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") as any);
    setUser(currentUser);
  };

  const LogOutUser = async () => {
    const LogMeOut = localStorage.removeItem("currentUser");
    return LogMeOut;
  };

  return (
    <UserContext.Provider value={{ user, CurrentUser, LogOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
