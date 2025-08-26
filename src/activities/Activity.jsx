import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export function Activity({ activity }) {
  const { token } = useAuth();
  const {
    mutate: deleter,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activity.id);

  return (
    <li>
      <p>{activity.name}</p>
      {token && (
        <button onClick={() => deleter()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </li>
  );
}
