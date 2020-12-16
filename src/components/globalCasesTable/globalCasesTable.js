import "./globalCasesTable.css"
import React from "react";
import DataLoader from "../../service/dataLoader";
import TableItem from "../tableItem";
import FormItem from "../formItem";
import MaterialIcon from 'material-icons-react';

export default class GlobalCasesTable extends React.Component {

    dataLoader = new DataLoader()

    state = {
        itemList: null,
        topCasesList: null,
        loader: true,
        error: false,
        caseType: "cases",
    }

    componentDidMount = () => {
        const { getCountries } = this.props
        setTimeout(() => this.loadItems(getCountries, this.state.caseType), 2000)
    }

    caseTypeSwitcher = (e) => {
        console.log(this.state.caseType)
        this.setState({
            caseType: e.currentTarget.id
        })
    }

    loadItems = (func, arg) => {
        func(arg)
            .then((itemList) => {
                this.setState({
                    itemList
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
      return (
          <div className="globalCasesTable">
            <FormItem />
            <h2>Cases by country/region</h2>
            <div className="case-switcher">
                <div className="case-switcher__item" id="cases" onClick={this.caseTypeSwitcher}><MaterialIcon title="Cases" icon="work" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="recovered" onClick={this.caseTypeSwitcher}><MaterialIcon title="recovered" icon="health_and_safety" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="deaths" onClick={this.caseTypeSwitcher}><MaterialIcon title="deaths" icon="report_problem" color='#ffffff' size={30}/></div>
            </div>
            <TableItem
                items = {this.}
            />
          </div>
      )
    }

}
