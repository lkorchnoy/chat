import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'; 

class MapContainer extends Component {

  render() {
    
  return (
       
      <Map google={this.props.google} >
      
   
   </Map>
  
  );
}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAz-tqp2CM-sa9bhVDNYzhgPhpYEVYgqkw")
 })(MapContainer);
   
  