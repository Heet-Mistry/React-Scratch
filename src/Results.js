import React from "react";
import Pet from "./pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      { !pets.length ? (
          <h2>No Pets found </h2>
       ) : (
                pets.map((pet) => (
                <Pet
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
                key={pet.id}
                images={pet.images}
                location={`${pet.city},${pet.state}`}
                id={pet.id}
                />
                ))
      )}
    </div>
  );
};

export default Results;
