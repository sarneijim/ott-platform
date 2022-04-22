import { Link } from "react-router-dom";

function Card({data}) {
  return (
    <div class="relative block bg-white rounded-lg shadow-lg mb-6">
      <a href="#!">
      <Link to={`/details/${data.name}`} state={data}>
      <div class="flex">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src={data.assetImage} class="w-full" />
            
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
        
          </div>
        </div>
        <div class="p-6">
          <h5 class="font-bold text-lg mb-3">{data.name}</h5>
          <p class="text-gray-500 mb-4">
            <small>Duration: {data.duration/60} min</small>
          </p>
          <p class="mb-4 line-clamp-2">
            {data.description}
          </p>
      </div>
      </Link>
      </a>
    </div>
  );
}

export default Card;
