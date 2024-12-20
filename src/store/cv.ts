//@ts-nocheck
import { create } from 'zustand';

import { createJSONStorage, persist } from 'zustand/middleware';
import { TCV } from './useProductsStore';

export type TState = {
  cv: TCV[];
  step: number;
  share: string;
  personal: string | Blob;
  experience: string | Blob;
  pdf: any;
  linkedinUrl: string;
  jobDescription: string;
};

type TActions = {
  addToCV: (product: TCV) => void;
  removeFromcv: (product: TCV) => void;
  updatecvQuantity: (id: number, quantity: number) => void;
  clearcv: () => void;
  addToShare: (values: string) => void;
  addToPersonalDetails: (values) => void;
  addToWorkExperiences: (values) => void;
  addToPdf: (values) => void;
  addToLinkedinUrl: (values) => void;
  addToJD: (values) => void;
};

export const useCvStore = create(
  persist<TState & TActions>(
    (set, get) => ({
      cv: [],
      step: 0,
      share: '',
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

      addToShare: (value: string) => {
        set((state) => {
          state.share = value;
          return {
            share: value,
          };
        });
      },

      addToPersonalDetails: (value) => {
        set((state) => {
          state.personal = value;
          return {
            personal: value,
          };
        });
      },
      addToWorkExperiences: (value) => {
        set((state) => {
          state.experience = value;
          return {
            experience: value,
          };
        });
      },

      addToPdf: (value) => {
        set((state) => {
          state.pdf = value;
          return {
            pdf: value,
          };
        });
      },
      addToLinkedinUrl: (value) => {
        set((state) => {
          state.linkedinUrl = value;
          return {
            linkedinUrl: value,
          };
        });
      },
      addToJD: (value) => {
        set((state) => {
          state.jobDescription = value;
          return {
            jobDescription: value,
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
    }),
    {
      name: 'cv-state',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
