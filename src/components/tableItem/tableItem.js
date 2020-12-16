import "./tableItem.css"
import React from "react";


export default class TableItem extends React.Component {

    state = {
        caseType: this.props.caseType,
        itemsList: null,
        loading: true,
        errors: false
    }

    componentDidMount = () => {
        const { getTableItems } = this.props
        setTimeout(() => this.loadItems(getTableItems, this.props.caseType), 2000)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            caseType: nextProps.caseType
        })
        console.log("props updated", nextProps.caseType)
        setTimeout(() => this.loadItems(this.props.getTableItems, nextProps.caseType), 2000)
    }

    loadItems = (func, arg) => {
        console.log(arg)
        func(arg)
            .then((itemsList) => {
                this.setState({
                    itemsList
                })
            })
    }

    tableItems = (arr) => {
        if (arr !== null) {
            return arr.map((item, index) => {
                const { country } = item
                const someCase = item[this.state.caseType]

                return (
                    <li className='list-group-item'
                        key={index}
                        onClick = {()=> this.props.onSelectedItem(item)}
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
