import { useLoaderData } from "react-router-dom";

function StatusBadge() {
  const { isOpenNow } = useLoaderData();
  const color = isOpenNow ? "badge-primary" : "badge-accent";

  return (
    <span
      className={`badge ${color} font-mono font-bold align-middle text-primary-content`}
    >
      {isOpenNow ? "open now" : "closed"}
    </span>
  );
}

export default StatusBadge;
