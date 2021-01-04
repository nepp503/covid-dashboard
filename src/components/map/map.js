import './map.css'
import React from 'react';
import { MapContainer, GeoJSON, Circle } from 'react-leaflet'
import DataLoader from '../../service/dataLoader';
import worldGeoJSON from 'geojson-world-map';
import WorldData from './world';
import Legend from './legend';
import MapSwitcher from '../map/mapSwitcher';
import CustomPolygon from './customComponents'
export default class Map extends React.Component {

    constructor(props){
        super(props);
        this.dataLoader = new DataLoader();
        this.WorldData = new WorldData();
        this.countryList = null;
        this.state ={
            currentCase: 'cases',
        };
    }

    viewCountries = (toggleCountries) => {
        toggleCountries()
            .then(countryList => {
                this.countryList = countryList;
                const markers = this.createMarkerData(this.state.currentCase);
                const PolygonsArray = this.createCoutriesLayers(this.WorldData.getWorld(), this.state.currentCase);
                    this.setState({
                        markers,
                        PolygonsArray,
                    }
                )
            })
    }

    createMarkerData(cases) {
       const markers = this.countryList.map((country,i) => {
        return (
            <Circle
            key={i}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillColor='red'
            radius={country[cases]*0.1}/>
        )
       })

       return markers;
    }

    createCoutriesLayers(WorldData, cases) {
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
        return this.createPolygons(polygons, cases);
    }

    componentDidMount() {
        const { toggleCountries } = this.props;
        this.viewCountries(toggleCountries);
    }

    render() {
        return (
            <>
                <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
                    <GeoJSON
                    data={worldGeoJSON}
                    style={()=>({
                        color: 'red',
                        weight: 1,
                        fillColor: 'black',
                        fillOpacity: 1,
                    })}
                    />
                    {this.state.markers}
                    {this.state.PolygonsArray}
                    <Legend />
                </MapContainer>
                <div className='map_switchers'>
                    <MapSwitcher handleCaseSwitch = {(cases) => this.renderMarkerData(cases)}/>
                </div>
          </>
        )
    }

    createPolygons(polygons, cases){
        const handler = this.props.handleCountry;
        const PolygonsArray = polygons.map((polygon,i) => {
            const [countryObj] = this.countryList.filter((item) => item.country === polygon.name);
            return <CustomPolygon key={i} cases={cases} polygon={polygon} handler={handler} countryObj={countryObj}/>
        })
        return PolygonsArray;
    }

    renderMarkerData(cases){
        const currentActiveBookmark = document.querySelector('.active');
        currentActiveBookmark.classList.remove('active');
        const newActiveBookmark = document.querySelector(`.${cases}`);
        newActiveBookmark.classList.add('active');
        const markers = this.createMarkerData(cases);
        const PolygonsArray = this.createCoutriesLayers(this.WorldData.getWorld(), cases);
        this.setState({
            markers,
            PolygonsArray,
            currentCase: cases,
        })
    }
}
