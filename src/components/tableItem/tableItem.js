import "./tableItem.css"
import React from "react";


export default class TableItem extends React.Component {

    // state = {

    //     loading: true,
    //     errors: false
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.setState({
    //         caseType: nextProps.caseType
    //     })
    //     console.log("props updated", nextProps.caseType)
    //     setTimeout(() => this.loadItems(this.props.getTableItems, nextProps.caseType), 2000)
    // }


    render() {

      const { items } = this.props;

      return (
          <div className="table">
              <ul>
                {items}
              </ul>
          </div>
      )
    }
}
