
interface IInitialState {
  isOpen: boolean;
  isClose: boolean;
}

export type TAction<T extends IInitialState> = {
  [K in keyof IInitialState]: { type: K; payload: T[K] };
}[keyof IInitialState];

export const modalReducer = (
  state: IInitialState,
  action: TAction<IInitialState>,
) => {
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
};
