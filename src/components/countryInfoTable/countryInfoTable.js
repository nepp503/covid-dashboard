import "./countryInfoTable.css"
import React from "react";
import TableItem from "../tableItem/tableItem"

export default class CountryInfoTable extends React.Component {

    state = {
      selectedCountryObj: this.props.selectedCountryObj,
      loader: true,
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      this.state.selectedCountryObj = nextProps.selectedCountryObj
      this.state.loader = false
      return true
    }


    render() {
      const { loader, selectedCountryObj} =  this.state;
      const hasData = !loader
      const content = hasData?
              <TableItem
                renderLabel ={(item) => {
                        return (
                            <React.Fragment>
                                <span>{item[this.state.caseType]}</span>
                                <span>{item["country"]}</span>
                            </React.Fragment>
                        )
                    }
                }
                itemsArray = {selectedCountryObj}
            /> :
            <h2>Select country for getting specific information</h2>;
      return (
          <div className="countryInfoTable">
            <h2>Country INFO</h2>
            {content}
          </div>
      )
    }
}