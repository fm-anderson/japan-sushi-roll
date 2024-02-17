import { useLoaderData } from "react-router-dom";

function Featured() {
  const { featured } = useLoaderData();
  const data = featured[0];

  return (
    <div className="mx-4 my-1">
      <div className="card image-full card-bordered card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-full" src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{data.title}</h2>
          {data.desc && <p>{data.desc}</p>}
          {data.price && (
            <p className="text-lg">
              <span
                className={`${data.discount ? "text-xl text-accent line-through" : "text-2xl"}`}
              >
                {data.price}
              </span>
              <span className="text-2xl"> {data.discount}</span>
            </p>
          )}
          <div className="card-actions justify-end">
            <a
              href={data.actionLink}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              {data.action.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
