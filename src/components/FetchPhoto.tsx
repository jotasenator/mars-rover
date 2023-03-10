import { useState, useEffect } from "react";
import { roverData } from "../data/roverData";
import { getRandomNumberOfIndexes } from "../helpers/randomNumber";
import { RoverData } from "../interfaces/interfaces";

export const FetchPhoto = () => {
  const [photos, setPhotos] = useState<RoverData[]>([]);

  // setting max number of pictures of 6,
  const newData: RoverData[] = getRandomNumberOfIndexes(roverData, 6);

  useEffect(() => {
    console.log(newData);
    setPhotos(newData);
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.img_src}
            alt={`This picture is number ${photo.id}from ${photo.rover.name}`}
          />
        </div>
      ))}
    </>
  );
};
