import "./Survey.scss";
import { Component } from "react";

class Survey extends Component {
  state = {};

  changedOption(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <form className="form">
        <div className="form-container">
          <span className="form-category">Sleep</span>
          <span className="form-instruction">How would you rate your sleep quality last night?</span>
          <label className="form-category__sleep form-buttons">
            <input
              type="radio"
              value="1"
              checked={this.state.selectedOption === "1"}
              onChange={this.changedOption}
            />
            <input
              type="radio"
              value="2"
              checked={this.state.selectedOption === "2"}
              onChange={this.changedOption}
            />
            <input
              type="radio"
              value="3"
              checked={this.state.selectedOption === "3"}
              onChange={this.changedOption}
            />
            <input
              type="radio"
              value="4"
              checked={this.state.selectedOption === "4"}
              onChange={this.changedOption}
            />
            <input
              type="radio"
              value="5"
              checked={this.state.selectedOption === "5"}
              onChange={this.changedOption}
            />
          </label>
        </div>
      </form>
    );
  }
}

export default Survey;
