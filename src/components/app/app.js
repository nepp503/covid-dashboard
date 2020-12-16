import React from 'react';
import './app.css';
import GlobalCases from "../globalCases";
import Map from "../map";
import Header from "../header";
import Diagram from "../diagram";
import TopCaseCountries from "../topCaseCountries";
import GlobalCasesTable from "../globalCasesTable";
import DataLoader from "../../service/dataLoader";

export default class App extends React.Component {

    dataLoader = new DataLoader()

    state = {
        selectedCountryObj: null,
    }

    onSelectedCountry = (obj) => {
        console.log(obj)
        this.setState({
            selectedCountryObj: obj
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className = 'global_cases_container'>
                        <GlobalCases />
                        <GlobalCasesTable
                          handleCountry = {this.onSelectedCountry}
                        />
                    </div>

                    <Map 
                        toggleCountries = { this.dataLoader.getSortedCountries }
                    />

                    <div className = 'cases_and_diagram_container'>
                        <TopCaseCountries />
                        <Diagram />
                    </div>
                </div>
            </div>
        );
    };
};