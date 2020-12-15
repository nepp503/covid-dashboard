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

        setTimeout(() => this.loadItems(getTableItems), 2000)
    }

    loadItems = (getTableItems) => {
        let dgug = 'cases'

        if (this.props.caseType) {
            console.log("dcfv", this.props.caseType)
            dgug = this.props.caseType
        }

        getTableItems(dgug)
            .then((itemsList) => {
                this.setState({
                    itemsList
                })
            })
    }

    tableItems = (arr, caseType = "cases") => {
        if (arr !== null) {
            return arr.map((item, index) => {
                const { country } = item
                const someCase = item[caseType]

                return (
                    <li className='list-group-item'
                        key={index}
                        onClick = {()=> this.props.onSelectedItem(index)}
                    >
                        <span>{someCase}</span>
                        <span>{country}</span>
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