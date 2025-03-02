
export default class DataLoader {

    _desease_base = "https://disease.sh/v3/covid-19/";

    historycalCountryData = null;

    historycalWorldData = null;

    getResource = async(url) => {
        let res = await fetch(`${this._desease_base}${url}`)

        if (!res.ok) {
            throw new Error("Api error")
        }
        return res.json()
    }

    getSortedCountries = async(sortType = "cases") => {
        return await this.getResource(`countries?sort=${sortType}`)
    }

    getWorldStats = async() => {
        return await this.getResource("all")
    }
    getTotalCases = async() => {
        let cases = await this.getResource("all")
        return cases.cases
    }

    getTotalDeath = async() => {
        let cases = await this.getResource("all")
        return cases.deaths
    }

    getTotalRecovered = async() =>  {
        let cases = await this.getResource("all")
        return cases.recovered
    }

    getHistorycallAll= async() =>  {
        let wordlCases = await this.getResource("historical/all?lastdays=all");
        this.historycalWorldData = wordlCases;
        let eachCountryCasesWithProvinces = await this.getResource("historical?lastdays=all");
        let countriesNamesSet = new Set();
        eachCountryCasesWithProvinces.forEach(element => {
            countriesNamesSet.add(element.country);
        });
        let countriesNames = [...countriesNamesSet].join(',');
        let eachCountryCases = await this.getResource(`historical/${countriesNames}?lastdays=all`);
        this.historycalCountryData = eachCountryCases;
    }
}
