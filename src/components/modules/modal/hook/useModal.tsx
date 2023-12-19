import { useReducer } from "react";

const INITIAL_STATE = {
  isOpen: false,
};
interface IInitialState {
  isOpen: boolean;
}
type TAction = any;
const useModal = () => {
  const [state, dispatch] = useReducer(
    (state: IInitialState, action: TAction) => {
      switch (action.type) {
        case "OPEN":
          return {
            ...state,
            isOpen: true,
          };
        case "CLOSE":
          return {
            ...state,
            isOpen: false,
          };

        default:
          return state;
      }
    },
    INITIAL_STATE,
  );

  const handleIsOpen = () => {
    dispatch({ type: "OPEN" });
  };

  const handleIsClose = () => {
    dispatch({ type: "CLOSE" });
  };

  return { state, handleIsOpen, handleIsClose };
};

export default useModal;
