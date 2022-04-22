import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import TimeChart from "../components/TimeChart";

const Home = () => {
  let [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch film catalog
      const data = await fetch(
        "https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data"
      )
        .then(res => res.json())
        .then(res => {
          return res;
        })
        .catch(error => console.error(error));

      setCards(data.map((item, i) => <Card key={i} data={item} />));
    }

    fetchData();
  });

  return (
    <div>
      <div class="container my-8 px-6 mx-auto">
        <section class="mb-4 text-gray-800">
          <h2 class="text-3xl font-bold mb-12 text-center">Daily Viewers</h2>
          <div class="w-full relative block bg-white rounded-lg shadow-lg mb-6 px-10 py-10">
            <TimeChart />
          </div>
        </section>

        <section class="text-gray-800">
          <h2 class="text-3xl font-bold mb-12 text-center">Top Movies</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
