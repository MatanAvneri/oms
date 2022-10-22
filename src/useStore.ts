import create from "zustand";

import { State, StateCreator } from "zustand";
import produce, { Draft } from "immer";

const immer =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === "function"
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T);
        return set(nextState, replace);
      },
      get,
      api
    );

export interface SupportedStyles {
  fontSize: number;
  imageSize: number;
  fontColor: string;
  isBorder: boolean;
  innerBorderSize: number;
  innerBorderColor: string;
}

interface AppState {
  name: string;
  role: string;
  phone: string;
  website: string;
  logo?: string;
  setData: (values: {
    name: string;
    role: string;
    phone: string;
    website: string;
    logo: string;
  }) => void;
  setValue: (
    name: "name" | "role" | "phone" | "website" | "logo",
    value: string
  ) => void;
  styles: SupportedStyles;
  setStyle: (values: Partial<SupportedStyles>) => void;
}

const useStore = create<AppState>(
  immer((set) => ({
    name: "Robert L. Sarvis",
    role: "Software Engineer",
    phone: "702-216-9084",
    website: "belekgrup.com",
    setData: (values) =>
      set((state) => {
        state.name = values.name;
        state.role = values.role;
        state.phone = values.phone;
        state.website = values.website;
        return state
      }),
    setValue: (name, value) =>
      set((state) => {
        state[name] = value;
        return state
      }),
    styles: {
      fontSize: 13,
      innerBorderSize: 1,
      imageSize: 100,
      fontColor: "#000",
      innerBorderColor: "#000",
      isBorder: true,
    },
    setStyle: (values) =>
      set((state) => {
        state.styles = {
          ...state.styles,
          ...values,
        };
        return state
      }),
  }))
);

export default useStore;
