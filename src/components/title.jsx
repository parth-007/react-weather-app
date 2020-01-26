import React, { Component } from "react";
class Titles extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Weather Finder</h1>
        <p>Find out tempreature, conditions and more</p>
      </div>
    );
  }
}

export default Titles;

// stateless functional compoenents
//const Titles = () => (
// 	<div>
// 		<h1 className="title-container__title">Weather Finder</h1>
// 		<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
// 	</div>
// );

// export default Titles;
