// import { combineReducers } from "redux";
// import DataLoader from "../service/dataLoader.js";
//
// let data = new DataLoader()
//
// data.getCountriesAndSlugs()
//
// let countries, slugs;
//
// function setValues() {
//     setTimeout(() => {
//         countries = JSON.parse(localStorage.getItem("countries"))
//         slugs = JSON.parse(localStorage.getItem("slugs"))
//     }, 2000)
// }
//
// setValues()


function createReducers() {

    return combineReducers({
        "countries": countries,
        "slugs": slugs
    })
}

// REDUX-THUNK

// createReducers()