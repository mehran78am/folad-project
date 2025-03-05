import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
}
interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: string;
  imageUrl: string;  
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://karasteh.com/api/index");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
        console.log("err: ",err)
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
