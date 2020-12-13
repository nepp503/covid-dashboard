import "./tableItem.css"
import React from "react";


export default class TableItem extends React.Component {

    state = {
        itemsList: null,
        loading: true,
        errors: false
    }

    componentDidMount = () => {
        const { getTableItems } = this.props

        setTimeout(() => this.loadItems(getTableItems), 1000)
    }

    loadItems = (getTableItems) => {
        getTableItems()
            .then((itemsList) => {
                this.setState({
                    itemsList
                })
            })
    }

    tableItems = (arr, caseType = "TotalConfirmed") => {
        console.log("table items array", arr)

        if (arr !== null) {
            return arr.map((item) => {
                const { Country, } = item
                const someCase = item[caseType]

                console.log(Country, someCase)
                return (
                    <li className='list-group-item'>
                        <span>{someCase}</span>
                        <span>{ Country }</span>
                    </li>
                )

            })
        }
    }

    render() {

      const { itemsList } = this.state;
      const items = this.tableItems(itemsList)

      return (
          <div className="table">
              <ul>
                {items}
              </ul>
          </div>
      )
    }

}