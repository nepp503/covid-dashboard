import "./globalCases.css";
import React from "react";

export default class GlobalCases extends React.Component {

    render() {
      return (
          <div className="globalCasesCard">
            <h2>GlobalCases</h2>
            <div className="cases">
                { this.props.globalCases }
            </div>
          </div>
      )
    }
}