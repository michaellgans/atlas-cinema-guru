// ActivityFeed Component
"use client";

// Asset Imports
import { ActivityItem } from "./ActivityItem";
import { useActivity } from "./ActivityContext";

// Returns a ActivityFeed Component
export function ActivityFeed() {
  // Define Hook
  const { activities } = useActivity();

  return (
    <div className="mb-7 flex w-52 flex-col justify-center rounded-lg bg-lumi-teal">
      <h2 className="px-6 py-4 text-center text-xl font-bold">
        Latest Activity
      </h2>
      <div className="px-2">
        {activities.map((activity) => (
          <ActivityItem
            key={`${activity.id}-${activity.collection}`}
            id={activity.id}
            title={activity.title}
            collection={activity.collection}
          />
        ))}
      </div>
    </div>
  );
}
