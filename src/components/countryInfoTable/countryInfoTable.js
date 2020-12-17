import "./countryInfoTable.css"
import React from "react";
import TableItem from "../tableItem/tableItem"
import Spinner from "../spinner";

export default class CountryInfoTable extends React.Component {

    state = {
      selectedCountryObj: this.props.selectedCountryObj,
      worldStats: null,
      loader: true,
      error: false
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      this.state.selectedCountryObj = nextProps.selectedCountryObj
      this.state.loader = false
      return true
    }

    componentDidMount = () => {
      const { getWorldStats } = this.props;
      setTimeout(() => this.loadItems(getWorldStats, null), 1000)
    }

    loadItems = (func, arg) => {
        console.log(func)
        func()
            .then((worldStats) => {
                console.log("inside", worldStats)
                this.setState({
                    loader:false,
                    worldStats
            })
        })
    }


    render() {
      const { selectedCountryObj, worldStats, loader, error } =  this.state;
      const hasData = !(loader || error)
      const content = this.state.selectedCountryObj?
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
                itemsArray = {worldStats}
            />
      return (
          <div className="countryInfoTable">
            <h2>Country INFO</h2>
            {content}
          </div>
      )
    }
}