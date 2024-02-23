import { useRouteLoaderData } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function Info() {
  const { isOpenNow } = useRouteLoaderData("root");

  return (
    <div className="mx-4 my-2 justify-between flex gap-2">
      <div>
        <label htmlFor="hours_modal">
          <span className="badge badge-ghost font-mono font-bold align-middle text-primary-content">
            view hours
          </span>
        </label>
      </div>
      <div>
        <StatusBadge isOpen={isOpenNow} />
      </div>
    </div>
  );
}

export default Info;
