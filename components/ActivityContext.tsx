// ActivityContext Component
"use client";

// Asset Imports
import { createContext, useState, useContext } from "react";

// Script Imports

// Types
type ActivityItem = {
  id: string;
  title: string;
  collection: "favorites" | "watch later";
};

interface ActivityContextProps {
  activities: ActivityItem[];
  addActivity: (activity: ActivityItem) => void;
}

const ActivityContext = createContext<ActivityContextProps | undefined>(
  undefined,
);

// Context Provider Componenet
export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  const addActivity = (activity: ActivityItem) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivity must be used within an ActivityProvider");
  }
  return context;
};
