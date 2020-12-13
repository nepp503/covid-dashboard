import "./globalCasesTable.css"
import React from "react";
import DataLoader from "../../service/dataLoader";
import TableItem from "../tableItem";

export default class GlobalCasesTable extends React.Component {

    dataLoader = new DataLoader()

    state = {
        topCountiesCases: null,
        loader: true,
        error: false
    }


    render() {
      return (
          <div className="globalCasesTable">
            <h2>Cases by country/region</h2>
            <TableItem
                getTableItems = {this.dataLoader.getSortedCountries}
            />
          </div>
      )
    }

}