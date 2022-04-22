import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="relative block bg-white rounded-lg shadow-lg mb-6">
      <Link to={`/details/${data.name}`} state={data}>
        <div className="flex">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img alt={data.name} src={data.assetImage} className="w-full" />

            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" />
          </div>
        </div>
        <div className="p-6">
          <h5 className="font-bold text-lg mb-2">
            {data.name}
          </h5>
          <div className="text-gray-500 mb-2">
            <small>
              Duration: {data.duration / 60} min
            </small>
          </div>
          <p className="mb-4 line-clamp-2">
            {data.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
