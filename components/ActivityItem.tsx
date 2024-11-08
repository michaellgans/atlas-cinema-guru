// ActivityItem Component
"use client";

// Asset Imports
import { useState, useEffect } from "react";

// Types
type ActivityItemProps = {
  id: string;
  title: string;
  collection: string;
};

// Returns a ActivityItem Component
export function ActivityItem({ id, title }: ActivityItemProps) {
  // Define Hook
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(today);
    const formatDate = today.toLocaleDateString();

    setCurrentDate(formatDate);
    setCurrentTime(timeStamp);
  }, []);

  return (
    <div className="mb-2 font-medium">
      <p>
        {currentDate}, {currentTime}
      </p>
      <p>
        Added <span className="font-bold">{title}</span> to watch later
      </p>
    </div>
  );
}
