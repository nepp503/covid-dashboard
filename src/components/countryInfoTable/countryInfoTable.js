import "./countryInfoTable.css"
import React from "react";
import TableItem from "../tableItem/tableItem"
import MaterialIcon from "material-icons-react";

export default class CountryInfoTable extends React.Component {


    constructor(props) {
        super(props);
        this.infoChanger = this.infoChanger.bind(this)
    }

    state = {
      selectedCountryObj: this.props.selectedCountryObj,
      worldStats: null,
      loader: true,
      error: false,
      isSwitched: false,
    }

    toHumanReadableNumber(num) {
        return num.toLocaleString("ru")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log(nextState.isSwitched)
      this.state.selectedCountryObj = nextProps.selectedCountryObj
      this.state.loader = false

      return true
    }

    componentDidMount = () => {
      const { getWorldStats } = this.props;
      setTimeout(() => this.loadItems(getWorldStats, null), 1000)
    }

    loadItems = (func, arg) => {
        console.log(func)
        func()
            .then((worldStats) => {
                console.log("inside", worldStats)
                this.setState({
                    loader:false,
                    worldStats
            })
        })
    }

    infoChanger(event) {
        if(event.target.id === "100k") {
            this.setState({
                isSwitched: true
            })
        } else {
            this.setState({
                isSwitched: false
            })
        }
    }

    renderLabel = (key, item, arr) => {
        console.log("key", key)
        console.log("item population", )


        if(this.state.isSwitched) {
            item = (item / arr["population"]) * 100000
        }

        item = item.toFixed(0)
        console.log("item next", item)
        return (
            <React.Fragment>
                <span style={{"color": "rgba(255,255,255, .7)", "fontWeight": "300"}}>{key.toUpperCase()}: </span>
                <span style={{"fontWeight": "900"}}>{this.toHumanReadableNumber(item)}</span>
            </React.Fragment>
        )


    }

    render() {
      const { selectedCountryObj, worldStats } =  this.state;
      const content = this.state.selectedCountryObj?
            <TableItem
                renderLabel = {this.renderLabel}
                itemsArray = {selectedCountryObj}
            /> :
            <TableItem
                renderLabel = {this.renderLabel}
                itemsArray = {worldStats}
            />
      return (
          <div className="countryInfoTable">
            <h2>Country INFO</h2>
            {content}

            <div className="infoButtons">
                <div className="case-switcher__item" id="world" onClick={this.infoChanger}><MaterialIcon title="Cases" icon="language " color='#ffffff' size={30}/></div>
                <div className="case-switcher__item" id="100k" onClick={this.infoChanger}>100K</div>
            </div>
          </div>
      )
    }
}
