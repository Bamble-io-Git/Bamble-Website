//@ts-nocheck
import { create } from 'zustand';

import { createJSONStorage, persist } from 'zustand/middleware';
import { TProduct } from './useProductsStore';

export type TState = {
  cv: TProduct[];
  step: number;
  totalAmount: number;
};

type TActions = {
  addToCV: (product: TProduct) => void;
  removeFromcv: (product: TProduct) => void;
  updatecvQuantity: (id: number, quantity: number) => void;
  clearcv: () => void;
};

export const useCvStore = create(
  persist<TState & TActions>(
    (set, get) => ({
      cv: [],
      step: 0,
      totalAmount: 0,
      addToCV: (product: TProduct) => {
        set((state: any) => {
          const productIncv = state.cv.findIndex(
            (elem: TProduct) => elem?._id === product?._id
          );

          product['quantity'] = 1;
          if (productIncv > -1) {
            const updatedcv = state.cv.map((elem: TProduct) => {
              if (elem?._id === product?._id) {
                return {
                  ...elem,
                  quantity: elem?.quantity + 1,
                };
              } else {
                return elem;
              }
            });

            return {
              cv: updatedcv,
              totalAmount: state.totalAmount + 1,
              step: state.step + product?.price,
            };
          } else {
            return {
              cv: [...state.cv, { ...product, quantity: product?.quantity }],
              totalAmount: state.totalAmount + 1,
              step: state.step + product?.price,
            };
          }
        });
      },

      removeFromcv: (product: TProduct) => {
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
