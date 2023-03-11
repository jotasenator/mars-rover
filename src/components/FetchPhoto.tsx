import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";

export const FetchPhoto = () => {
  //6 random Pictures
  const { photos } = UseFetchHook(roverData, 6);

  return (
    <div className="photos">
      {photos.map((photo) => (
        <div className="photo-container" key={photo.id}>
          <img
            src={photo.img_src}
            alt={`This would be picture number ${photo.id} from ${photo.rover.name}`}
            title={`This picture is number ${photo.id} from ${photo.rover.name}`}
            loading={"lazy"}
          />
        </div>
      ))}
    </div>
  );
};
