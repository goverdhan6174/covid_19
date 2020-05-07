import React, { useEffect, useContext } from "react";
import img from "./pic.png";

import Cards from "./cards";
import SelectState from "./selectState";
import StateWiseTable from "./stateWiseTable";

import { GlobalContext } from "./globalState";

function Home() {
  let StateURI = "https://api.covid19india.org/data.json";
  let DistrictURI = "https://api.covid19india.org/state_district_wise.json";

  const {
    state,
    updateDistrictNames,
    updateDistrictData,
    updateStateData,
  } = useContext(GlobalContext);

  // fetch data for state table
  useEffect(() => {
    async function fetchStateDate() {
      let response = await fetch(StateURI);
      let { statewise } = await response.json();
      updateStateData(statewise);
    }
    async function fetchDistrictDate() {
      let response = await fetch(DistrictURI);
      let data = await response.json();
      let states = Object.keys(data);
      updateDistrictData(data);
      updateDistrictNames(states);
    }

    fetchStateDate();
    fetchDistrictDate();
  }, []);

  return state.stateName.length ? (
    <section className="container">
      <SelectState />
      <Cards />
      <img src={img} alt="Ministry of Health and Family Welfare Government of India" / >
      <p className="lines">
        Government of India is taking all necessary steps to ensure that we are
        prepared well to face the challenge and threat posed by the growing
        pandemic of COVID-19 the Corona Virus. With active support of the people
        of India, we have been able to contain the spread of the Virus in our
        country. The most important factor in preventing the spread of the Virus
        locally is to empower the citizens with the right information and taking
        precautions as per the advisories being issued by Ministry of Health &
        Family Welfare.
      </p>
      
      <StateWiseTable />
    </section>
  ) : (
    <div className="search_categories">
      <h3 className="loading"> LOADING.....</h3>
    </div>
  );
}

export default Home;
