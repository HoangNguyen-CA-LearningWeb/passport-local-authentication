import React, { useState } from 'react';
export const userContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
