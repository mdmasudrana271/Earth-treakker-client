import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="bg-sky-500">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">
            Life is short, and the <br /> world is wide
          </h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl font-bold dark:text-white">
            Discover Your Right Place With Us
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
            >
              <Link to='/destination'>Destination</Link>
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=740&t=st=1666430631~exp=1666431231~hmac=6ddf8b2b14821870964ec6be5801445b9d3771c97a7da8eb8f267aad8d8a7177"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Home;
