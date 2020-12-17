import "./diagram.css";
import React from 'react';
import DataLoader from "../../service/dataLoader";
import Diagram from "./diagram";
import DiagramSwitcher from "./diagramSwitcher";


export default class DiagramBoard extends React.Component {

    constructor(props) {
        super(props);
        this.dataLoader = new DataLoader();
        this.diagrams = ['cases', 'deaths', 'recovered'];
        this.currentDiagram = 'cases';
        this.state = {
            data: {}
        }
    }

    render(){
        return(
            <div className='diagram-board'>
                <Diagram data = {this.state.data} cases = {this.currentDiagram.toUpperCase()}/>
                <DiagramSwitcher onClick = {(i) => this.handleSwitch(i)} cases = {this.currentDiagram.toUpperCase()}/>
            </div>
        );
    }

    componentDidMount(){
        this.dataLoader.getHistorycallAll().then((items) => {
            this.renderData(items);
        });
    }

    renderData(items){
        const itemArr = Object.entries(items);
        let beforeRenderData = Array(itemArr.length).fill();
        const data = beforeRenderData.map((item, i) => {
            return item = {x: new Date(itemArr[i][0]), y: itemArr[i][1]};
        });
        this.setState({
            data
        })
    }

    handleSwitch(i){
        if(this.diagrams.indexOf(this.currentDiagram) + i >= 0 && this.diagrams.indexOf(this.currentDiagram) + i < this.diagrams.length) {
            this.currentDiagram = this.diagrams[this.diagrams.indexOf(this.currentDiagram) + i];
        } else if (this.diagrams.indexOf(this.currentDiagram) + i < 0){
            this.currentDiagram = this.diagrams[this.diagrams.length-1];
        } else {
            this.currentDiagram = this.diagrams[0];
        }
        this.dataLoader.getHistorycallAll(this.currentDiagram).then((items) => {
            this.renderData(items);
        });
    }
}