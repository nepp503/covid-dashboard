import "./globalCasesTable.css"
import React from "react";
import TableItem from "../tableItem";
import MaterialIcon from 'material-icons-react';
import ErrorIndicator from '../error-indicator';
import { Autocomplete } from '@material-ui/lab';
import TextField from "@material-ui/core/TextField";


export default class GlobalCasesTable extends React.Component {

    constructor(props) {
        super(props);
        this.searchFilter = this.searchFilter.bind(this)
    }

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

    searchFilter(event, value) {
        this.props.handleCountry(value)
    }

    render() {

    const autoStyle = {
      width: "90%",
      backgroundColor: "#ffffff",
      display: "inline-block",
      justifyContent: "center",
      color: "gray",
      margin: "0 auto 10px",
      border: "black"
    }

    const flagStyle = {
        width: "20px",
        height: "20px",
        marginRight: "10px"
    }

    const { itemsArray, error} = this.state;
    const errorIndicator = error? <ErrorIndicator />:null;
    const content = <TableItem
                        renderLabel ={(item) => {
                                return (
                                    <React.Fragment>
                                        <img style={flagStyle} src={item.countryInfo.flag} alt=""/>
                                        <span>{this.toHumanReadableNumber(item[this.state.caseType])}</span>
                                        <span>{item["country"]}</span>
                                    </React.Fragment>
                                )
                            }
                        }
                        itemsArray = {itemsArray}
                        onSelectedItem = {this.props.handleCountry}
                    />

      return (
          <div className="globalCasesTable">
            <Autocomplete
              id="combo-box-demo"
              options={itemsArray}
              onChange={this.searchFilter}
              getOptionLabel={(option) => option.country}
              style={autoStyle}
              className="inputItem"
              renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
            />
            <h2>Cases by country/region</h2>
            <div className="case-switcher">
                <div className="case-switcher__item" id="cases" onClick={this.caseTypeSwitcher}><MaterialIcon title="Cases" icon="work" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="recovered" onClick={this.caseTypeSwitcher}><MaterialIcon title="recovered" icon="health_and_safety" color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="deaths" onClick={this.caseTypeSwitcher}><span title="deaths"  className="iconify" data-icon="mdi-skull" data-inline="false"></span></div>
            </div>
              {errorIndicator}
              {content}
          </div>
      )
    }

}
