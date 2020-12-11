import React from 'react';
import './app.css';
import GlobalCases from "../globalCases";
import Map from "../map";
import Header from "../header";
import Diagram from "../diagram";
import TopCaseCountries from "../topCaseCountries";
import GlobalCasesTable from "../globalCasesTable";
import {createStore} from "redux";

const store = createStore()

console.log("storage", store)

export default class App extends React.Component {

    render() {
        return (
            <div className='container'>

                <Header />

                <GlobalCases />

                <GlobalCasesTable />  {/* Окно № 1 */}

                <TopCaseCountries /> {/* Окно № 2 */}

                <Map />

                <Diagram />

            </div>
        );
    };
};