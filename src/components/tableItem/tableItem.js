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
            return arr.map((item, index) => {
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
