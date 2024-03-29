import DoughnutChart from "../components/DoughnutChart";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();

  // If state is undefined, we would need add a GET to get film details.
  const data = location.state;

  const genre = data.genre.map((genre, i) => {
    return (
      <span
        key={i}
        className="text-s inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded"
      >
        {genre}
      </span>
    );
  });

  return (
    <div className="container my-8 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center lg:text-left">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                src={data.videoImage}
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-4 text-blue-600 display-5">
                  {data.name}
                </h2>
                <p className="text-gray-500">
                  {data.description}
                </p>
                <div className="flex justify-end py-6 ">
                  <h3 className="text-2xl font-bold mb-4 text-black-400 display-5">
                    {data.provider}
                  </h3>
                </div>
                <div className="grid lg:gap-x-12 xl:grid-cols-3 mb-12">
                  <div className="mb-12 md:mb-0 flex flex-col align-center justify-center">
                    <h5 className="text-lg font-medium text-gray-500 mb-0 text-center">
                      Total views
                    </h5>
                    <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
                      {data.totalViews.total}
                    </h2>
                  </div>

                  <div className="char mb-12 md:mb-0 flex flex-row align-center justify-center col-span-2">
                    <div className="w-48">
                      <DoughnutChart data={data.totalViews} />
                    </div>

                    <div className="flex flex-col">
                      <table className="min-w-full text-center">
                        <tbody>
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-teal-800">
                              Peacock
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                              {data.totalViews.peacock}
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-indigo-800">
                              Now Tv
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {data.totalViews["now-tv"]}
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-pink-800">
                              Sky Go
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {data.totalViews["sky-go"]}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 mb-12">
                  <div className="flex space-x-2">
                    {genre}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
