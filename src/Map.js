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
    lat: 33.554330310241966, lng: -82.89563459258274
  }
  const locations = [
      {
        name: "Chat", 
        location: {
            lat: 33.554330310241966, 
            lng: -82.89563459258274
      },
        address: "115 Broad Street, Crawfordville, GA 30631"
    }
]
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA3EIeAg6KMD07DFv4UQbAzbW142mrJSdQ'>
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