import React, { Component } from "react";
class Forms extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="Text" name="city" placeholder="Enter City" />

        <input
          type="Text"
          name="country"
          placeholder="Enter Country code(like ind,pk,aus,uk)"
        />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Forms;

//this is stateless functional compoenent
//const Form = props => (
// 	<form onSubmit={props.getWeather}>
// 		<input type="text" name="city" placeholder="City..."/>
// 		<input type="text" name="country" placeholder="Country..."/>
// 		<button>Get Weather</button>
// 	</form>
// );

// export default Form;
