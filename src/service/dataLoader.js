
export default class DataLoader {

    _api_base = 'https://api.covid19api.com/';

    getResource = async(url) => {
        let res = await fetch(`${this._api_base}${url}`)

        if (!res.ok) {
            throw new Error("Api error")
        }

        return res.json()
    }

    getCountries = async() => {
        return this.getResource("countries")
    }

    getSummary = async() => {
        return this.getResource("summary")
    }

    getTopTenCountries = async(caseType = "TotalConfirmed") => {
        let info = await this.getSummary()
        let topValues = info.Countries.sort((a,b) => {
                            return b[caseType] - a[caseType]
                        }).slice(0, 10)

        return topValues
    }

    getTotalCases = async() => {
    // общее количество случаев заболевания
        let cases = await this.getSummary()
        return cases.Global.TotalConfirmed
    }

    getTotalDeath = async() => {
    // общее количество летальных исходов
        let death = await this.getSummary()
        return death.Global.TotalDeaths
    }

    getTotalRecovered = async() =>  {
    // общее количество выздоровевших
        let recovered = await this.getSummary()
        return recovered.Global.TotalRecovered
    }

    numberOfCasesLastDay() {
    // количество случаев заболевания за последний день


    }

    numberOfDeathLastDay() {
    // количество летальных исходов за последний день


    }

    numberOfRecoveredLastDay() {
    // количество выздоровевших за последний день


    }

    totalCasesPer100thousand () {
    // общее количество случаев заболевания из расчёта на 100 тыс. населения


    }

    totalDeathPer100thousand () {
    // общее количество летальных исходов из расчёта на 100 тыс. населения


    }

    totalRecoveredPer100thousand () {
    // общее количество выздоровевших из расчёта на 100 тыс. населения


    }

    totalCasesPer100thousandInLastDay() {
    // количество случаев заболевания за последний день из расчёта на 100 тыс. населения


    }

    totalDeathPer100thousandInLastDay() {
    // количество летальных исходов за последний день из расчёта на 100 тыс. населения


    }

    totalRecoveredPer100thousandInLastDay() {
    // количество выздоровевших за последний день из расчёта на 100 тыс. населения


    }
}


let t = new DataLoader()

t.getTopTenCountries()