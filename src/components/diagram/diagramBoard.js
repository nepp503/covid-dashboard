import './diagram.css';
import React from 'react';
import DataLoader from '../../service/dataLoader';
import Diagram from './diagram';
import DiagramSwitcher from './diagramSwitcher';


export default class DiagramBoard extends React.Component {

    constructor(props) {
        super(props);
        this.dataLoader = new DataLoader();
        this.diagrams = ['cases', 'deaths', 'recovered'];
        this.currentDiagram = 'cases';
        this.currentCountry = 'all';
        this.dataForRender = null;
        this.state = {
            data: {}
        }
    }

    render(){;
        let dataForDiagram = null;
        if(this.props.selectedCountryObj) {
            if(this.currentCountry !== this.props.selectedCountryObj.country){
                this.currentCountry = this.props.selectedCountryObj.country;
                const countryData = this.dataLoader.historycalCountryData.filter((item) => item.country === this.currentCountry)[0];
                if(countryData) this.dataForRender = countryData.timeline;
            }
        } else if (this.dataLoader.historycalWorldData) {
            this.currentCountry = 'all';
            this.dataForRender = this.dataLoader.historycalWorldData;
        }
        dataForDiagram = this.dataForRender ? this.renderDataForDiagram(this.dataForRender[this.currentDiagram]) : null;
        return(
            <div className='diagram-board'>
                <Diagram data = {dataForDiagram} cases = {this.currentDiagram.toUpperCase()}/>
                <DiagramSwitcher onClick = {(i) => this.handleSwitch(i)} cases = {this.currentDiagram.toUpperCase()}/>
            </div>
        );
    }

    componentDidMount(){
        this.dataLoader.getHistorycallAll().then(() => {
            this.dataForRender = this.dataLoader.historycalWorldData;
            const data = this.renderDataForDiagram(this.dataForRender[this.currentDiagram]);
            this.setState({
                data
            });
        });
    }

    renderDataForDiagram(dataForRender){
        const itemArr = Object.entries(dataForRender);
        let dataBeforeRender = Array(itemArr.length).fill();
        const data = dataBeforeRender.map((item, i) => {
            return item = {x: new Date(itemArr[i][0]), y: itemArr[i][1]};
        });
        return data;
    }

    handleSwitch(i){
        if(this.diagrams.indexOf(this.currentDiagram) + i >= 0 && this.diagrams.indexOf(this.currentDiagram) + i < this.diagrams.length) {
            this.currentDiagram = this.diagrams[this.diagrams.indexOf(this.currentDiagram) + i];
        } else if (this.diagrams.indexOf(this.currentDiagram) + i < 0){
            this.currentDiagram = this.diagrams[this.diagrams.length-1];
        } else {
            this.currentDiagram = this.diagrams[0];
        }
        const data = this.renderDataForDiagram(this.dataForRender[this.currentDiagram]);
        this.setState({
            data
        });
    }
}