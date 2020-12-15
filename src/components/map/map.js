import "./map.css"
import React from "react";
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import DataLoader from "../../service/dataLoader";



export default class Map extends React.Component {

    state = {
        countryList: null,
        markerData: [
            {
                lan: "fvdfv",
                lat: "dfvdfv",
                radius:"",
            },
        ]
    }

    dataLoader = new DataLoader();

    viewCountries = (toggleCountries) => {
        toggleCountries()
            .then(countryList => {
                this.createMarkerData(countryList)
            })
    }

    calculateRadus() {

    }

    createMarkerData(countryList) {

        let radus = this.calculateRadus()

        this.setState({
            countryList
        })
    }

    componentDidMount() {
        const { toggleCountries } = this.props;

        setTimeout(this.viewCountries(toggleCountries), 2000)
    }

    render() {
        return (
        // <div></div> 
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

                <Circle 
                  center={[51.505, -0.09]}
                  fillColor="blue" 
                  radius={200}/>

          </MapContainer>
        )
    }
}