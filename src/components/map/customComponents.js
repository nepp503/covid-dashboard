import React from 'react';
import { Polygon,Tooltip } from 'react-leaflet'

export default function CustomPolygon(props){
    const redOptions = { color: 'red' }
    const countryObj = props.countryObj;
    const handler = props.handler;
    const eventHandlers = React.useMemo(
        () => ({
          click() {
              if(countryObj) handler(countryObj);
          },
        }),
        [countryObj, handler],
      );

    return (
        <Polygon
            pathOptions={redOptions}
            positions={props.polygon.coordinates}
            eventHandlers={eventHandlers}>
            <Tooltip>
                {countryObj ? countryObj.country +
                '\nNumber of ' + props.cases + ': ' + countryObj[props.cases] : ''}
            </Tooltip>
        </Polygon>
    )
}