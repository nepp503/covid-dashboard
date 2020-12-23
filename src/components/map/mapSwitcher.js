import "./map.css"
import React from "react";

export default class MapSwitcher extends React.Component {
    render(){
        return(
            <div className="map-switch">
                <button className="map-btn">Cases</button>
                <button className="map-btn">Deaths</button>
                <button className="map-btn">Recovered</button>
            </div>
        )
    }
}