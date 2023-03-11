import { FC } from "react";

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <>
      <p className="title">{title}</p>
    </>
  );
};
