export default (state, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_STATE":
      // console.log("dispatch current state");
      return { ...state, currentState: action.payload };

    case "UPDATE_DISTRICT_DATA":
      // console.log("dispatch district data");
      return { ...state, districtData: action.payload };

    case "UPDATE_DISTRICT_NAME":
      // console.log("dispatch district name");
      return { ...state, stateName: action.payload };

    case "UPDATE_STATE_DATA":
      // console.log("dispatch state name");
      return { ...state, stateData: action.payload };

    default:
      return state;
  }
};
