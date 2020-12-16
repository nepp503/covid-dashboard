import "./globalCasesTable.css"
import React from "react";
import ReactDOM from 'react-dom';
import DataLoader from "../../service/dataLoader";
import TableItem from "../tableItem";
import InputItem from "../inputItem";
import MaterialIcon from 'material-icons-react';

export default class GlobalCasesTable extends React.Component {

    dataLoader = new DataLoader()

    state = {
        topCasesList: null,
        loader: true,
        error: false,
        caseType: "cases",
    }

    caseTypeSwitcher = (e) => {
        console.log(this.state.caseType)
        this.setState({
            caseType: e.currentTarget.id
        })
    }

    render() {
      return (
          <div className="globalCasesTable">
            <h2>Cases by country/region</h2>
            <InputItem />
            <div className="case-switcher">
                <div className="case-switcher__item" id="cases" onClick={this.caseTypeSwitcher}><MaterialIcon title="Cases" icon="work" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="recovered" onClick={this.caseTypeSwitcher}><MaterialIcon title="recovered" icon="health_and_safety" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="deaths" onClick={this.caseTypeSwitcher}><MaterialIcon title="deaths" icon="report_problem" color='#ffffff' size={30}/></div>
            </div>

            <TableItem
                caseType = {this.state.caseType}
                getTableItems = {this.dataLoader.getSortedCountries}
                onSelectedItem = {this.props.handleCountry}
            />
          </div>
      )
    }

}
