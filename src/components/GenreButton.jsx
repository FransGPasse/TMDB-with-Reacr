import React from "react";
import { Link } from "react-router-dom";

const GenreButton = ({ data }) => {
  return (
    <div className="grid justify-center place-content-center grid-cols-3 lg:grid-cols-6">
      {data.map((genre) => (
        <Link
          to={`/genres/${genre.id}`}
          key={genre.id}
          className="bg-gray-900 text-white text-center p-3 m-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreButton;
