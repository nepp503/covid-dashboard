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
            <div className='container'>

                <Header />

                <div className = 'global_cases_container'>

                    <GlobalCases />

                    <GlobalCasesTable /> 

                </div>

                <Map />

                <div className = 'cases_and_diagramm_container'>

                    <TopCaseCountries /> 

                    <Diagram />

                </div>

              

            </div>
        );
    };
};