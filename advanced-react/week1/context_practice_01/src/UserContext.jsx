import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "Brian",
    email: "brian@gmail.com",
    dob: "10/23/1986",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
