import { FC } from "react";
import myInternetSpeed from "../assets/myInternetSpeed.png";
import { RenderImage } from "./RenderImage";

import { useTranslation } from "react-i18next";

export const Speech: FC = () => {
  const { t } = useTranslation("global");

  return (
    <div className="speech">
      <div>
        <p>
          {t("speech.p1")} <time>{t("speech.p2")}</time> {t("speech.p3")}
          <em>{t("speech.p4")}</em>, {t("speech.p5")}
          <em>{t("speech.p6")}</em>.
        </p>

        <p>{t("speech.p7")}:</p>
      </div>
      <div>
        <RenderImage
          id="internet-speed"
          src={myInternetSpeed}
          alt={"glorious internet speed"}
          title={"I should have 4Mb!!"}
        />
      </div>
    </div>
  );
};
