import { FC } from "react";
import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";
import { RenderImage } from "./RenderImage";

import { useTranslation } from "react-i18next";

export const RenderPhoto: FC = () => {
  const { t } = useTranslation("global");
  //6 random Pictures
  const { photos } = UseFetchHook(roverData, 6);

  return (
    <div className="photos">
      {photos.map((photo) => (
        <div className="photo-container" key={photo.id}>
          <RenderImage
            src={photo.img_src}
            alt={`${t("imgAlt.p9")} ${photo.id} ${t("imgAlt.p10")} ${
              photo.rover.name
            }`}
            title={`${t("imgTitle.p11")} ${photo.id} ${t("imgTitle.p12")} ${
              photo.rover.name
            }`}
          />
        </div>
      ))}
    </div>
  );
};
