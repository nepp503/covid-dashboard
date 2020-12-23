import React from 'react';
import './app.css';
import GlobalCases from "../globalCases";
import Map from "../map";
import Header from "../header";
import CountryInfoTable from "../countryInfoTable";
import GlobalCasesTable from "../globalCasesTable";
import DataLoader from "../../service/dataLoader";
import DiagramBoard from '../diagram/diagramBoard';
import MapSwitcher from '../map/mapSwitcher';

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
                    <div className = 'cases_and_diagram_container'>
                        <CountryInfoTable
                          selectedCountryObj = {this.state.selectedCountryObj}
                          getWorldStats      = {this.dataLoader.getWorldStats}
                        />
                       
                       
                    </div>
                    <div className="map_switchers">
                        <MapSwitcher/>
                    </div>
                    <div className="diagram_container">
                        <DiagramBoard selectedCountryObj = {this.state.selectedCountryObj}/>
                    </div>
                </div>
                <div className="footer">
                    <img className="school_logo" src="https://rs.school/images/rs_school_js.svg"></img>
                </div>
            </React.Fragment>
        );
    };
};
