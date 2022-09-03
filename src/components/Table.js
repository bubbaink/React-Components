import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  const data = [
    {
      title: "Billy Elliot",
      length: 123,
      rating: 5,
      genres: ["Drama", "Comedia"],
      awards: 2,
    },
    {
      title: "Alicia En El Pais De Las Maravillas",
      length: 142,
      rating: 4.8,
      genres: ["Drama", "Comedia", "Accion"],
      awards: 3,
    },
  ];
  return (
    <div className="container-fluid mb-4">
      <div className="card shadow">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Duracion</th>
              <th scope="col">Rating</th>
              <th scope="col">Genero</th>
              <th scope="col">Premios</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => (
              <TableRow movie={movie} key={movie.title + index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
