import React from 'react';
import './app.css';
import GlobalCases from "../globalCases";
import Map from "../map";
import Header from "../header";
import Diagram from "../diagram";
import TopCaseCountries from "../topCaseCountries";
import GlobalCasesTable from "../globalCasesTable";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className = 'global_cases_container'>
                        <GlobalCases />
                        <GlobalCasesTable />
                    </div>

                    <Map />

                    <div className = 'cases_and_diagram_container'>
                        <TopCaseCountries />
                        <Diagram />
                    </div>
                </div>
            </div>
        );
    };
};