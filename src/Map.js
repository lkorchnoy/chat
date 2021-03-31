import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
const Map = () => {
    const [ selected, setSelected ] = useState({});
    const onSelect = item => {
        setSelected(item);
    }
  const mapStyles = {        
    height: "80vh",
    width: "100%"};
  const defaultCenter = {
    lat:  40.750597306295056, lng: -74.00525518156246
  }
  const locations = [
      {
        name: "Unpakt", 
        location: {
            lat:  40.750597306295056, 
            lng: -74.00525518156246
      },
        address: "555 W 25th St, New York, NY 10001"
    }
]
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBkSbNKI5JmchEwoxp9mg8Ngcrci1adcQU'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
        {
            locations.map(item => {
                return (
                    <Marker key={item.name} 
                        position={item.location}
                        onClick={() => onSelect(item)}
                    />
                )
            })
        }
        {
            selected.location && 
            (
                <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={ () => setSelected({})}
                >
                    <>
                    <p>{selected.name}</p>
                    <p>{selected.address}</p>
                    </>
                </InfoWindow>
            )
        }
        </GoogleMap>
     </LoadScript>
  )
}
export default Map;