import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";

export const FetchPhoto = () => {
  //6 random Pictures
  const { photos } = UseFetchHook(roverData, 6);

  return (
    <>
      {photos.map((photo) => (
        <div className="photos" key={photo.id}>
          <img
            src={photo.img_src}
            alt={`This picture is number ${photo.id} from ${photo.rover.name}`}
            title={`This picture is number ${photo.id} from ${photo.rover.name}`}
          />
        </div>
      ))}
    </>
  );
};
