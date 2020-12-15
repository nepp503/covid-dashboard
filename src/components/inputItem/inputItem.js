import "./inputItem.css"
import React from "react";


export default class InputItem extends React.Component {

    state = {
        value: "",
    }

    handleSubmit(event) {
      event.preventDefault();
    }

    handleChange(event) {
     console.log(event.target.value)
     this.setState({value: event.target.value});
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit} className="inputItem">
            <input type="text" placeholder="Enter country" onChange={this.handleChange} />
            <input type="submit" value="Search" />
          </form>
        )
    }

}