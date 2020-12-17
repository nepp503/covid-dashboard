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

    tableItems = (arr) => {
        if (Array.isArray(arr)) {
            return arr.map((item, index) => {
                // console.log("country info", arr)
                const label = this.props.renderLabel(item)
                return (
                    <li className='list-group-item'
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
              console.log( key, item)
              let keys = ["todayCases", "cases", "deaths", "recovered", "todayDeaths", "critical",
                          "todayRecovered", "casesPerOneMillion ", "deathsPerOneMillion", "tests", "population",
              ]

              if (typeof item !== "object") {
                  if(keys.includes(key)) {
                      return (
                          <li className='list-group-item'
                              key={index}
                              onClick={() => this.props.onSelectedItem(item)}
                          >
                              <span>{key}</span>
                              <span>{item}</span>
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
