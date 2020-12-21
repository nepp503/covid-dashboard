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
              const countryKeys = ["population", "cases", "todayCases", "deaths", "recovered", "todayDeaths",
                                      "todayRecovered", "tests"
              ]
              if (typeof item !== "object") {
                  if(countryKeys.includes(key)) {
                      const label = this.props.renderLabel(key, item, arr)
                      return (
                          <li className='list-group__item countryInfo'
                              key={index}
                          >
                              {label}
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
