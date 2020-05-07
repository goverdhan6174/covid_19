import React, { useContext } from "react";
import { GlobalContext } from "./globalState";

function StateWiseTable() {
  const {
    state: { stateData, currentState, districtData },
  } = useContext(GlobalContext);

  const districtTable = () => {
    let dd = districtData[currentState].districtData;
    let arr = [];
    for (let key in dd) {
      if (dd.hasOwnProperty(key)) {
        let value = dd[key];
        // console.log(key, value);
        // console.log(value.active)
        arr.push(
          <tr key={key}>
            <td>{key}</td>
            <td className="blue-text">{value.active}</td>
            <td className="confirmed">{value.confirmed}</td>
            <td className="blue-text">{value.recovered}</td>
            <td className="blue-text">{value.deceased}</td>
          </tr>
        );
      }
    }
    return arr;
  };

  return (
    <>
    <p className="table-heading">
      {currentState == "Total" ? "STATE" : "DISTRICT"} WISE DATA
    </p>
      <table>
        <thead>
          <tr>
            <th>{districtData[currentState] ? currentState : "STATES"}</th>
            <th>ACTIVE</th>
            <th className="confirmed">CONFIRMED</th>
            <th>RECOVERED</th>
            <th>DEATHS</th>
          </tr>
        </thead>
        <tbody>
          {districtData[currentState]
            ? districtTable()
            : stateData.map((state) => (
                <tr key={state.statecode}>
                  <td>{state.state}</td>
                  <td className = "blue-text">{state.active}</td>
                  <td className="confirmed blue-text">{state.confirmed}</td>
                  <td className = "green-text">{state.recovered}</td>
                  <td className="red-text">{state.deaths}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}

export default StateWiseTable;
