import "./map.css"
import React from "react";
import { MapContainer, GeoJSON, Circle, Polygon,Tooltip } from 'react-leaflet'
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
                const PolygonsArray = this.createCoutriesLayers(this.WorldData.getWorld(), countryList);
                    this.setState({
                        Markers,
                        PolygonsArray
                    }
                )
            })
    }

<<<<<<< HEAD
=======


>>>>>>> f2230823e1acbe36d07d109a86ff735fec6a07e1
    createMarkerData(countryList) {
       const Markers = countryList.map(country => {
        return (
            <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillColor="red"
            radius={country.cases*0.1}/>
        )
       })

<<<<<<< HEAD
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
=======
       console.log("Markers: ", Markers)

       return Markers;
    }

    createCoutriesLayers(WorldData, countryList) {
        let polygons = [];
        let polygonElem =[];
        for (let i=0; i<WorldData.features.length; i++) {
            polygonElem.push(WorldData.features[i].geometry.coordinates.map((item) => item.map((elem) => elem.reverse().map(e => Array.isArray(e) ? e.reverse() : e))));
            polygons.push({
                coordinates: polygonElem,
                name: WorldData.features[i].properties.name,
            });
            polygonElem=[];
        }
        return this.createPolygons(polygons, countryList);
>>>>>>> f2230823e1acbe36d07d109a86ff735fec6a07e1
    }

    componentDidMount() {
        const { toggleCountries } = this.props;

        this.viewCountries(toggleCountries);
    }

    render() {
        return (
<<<<<<< HEAD
            <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
             {this.state.Markers}
          </MapContainer>
        )
    }
=======
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

    createPolygons(polygons, countryList){
        const redOptions = { color: 'red' }
        const handler = this.props.handleCountry;
        const PolygonsArray = polygons.map(polygon => {
            const [countryObj] = countryList.filter((item) => item.country === polygon.name);
            function CustomPolygon(){
                const eventHandlers = React.useMemo(
                    () => ({
                      click() {
                          if(countryObj) handler(countryObj);
                      },
                    }),
                    [],
                  )
                return (
                    <Polygon
                        pathOptions={redOptions}
                        positions={polygon.coordinates}
                        eventHandlers={eventHandlers}><Tooltip>{countryObj ? countryObj.country + '\n' + countryObj.cases : ''}</Tooltip></Polygon>
                )
            }
           return <CustomPolygon />
        })
        return PolygonsArray;
    }
>>>>>>> f2230823e1acbe36d07d109a86ff735fec6a07e1
}
