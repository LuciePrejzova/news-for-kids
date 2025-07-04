import UserContext from "./UserContext";
import { useState, useEffect } from "react";

const getInitialUser = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addFavoriteCategory = (category) => {
    const updatedUser = {
      ...user,
      favorites: [...(user.favorites || []), category]
    };
    setUser(updatedUser);
  }

  const removeFavoriteCategory = (category) => {
    const updatedUser = {
      ...user,
      favorites:(user.favorites || []).filter(cat => cat !== category)
    };
    setUser(updatedUser);
  }

  return (
    <UserContext.Provider value={{ user, login, logout, addFavoriteCategory, removeFavoriteCategory }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
