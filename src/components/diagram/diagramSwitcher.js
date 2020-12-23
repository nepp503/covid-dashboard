import "./diagram.css";
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default class DiagramSwitcher extends React.Component{

    render(){
        return(
            <div className = "diagram-switch">
                <button className = "diagram-btn left-arrow" onClick={() => this.props.onClick(-1)}><ArrowBackIosIcon /></button>
                <span className = "diagram-label">{this.props.cases}</span>
                <button className = "diagram-btn right-arrow" onClick={() => this.props.onClick(1)}><ArrowForwardIosIcon /></button>
            </div>
        )
    }

}