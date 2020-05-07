import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState = {
  districtData: {},
  currentState: "Total",
  stateData: [],
  stateName: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Action

  function changeCurrentState(payload) {
    dispatch({
      type: "CHANGE_CURRENT_STATE",
      payload: payload,
    });
  }
  function updateDistrictData(payload) {
    dispatch({
      type: "UPDATE_DISTRICT_DATA",
      payload: payload,
    });
  }

  function updateDistrictNames(districtArray) {
    dispatch({
      type: "UPDATE_DISTRICT_NAME",
      payload: districtArray,
    });
  }

  function updateStateData(data) {
    dispatch({
      type: "UPDATE_STATE_DATA",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        changeCurrentState,
        updateDistrictNames,
        updateDistrictData,
        updateStateData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
