
export default class DataLoader {

    _covid_api = "https://api.covid19api.com/";
    _population_api = "https://restcountries.eu/rest/v2/all?fields=name;population;flag"

    _getResource = async(url) => {
        let res = await fetch(`${this._covid_api}${url}`)

        if (!res.ok) {
            throw new Error("Api error")
        }

        return res.json()
    }

    getCountries = async() => {
        return await this._getResource("countries")
    }

    getTotalCases = async(countryName = "") => {
        let cases = await this._getSummary()

        if (countryName) {
            for (let i = 0; i < cases.Countries.length; i++) {
                if (cases.Countries[i]["Country"] === countryName ||
                    cases.Countries[i]["Slug"] === countryName) {
                    return cases.Countries[i]["TotalConfirmed"]
                }
            }
        }
        return cases.Global.TotalConfirmed
    }

    _getRestCountries = async() => {
        let res = await fetch(this._population_api)

        if (!res.ok) {
            throw new Error("Api error")
        }
        return res.json()
    }

    getPopulationAndFlags = async() => {
        return this._getRestCountries()
    }

    _getSummary = async() => {
        return this._getResource("summary")
    }


    getTotalDeath = async(countryName="") => {
        let cases = await this._getSummary()

        console.log(countryName)
        if (countryName) {
            for (let i=0; i<cases.Countries.length;i++) {
                if (cases.Countries[i]["Country"] === countryName ||
                    cases.Countries[i]["Slug"] === countryName ) {
                        return cases.Countries[i]["TotalDeaths"]
                }
            }
        }

        return cases.Global.TotalDeaths
    }

    getTotalRecovered = async(countryName = "") =>  {
        let cases = await this._getSummary()

        if (countryName) {
            for (let i = 0; i < cases.Countries.length; i++) {
                if (cases.Countries[i]["Country"] === countryName ||
                    cases.Countries[i]["Slug"] === countryName) {
                    return cases.Countries[i]["TotalRecovered"]
                }
            }
        }
        return cases.Global.TotalRecovered
    }

    getCasesLastDay = async(countryName = "") => {
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i<cases.Countries.length;i++) {
                if (cases.Countries[i]["Country"] === countryName ||
                    cases.Countries[i]["Slug"] === countryName ) {
                        return cases.Countries[i]["NewConfirmed"]
                }
            }
        }
        return cases.Global.NewConfirmed
    }

    getDeathLastDay = async(countryName = "") => {
        let cases = await this._getSummary()

        if (countryName) {
            for (let i = 0; i < cases.Countries.length; i++) {
                if (cases.Countries[i]["Country"] === countryName ||
                    cases.Countries[i]["Slug"] === countryName) {
                    return cases.Countries[i]["NewDeaths"]
                }
            }
        }
        return cases.Global.NewDeaths
    }

    getRecoveredLastDay = async(countryName = "") => {
        let cases = await this._getSummary()

        if (countryName) {
            for (let i = 0; i < cases.Countries.length; i++) {
                if (cases.Countries[i]["Country"] === countryName ||
                    cases.Countries[i]["Slug"] === countryName) {
                    return cases.Countries[i]["NewRecovered"]
                }
            }
        }
        return cases.Global.NewRecovered
    }

    totalCasesPer100thousand = async(countryName = "") => {
        let population =  this.getPopulationAndFlags()
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i < cases.Countries.length; i++) {
                for (let j=0; j<population.length; j++) {
                    if (population[i]["name"] === cases.Countries[i]["Country"] &&
                        cases.Countries[i]["Country"] === countryName ) {
                            return ((cases.Countries[i]["TotalConfirmed"] / population[i]["population"]) * 100000)
                    }
                }
            }
        }

        return (cases.Global.TotalConfirmed / 7700000000) * 100000
    }

    totalDeathPer100thousand = async(countryName = "") => {
        let population =  this.getPopulationAndFlags()
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i < cases.Countries.length; i++) {
                for (let j=0; j<population.length; j++) {
                    if (population[i]["name"] === cases.Countries[i]["Country"] &&
                        cases.Countries[i]["Country"] === countryName ) {
                            return ((cases.Countries[i]["TotalDeaths"] / population[i]["population"]) * 100000)
                    }
                }
            }
        }
        return (cases.Global.TotalDeaths / 7700000000) * 100000
    }

    totalRecoveredPer100thousand = async(countryName = "") => {
        let population =  this.getPopulationAndFlags()
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i < cases.Countries.length; i++) {
                for (let j=0; j<population.length; j++) {
                    if (population[i]["name"] === cases.Countries[i]["Country"] &&
                        cases.Countries[i]["Country"] === countryName ) {
                            return ((cases.Countries[i]["TotalRecovered"] / population[i]["population"]) * 100000)
                    }
                }
            }
        }
        return (cases.Global.TotalRecovered / 7700000000) * 100000
    }

    totalCasesPer100thousandInLastDay = async(countryName = "") => {
        let population =  this.getPopulationAndFlags()
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i < cases.Countries.length; i++) {
                for (let j=0; j<population.length; j++) {
                    if (population[i]["name"] === cases.Countries[i]["Country"] &&
                        cases.Countries[i]["Country"] === countryName ) {
                            return ((cases.Countries[i]["NewConfirmed"] / population[i]["population"]) * 100000)
                    }
                }
            }
        }
        return (cases.Global.NewConfirmed / 7700000000) * 100000
    }

    totalDeathPer100thousandInLastDay = async(countryName = "") => {
        let population =  this.getPopulationAndFlags()
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i < cases.Countries.length; i++) {
                for (let j=0; j<population.length; j++) {
                    if (population[i]["name"] === cases.Countries[i]["Country"] &&
                        cases.Countries[i]["Country"] === countryName ) {
                            return ((cases.Countries[i]["NewDeaths"] / population[i]["population"]) * 100000)
                    }
                }
            }
        }
        return (cases.Global.NewDeaths / 7700000000) * 100000

    }

    totalRecoveredPer100thousandInLastDay = async(countryName = "") => {
        let population =  this.getPopulationAndFlags()
        let cases = await this._getSummary()

        if (countryName) {
            for (let i=0; i < cases.Countries.length; i++) {
                for (let j=0; j<population.length; j++) {
                    if (population[i]["name"] === cases.Countries[i]["Country"] &&
                        cases.Countries[i]["Country"] === countryName ) {
                            return ((cases.Countries[i]["NewRecovered"] / population[i]["population"]) * 100000)
                    }
                }
            }
        }
        return (cases.Global.NewRecovered / 7700000000) * 100000

    }
}

// let t = new DataLoader()
//
// t.getTotalCases("russia")
//     .then( cases => console.log("total", cases))
//
//
// t.getTotalDeath("russia")
//     .then( cases => console.log("1", cases))
//
// t.getTotalRecovered("russia")
//     .then( cases => console.log("2", cases))
//
//
// t.totalCasesPer100thousand("Russia")
//     .then( data => console.log("3", data))
//
// t.totalCasesPer100thousandInLastDay("Russia")
//     .then( data => console.log("4", data))
// t.totalDeathPer100thousandInLastDay("Russia")
//     .then( data => console.log("5", data))
// t.totalRecoveredPer100thousand("Russia")
//     .then( data => console.log("6", data))
// t.numberOfCasesLastDay("Russia")
//     .then( data => console.log("7", data))
// t.numberOfDeathLastDay("Russia")
//     .then( data => console.log("8", data))
// t.numberOfRecoveredLastDay("Russia")
//     .then( data => func)


