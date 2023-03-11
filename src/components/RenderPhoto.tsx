import { FC } from "react";
import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";
import { RenderImage } from "./RenderImage";

export const RenderPhoto: FC = () => {
  //6 random Pictures
  const { photos } = UseFetchHook(roverData, 6);

  return (
    <div className="photos">
      {photos.map((photo) => (
        <div className="photo-container" key={photo.id}>
          <RenderImage
            src={photo.img_src}
            alt={`This would be picture number ${photo.id} from ${photo.rover.name}`}
            title={`This picture is number ${photo.id} from ${photo.rover.name}`}
          />
        </div>
      ))}
    </div>
  );
};
