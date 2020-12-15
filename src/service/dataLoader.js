
export default class DataLoader {

    _desease_base = "https://disease.sh/v3/covid-19/";

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
}
