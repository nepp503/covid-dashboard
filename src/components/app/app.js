import React from 'react';
import './app.css';
import GlobalCases from "../globalCases";
import Map from "../map";
import Header from "../header";
import CountryInfoTable from "../countryInfoTable";
import GlobalCasesTable from "../globalCasesTable";
import DataLoader from "../../service/dataLoader";
import DiagramBoard from '../diagram/diagramBoard';

export default class App extends React.Component {

    dataLoader = new DataLoader()

    state = {
        selectedCountryObj: null,
    }

    onSelectedCountry = (obj) => {
        this.setState({
            selectedCountryObj: obj
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.state.selectedCountryObj = nextState.selectedCountryObj;
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='container'>
                    <div className = 'global_cases_container'>
                        <GlobalCases />
                        <GlobalCasesTable
                          handleCountry = {this.onSelectedCountry}
                          getCountries   = {this.dataLoader.getSortedCountries}
                        />
                    </div>
                    <Map
                        handleCountry = {this.onSelectedCountry}
                        toggleCountries = { this.dataLoader.getSortedCountries }
                    />
                    <CountryInfoTable
                        selectedCountryObj = {this.state.selectedCountryObj}
                        getWorldStats      = {this.dataLoader.getWorldStats}
                    />
                    <DiagramBoard selectedCountryObj = {this.state.selectedCountryObj}/>
                    <div className="footer">
                        <a href="https://rs.school/js/">
                            <img className="school_logo" src="https://rs.school/images/rs_school_js.svg"></img>
                        </a>
                        <div className="git-hub_links"> 
                            <a href="https://github.com/FullCycleRoid">FullCycleRoid</a> 
                            <a href="https://github.com/nepp503">nepp503</a> 
                            <a href="https://github.com/JustAnotherAlexander">JustAnotherAlexander</a> 
                        </div>
                        <span>2020</span>
                    </div>
                </div>
            </React.Fragment>
        );
    };
};