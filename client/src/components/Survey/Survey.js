import "./Survey.scss";
import { Component } from "react";

class Survey extends Component {
  state = {};
  changedOption = this.changedOption.bind(this);

  changedOption(event) {
    console.log(event.target.value);
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <form className="form">
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Sleep</span>
            <span className="form-instruction">
              How well did you sleep last night?
            </span>
          </div>
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
            <div className="form-rating">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Fatigue</span>
            <span className="form-instruction">
              How energetic are you feeling?
            </span>
          </div>
          <label className="form-category__fatigue form-buttons">
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
            <div className="form-rating">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Stress</span>
            <span className="form-instruction">
              How stressed/anxious are you today?
            </span>
          </div>
          <label className="form-category__stress form-buttons">
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
            <div className="form-rating">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Soreness</span>
            <span className="form-instruction">
              How is your current physical state?
            </span>
          </div>
          <label className="form-category__soreness form-buttons">
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
            <div className="form-rating">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Motivation</span>
            <span className="form-instruction">
              How motivated are you for the day ahead?
            </span>
          </div>
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
            <div className="form-rating">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
      </form>
    );
  }
}

export default Survey;
