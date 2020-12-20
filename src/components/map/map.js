import "./map.css"
import React from "react";
import { MapContainer, GeoJSON, Circle, Polygon } from 'react-leaflet'
import DataLoader from "../../service/dataLoader";
import worldGeoJSON from 'geojson-world-map';
import WorldData from './world';



export default class Map extends React.Component {

    state = {
        countryList: null,
    }

    dataLoader = new DataLoader();
    WorldData = new WorldData();
    viewCountries = (toggleCountries) => {
        toggleCountries()
            .then(countryList => {
                const Markers = this.createMarkerData(countryList)
                const PolygonsArray = this.createCoutriesLayers(this.WorldData.getWorld())
                this.setState({
                    Markers,
                    PolygonsArray
                }
                )
            })
    }



    createMarkerData(countryList) {

       const Markers = countryList.map(country => {
        return (
            <Circle 
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillColor="red" 
            radius={country.cases*0.1}/>
        )
       })

       console.log("Markers: ", Markers)

       return Markers;
    }

    createCoutriesLayers(WorldData) {
        let Polygons = [];
        let PolygonElem =[];
        console.log("worldData: ", WorldData)
        for (let i=0; i<WorldData.features.length; i++) {
            for (let j=0; j<WorldData.features[i].geometry.coordinates.length; j++) {
                PolygonElem.push(WorldData.features[i].geometry.coordinates[j]);
            }
            Polygons.push(PolygonElem);
            PolygonElem=[];
        }
        const redOptions = { color: 'red' }
        const PolygonsArray = Polygons.map(polygon => {
            return (
                <Polygon pathOptions={redOptions} positions={polygon} />
            )
        })
        console.log("PolygonsArray: ",PolygonsArray)
        return PolygonsArray
    }

    componentDidMount() {
        const { toggleCountries } = this.props;

        setTimeout(this.viewCountries(toggleCountries), 2000)
    }

    render() {
        return (
        
            <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
            <GeoJSON
              data={worldGeoJSON}
              style={()=>({
                  color: "red",
                  weight: 1,
                  fillColor: "black",
                  fillOpacity: 1,
                  
              })}
            />

            {this.state.Markers}
            {this.state.PolygonsArray}
          </MapContainer>
        )
    }
}