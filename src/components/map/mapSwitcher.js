import './map.css'
import React from 'react';
import MaterialIcon from 'material-icons-react';

export default class MapSwitcher extends React.Component {
    render(){
        return(
            <div className='map-switch'>
                <button className='map-btn cases active' onClick={() => this.props.handleCaseSwitch('cases')}>
                    <MaterialIcon title='Cases' icon='work' color='white' size={30}/>
                </button>
                <button className='map-btn recovered' onClick={() => this.props.handleCaseSwitch('recovered')}>
                    <MaterialIcon title='Recovered' icon='health_and_safety' color='white' size={30}/>
                </button>
                <button className='map-btn deaths' onClick={() => this.props.handleCaseSwitch('deaths')}>
                    <span title='deaths' className='iconify' data-icon='mdi-skull' data-inline='false'/>
                </button>
            </div>
        )
    }
}