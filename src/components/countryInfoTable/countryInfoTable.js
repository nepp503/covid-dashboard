import "./countryInfoTable.css"
import React from "react";
import TableItem from "../tableItem/tableItem"

export default class CountryInfoTable extends React.Component {

    state = {
      selectedCountryObj: this.props.selectedCountryObj
    }

    render() {
      return (
          <div className="countryInfoTable">
            <h2>Country INFO</h2>
            <TableItem
              getTableItems = {this.state.selectedCountryObj}
            />
          </div>
      )
    }
}