import "./globalCasesTable.css"
import React from "react";
import TableItem from "../tableItem";
import FormItem from "../formItem";
import MaterialIcon from 'material-icons-react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class GlobalCasesTable extends React.Component {

    state = {
        itemsArray: [],
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.caseType = nextState.caseType
    }

    toHumanReadableNumber(num) {
        return num.toLocaleString("ru")
    }

    loadItems = (func, arg) => {
        func(arg)
            .then((itemsArray) => {
                console.log("inside", itemsArray)
                this.setState({
                    loader:false,
                    itemsArray
            })
        })
    }

    render() {

    const { itemsArray, error, loader } = this.state;

    const hasData = !(loader || error )
    const errorIndicator = error? <ErrorIndicator />:null;
    const spinner = loader? <Spinner /> : null;
    const content = hasData?
            <TableItem
                renderLabel ={(item) => {
                        return (
                            <React.Fragment>
                                <span>{this.toHumanReadableNumber(item[this.state.caseType])}</span>
                                <span>{item["country"]}</span>
                            </React.Fragment>
                        )
                    }
                }
                itemsArray = {itemsArray}
                onSelectedItem = {this.props.handleCountry}
            /> :
            null;

      return (
          <div className="globalCasesTable">
            <FormItem />
            <h2>Cases by country/region</h2>
            <div className="case-switcher">
                <div className="case-switcher__item" id="cases" onClick={this.caseTypeSwitcher}><MaterialIcon title="Cases" icon="work" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="recovered" onClick={this.caseTypeSwitcher}><MaterialIcon title="recovered" icon="health_and_safety" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="deaths" onClick={this.caseTypeSwitcher}><MaterialIcon title="deaths" icon="report_problem" color='#ffffff' size={30}/></div>
            </div>
              {errorIndicator}
              {spinner}
              {content}
          </div>
      )
    }

}
