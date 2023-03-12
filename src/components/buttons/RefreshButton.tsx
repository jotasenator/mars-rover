import { FC } from "react";
import { useDispatch } from "react-redux";
import { types } from "../../redux/types/types";

interface Props {
  buttonText: string;
}

export const RefreshButton: FC<Props> = ({ buttonText }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: types.increase })}>
        {buttonText}
      </button>
    </>
  );
};
