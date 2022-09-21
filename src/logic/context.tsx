import React, { useReducer } from "react";
import { createContext, useContext } from "react";

export const defaultglobalState = {
  user: false,
};

export interface defaultGlobalStateType {
  user: boolean;
}

export const GlobalStateContext = createContext(defaultglobalState);
export const DispatchStateContext = createContext<any>(undefined);

export const GlobalStateProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(
    (state: defaultGlobalStateType, newValue: defaultGlobalStateType) => ({
      ...state,
      ...newValue,
    }),
    defaultglobalState
  );
  return (
    <GlobalStateContext.Provider value={state as defaultGlobalStateType}>
      <DispatchStateContext.Provider
        value={dispatch as React.Dispatch<defaultGlobalStateType>}
      >
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext),
];
