

import React, { createContext, useContext } from 'react'

interface IUser{

}

const  UserContext = createContext<IUser>({

})
export const useUserContext = () => {
    let context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("app dispatch must be used within app global provider");
    }
    return context;
  };

  interface IProps{
    children: React.ReactNode;
  }

export const UserContextProvder:React.FC<IProps> = ({children}) => {
  return (
    <div>UserContext</div>
  )
}
