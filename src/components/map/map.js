import "./map.css"
import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import DataLoader from "../../service/dataLoader";



export default class Map extends React.Component {

    state = {
        countryList: null
    }

    dataLoader = new DataLoader();

    viewCountries = (toggleCountries) => {
        toggleCountries()
            .then(countryList => {
                this.setState({
                    countryList
                })
            })
    }

    componentDidMount() {
        const { toggleCountries } = this.props;

        setTimeout(this.viewCountries(toggleCountries), 2000)
    }

    render() {
        return (
        // <div></div> 
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>

            </Marker>
          </MapContainer>
        )
    }
}