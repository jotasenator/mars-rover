import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types/types";

interface Props {
  showMsg: string;
  reloadMsg: string;
}

export const RefreshButton: FC<Props> = ({ showMsg, reloadMsg }) => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.increaseReducer);

  return (
    <div className="wrapper">
      <a
        href="#"
        onClick={(e) => {
          dispatch({ type: types.increase });
          e.preventDefault();
        }}
      >
        <span>{value > 0 ? reloadMsg : showMsg}</span>
      </a>
    </div>
  );
};
