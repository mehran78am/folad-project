import React, { createContext, useContext, useEffect, useState } from "react";

interface SiteDetail {
  title: string;
  logo: string;
  phone: string;
  description: string;
  categories: Category[];
}

interface Category {
  id: number;
  title: string;
  header_text: string;
  description: string;
  image: string;
  active: boolean;
}

interface Slider {
  title: string;
  image: string;
  active: boolean;
}

interface Service {
  id: number;
  title: string;
  header_text: string;
  description: string;
  image: string;
  active: boolean;
}

interface Expert {
  name: string;
  unit: string;
  phone_number: string;
  phone: string;
  telegram_id: string;
  profile: string;
}

interface ApiResponse {
  site_details: SiteDetail;
  sliders: Slider[];
  services: Service[];
  experts: Expert[];
  blogs: any[];
}
interface UserContextType {
  users: ApiResponse[];
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<ApiResponse[]>([]);
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
        console.log("data: ", data.site_details.title);
      } catch (err) {
        setError("Failed to fetch users");
        console.log("error: ", err);
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
