import "./map.css"
import React from "react";
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import DataLoader from "../../service/dataLoader";



export default class Map extends React.Component {

    state = {
        countryList: null,
    }

    dataLoader = new DataLoader();

    viewCountries = (toggleCountries) => {
        toggleCountries()
            .then(countryList => {
                this.createMarkerData(countryList)
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

        this.setState({
            countryList,
            Markers
        })
    }

    componentDidMount() {
        const { toggleCountries } = this.props;

        setTimeout(this.viewCountries(toggleCountries), 2000)
    }

    render() {
        return (
            <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
             {this.state.Markers}
          </MapContainer>
        )
    }
}
