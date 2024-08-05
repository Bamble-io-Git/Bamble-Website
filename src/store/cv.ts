//@ts-nocheck
import { create } from 'zustand';

import { createJSONStorage, persist } from 'zustand/middleware';
import { TCV } from './useProductsStore';

export type TState = {
  cv: TCV[];
  step: number;
  totalAmount: number;
};

type TActions = {
  addToCV: (product: TCV) => void;
  removeFromcv: (product: TCV) => void;
  updatecvQuantity: (id: number, quantity: number) => void;
  clearcv: () => void;
};

export const useCvStore = create(
  persist<TState & TActions>(
    (set, get) => ({
      cv: [],
      step: 0,
      totalAmount: 0,
      addToCV: (cv: TCV) => {
        set((state: any) => {
          const cvState = state.cv;

          const cvStep = state.step;

          const immutableState = [...cvState];

          let itemToUpdate: any = immutableState.find(
            (elem) => elem?._id === cv?._id
          );

          if (itemToUpdate) {
            itemToUpdate.step = 1;
            itemToUpdate.fullName = cv.fullName;
            itemToUpdate.email = cv.email;
            itemToUpdate = cv.step;
          } else {
            cv.step = 1;
            immutableState.push(cv);
          }

          return {
            cv: immutableState,
            cvStep: cvStep,
          };
        });
      },

      incrementSteps: () => {
        set((state: any) => {
          return {
            step: Number(state.step) + 1,
          };
        });
      },

      decrementSteps: () => {
        set((state: any) => {
          return {
            step: Number(state.step) - 1,
          };
        });
      },

      removeFromcv: (product: TCV) => {
        set((state: Pick<TState, 'cv' | 'totalAmount' | 'step'>) => ({
          cv: state.cv.filter((elem) => elem?._id !== product?._id),
          totalAmount: 0,
          step: 0,
        }));
      },

      updatecvQuantity: (id: number, quantity: number) => {
        const cvState = get().cv;

        const immutableState = [...cvState];

        if (cvState.length > 0) {
          let itemToUpdate: any = immutableState.find(
            (elem) => elem?._id === id
          );

          if (itemToUpdate) {
            itemToUpdate.quantity = quantity;

            set({
              cv: immutableState,
              totalAmount: cvState?.totalAmount + 1,
              step: cvState?.step * quantity,
            });
          }
        }
      },
      clearcv: () => {
        set({
          cv: [],
          step: 0,
          totalAmount: 0,
        });
      },
    }),
    {
      name: 'cv-state',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
