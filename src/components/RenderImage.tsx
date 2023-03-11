import { FC } from "react";

interface Props {
  id?: string;
  src: string;
  alt: string;
  title: string;
}

export const RenderImage: FC<Props> = ({ id, src, alt, title }) => {
  return (
    <>
      <img src={src} alt={alt} id={id} title={title} loading={"lazy"} />
    </>
  );
};
