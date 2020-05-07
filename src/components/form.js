import React from "react";
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: 0,
      traveled: "no",
      add: "",
      test: "no",
      errormessage: "",
      selectedOption: "option2",
      symOption: "option1",
      dia: false,
      hyper: false,
      lung: false,
      heart: false,
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  toggleChange = (e) => {
    switch (e.target.name) {
      case "dia":
        this.setState({
          dia: !this.state[e.target.name],
        });
        break;
      case "lung":
        this.setState({
          lung: !this.state[e.target.name],
        });
        break;
      case "heart":
        this.setState({
          heart: !this.state[e.target.name],
        });
        break;
      case "hyper":
        this.setState({
          hyper: !this.state[e.target.name],
        });
        break;
    }
  };
  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    this.setState({
      username: "",
      age: 0,
      add: "",
      traveled: "no",
      test: "no",
      errormessage: "",
      selectedOption: "option2",
      symOption: "option1",
      dia: false,
      hyper: false,
      lung: false,
      heart: false,
    });
  };
  render() {
    return (
      <section className="container">
        <form onSubmit={this.handleFormSubmit}>
          <p>HEY! I'm</p>
          <span> JEELAN VOHRA </span>

          <hr />

          <p>Enter your name :</p>
          <input
            type="text"
            name="username"
            onChange={this.myChangeHandler}
            value={this.state.username}
          />
          <p>Enter your age :</p>
          <input
            type="text"
            name="age"
            onChange={this.myChangeHandler}
            value={this.state.age}
          />
          <p>Enter your Address :</p>
          <textarea
            type="text"
            name="add"
            onChange={this.myChangeHandler}
            value={this.state.add}
          />
          <p>Select one these:</p>
          <select
            name="test"
            value={this.state.test}
            onChange={this.myChangeHandler}
          >
            <option value="approx">
              I have recently interacted or lived with someone who has test
              positive for COVID-19
            </option>
            <option value="yes">
              I am a healthcare worker and I examined a COVID-19 confirned case
              without protective gear
            </option>
            <option value="no">None of these</option>
          </select>
          <p>
            Have you traveled anywhere internationally or infected area in the
            last 30-50days? :
          </p>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="traveled"
                value="yes"
                checked={this.state.traveled === "yes"}
                onChange={this.myChangeHandler}
              />
              YES
            </label>

            <label>
              <input
                type="radio"
                name="traveled"
                value="no"
                checked={this.state.traveled === "no"}
                onChange={this.myChangeHandler}
              />
              NO
            </label>
          </div>
          <p>Are you experiencing which of the following symptoms :</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="symOption"
                value="option1"
                checked={this.state.symOption === "option1"}
                onChange={this.myChangeHandler}
              />
              Cough, Fever or Difficuly in Breathing
            </label>

            <label>
              <input
                type="radio"
                name="symOption"
                value="option2"
                checked={this.state.symOption === "option2"}
                onChange={this.myChangeHandler}
              />
              Usual symptoms such as Headache
            </label>
            <label>
              <input
                type="radio"
                name="symOption"
                value="option3"
                checked={this.state.symOption === "option3"}
                onChange={this.myChangeHandler}
              />
              I am perfectly Fine
            </label>
          </div>

          <p>Have you ever had any of the following:</p>
          <div className="radio">
            <label>
              <input
                type="checkbox"
                name="dia"
                value="dia"
                checked={this.state.dia}
                onChange={this.toggleChange}
              />
              Diabetes
            </label>

            <label>
              <input
                type="checkbox"
                name="hyper"
                value="hyper"
                checked={this.state.hyper}
                onChange={this.toggleChange}
              />
              Hypertension
            </label>
            <label>
              <input
                type="checkbox"
                name="lung"
                value="lung"
                checked={this.state.lung}
                onChange={this.toggleChange}
              />
              Lung Disease
            </label>
            <label>
              <input
                type="checkbox"
                name="heart"
                value="heart"
                checked={this.state.heart}
                onChange={this.toggleChange}
              />
              Heart Disease
            </label>
          </div>
          <button type="submit">SUBMIT</button>
          <hr />
          {this.state.errormessage}
        </form>
        <p className="table-heading">STAY HOME, STAY SAFE</p>
      </section>
    );
  }
}

export default MyForm;
