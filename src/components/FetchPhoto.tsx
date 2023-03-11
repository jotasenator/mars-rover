import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";

export const FetchPhoto = () => {
  //6 random Pictures
  const { photos } = UseFetchHook(roverData, 6);

  return (
    <>
      {photos.map((photo) => (
        <div key={photo.id}>
          <div>{`This picture is number ${photo.id} from ${photo.rover.name}`}</div>
          <img
            src={photo.img_src}
            alt={`This picture is number ${photo.id}from ${photo.rover.name}`}
            width="25%"
          />
        </div>
      ))}
    </>
  );
};
