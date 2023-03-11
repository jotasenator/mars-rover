import myInternetSpeed from "../assets/myInternetSpeed.png";
import { RenderImage } from "./RenderImage";

export const Speech = () => {
  return (
    <div className="speech">
      <div>
        <p>
          Any given day in March 2023 in Cuba we have the opportunity to pay
          tribute to two companies. One that is in charge of the internet and
          communications, called Empresa de Telecomunicaciones de Cuba S.A.
          (ETECSA), and the other is in charge of the electricity service,
          called Unión Eléctrica de Cuba (UNE).
        </p>

        <p>
          For this reason, we want to invite their managers, and anyone in
          general who feels happy with the service provided, to travel to an
          extraordinary place:
        </p>
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
