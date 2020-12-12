import "./globalCases.css";
import React from "react";
import DataLoader from "../../service/dataLoader";

export default class GlobalCases extends React.Component {

    dataLoader = new DataLoader()

    state = {
        cases: null,
        loader: true,
        error: false
    }

    componentDidMount = () => {
        const timout = setTimeout(this.getCases, 2000);
    }

    componentWillUnmount() {
        clearInterval( this.timout );
    }

    onCasesLoad = (cases) => {
        this.setState({
            cases,
            loader:false
        })
    }

    getCases = () => {
        this.dataLoader.getTotalCases()
                    .then(this.onCasesLoad)
                    .then(this.onErrorHandler)
    }

    onErrorHandler = (err) => {
        this.setState({
            loader:false,
            error:true,
        })
    };

    render() {
      let cases = this.state.cases;

      return (
          <div className="globalCasesCard">
            <h2>Global Cases</h2>
            <div className="card-cases">
                {cases}
            </div>
          </div>
      )
    }
}