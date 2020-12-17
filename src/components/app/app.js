import React from 'react';
import './app.css';
import GlobalCases from "../globalCases";
import Map from "../map";
import Header from "../header";
import TopCaseCountries from "../topCaseCountries";
import GlobalCasesTable from "../globalCasesTable";
import DiagramBoard from '../diagram/diagramBoard';

export default class App extends React.Component {

    state = {
        selectedCountryID: null,
    }

    onSelectedCountry = (index) => {
        console.log(index)
        this.setState({
            selectedCountry: index
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

                    <Map />

                    <div className = 'cases_and_diagram_container'>
                        <TopCaseCountries />
                        <DiagramBoard />
                    </div>
                </div>
            </div>
        );
    };
};