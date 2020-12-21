import "./tableItem.css"
import React from "react";
import Spinner from "../spinner"

export default class TableItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            itemsArray: this.props.itemsArray
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.itemsArray = nextProps.itemsArray
    }

    toHumanReadableNumber(num) {
        return num.toLocaleString("ru")
    }

    tableItems = (arr) => {
        if (Array.isArray(arr)) {
            return arr.map((item, index) => {
                const label = this.props.renderLabel(item)
                return (
                    <li className='list-group__item'
                      key={index}
                      onClick = {()=> this.props.onSelectedItem(item)}
                    >
                      {label}
                    </li>
                )
            })
        } else {
            return Object.keys(arr).map((key, index) => {
              let item = arr[key]
              let keys = ["todayCases", "cases", "deaths", "recovered", "todayDeaths", "critical",
                          "todayRecovered", "casesPerOneMillion ", "deathsPerOneMillion", "tests", "population",
              ]

              if (typeof item !== "object") {
                  if(keys.includes(key)) {
                      return (
                          <li className='list-group__item countryInfo'
                              key={index}
                          >
                              <span style={{"color": "rgba(255,255,255, .7)", "fontWeight": "300"}}>{key.toUpperCase()}: </span>
                              <span style={{"fontWeight": "900"}}>{this.toHumanReadableNumber(item)}</span>
                          </li>
                      )
                  }
              }
            })
        }
    }

    render() {
      const { itemsArray } = this.state;
      if ( !itemsArray) {
            return <Spinner />
      }

      const items = this.tableItems(itemsArray);

      return (
          <div className="table">
              <ul>
                {items}
              </ul>
          </div>
      )
    }
}
