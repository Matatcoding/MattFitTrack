import useQuery from "../api/useQuery";
import { Activity } from "./Activity";

export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}
