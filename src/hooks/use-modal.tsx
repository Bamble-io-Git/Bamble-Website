import { useReducer } from "react";
import { modalReducer } from "../components/modules/modal/reducer/modal-reducer";

const INITIAL_STATE = {
  isOpen: false,
  isClose: false,
};

const useModal = () => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  const handleIsOpen = () => {
    dispatch({ type: "isOpen", payload: true });
  };

  const handleIsClose = () => {
    dispatch({ type: "isClose", payload: false });
  };

  return { state, handleIsOpen, handleIsClose };
};

export default useModal;
