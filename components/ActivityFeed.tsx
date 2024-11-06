// ActivityFeed Component

// Asset Imports
import { ActivityItem } from "./ActivityItem";

// Script Imports

// Types
// type ActivityFeedProps = {
//     prop: type;
//     prop: type;
// };

// Returns a ActivityFeed Component
export function ActivityFeed() {
  // Define Hook
  return (
    <div className="mb-7 flex w-52 flex-col justify-center rounded-lg bg-lumi-teal">
      <h2 className="px-6 py-4 text-center text-xl font-bold">
        Latest Activity
      </h2>
      <div className="px-2">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </div>
    </div>
  );
}
