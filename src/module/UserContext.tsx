import React, { createContext, useContext, useState } from "react";

interface IUser {
  user: any;
  CurrentUser: () => void;
  LogOutUser: () => Promise<any>;
}

const UserContext = createContext<IUser>({
  user: null,
  CurrentUser() {
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

  // const CurrentUser = async (userId: any) => {

  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/current/${userId}`, {
  //       method: "GET",
  //       headers: { "Content-type": "application/json" },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch user data");
  //     }
  //     const userData = await response.json();
  //     setUser(userData);
  //   } catch (err) {
  //     console.error("An error occurred:", err);
  //   }
  // };

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
