import { useState, useEffect } from "react";
import { roverData } from "../data/roverData";
import { RoverData } from "../interfaces/interfaces";

export const FetchPhoto = () => {
  const [photos, setPhotos] = useState<RoverData[]>([]);

  useEffect(() => {
    console.log(roverData.length);
    setPhotos(roverData.slice(0, 6));
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
