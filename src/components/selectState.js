import React, { useContext } from "react";
import { GlobalContext } from "./globalState";

function SelectState() {
  const { state, changeCurrentState } = useContext(GlobalContext);

  const changeTableData = (e) => {
    changeCurrentState(e.target.value);
  };

  return (
    <div className="search_categories">
      <div className="select">
        <select name="search_categories" onChange={changeTableData}>
          <option value="Total">India</option>
          {state.stateName.length
            ? state.stateName.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))
            : null}
        </select>
      </div>
    </div>
  );
}

export default SelectState;
