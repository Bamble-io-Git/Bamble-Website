import { useReducer } from "react";

const INITIAL_STATE = {
  isOpen: false,
  isClose: false,
};
interface IInitialState {
  isOpen: boolean;
  isClose: boolean;
}

type TAction<T extends IInitialState> = {
  [K in keyof IInitialState]: { type: K; payload: T[K] };
}[keyof IInitialState];

const useModal = () => {
  const [state, dispatch] = useReducer(
    (state: IInitialState, action: TAction<IInitialState>) => {
      switch (action.type) {
        case "isOpen":
          return {
            ...state,
            isOpen: action.payload,
          };
        case "isClose":
          return {
            ...state,
            isOpen: action.payload,
          };

        default:
          return state;
      }
    },
    INITIAL_STATE,
  );

  const handleIsOpen = () => {
    dispatch({ type: "isOpen", payload: true });
  };

  const handleIsClose = () => {
    dispatch({ type: "isClose", payload: false });
  };

  return { state, handleIsOpen, handleIsClose };
};

export default useModal;
