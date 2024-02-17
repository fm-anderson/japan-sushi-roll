import { useLoaderData } from "react-router-dom";

function StatusBadge() {
  const { isOpenNow } = useLoaderData();

  return (
    <span
      className={`badge badge-${isOpenNow ? "primary" : "accent"} font-mono font-bold align-middle text-primary-content`}
    >
      {isOpenNow ? "open now" : "closed"}
    </span>
  );
}

export default StatusBadge;
