import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./globalState";

function Cards() {

  let [states , setStates]=useState({active: 0})

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    let data;
    const searchStateDate = () => {
      data = state.stateData.find((obj) => obj.state === state.currentState);
    };
    setStates(prev => JSON.parse(JSON.stringify(data)));
    searchStateDate();
  }, [state.currentState]);

  return (
    <div className="cards">
      <div className="card blue">
        <h4>Active</h4>
        <h2>{states.active}</h2>
        <h5>Number of active cases of</h5>
        <h5 className="name">COVID-19</h5>
      </div>
      <div className="card green">
        <h4>RECOVERED</h4>
        <h2>{states.recovered}</h2>
        <h5>Number of recoveries from</h5>
        <h5 className="name">COVID-19</h5>
      </div>
      <div className="card red">
        <h4>DEATHS</h4>
        <h2>{states.deaths}</h2>
        <h5>Number of deaths caused by</h5>
        <h5 className="name">COVID-19</h5>
      </div>
    </div>
  );
}

export default Cards;
