import React, { Component } from 'react';

import Map from '../Map';

class MapButton extends React.Component {


    constructor(props) {
          super(props);
          this.state = {
            showComponent: false,
          };
          this._onButtonClick = this._onButtonClick.bind(this);
        }
      
        _onButtonClick() {
          this.setState({
            showComponent: true,
          });
        }
      
        render() {
          return (
            <div>
              <button type="submit" className="send-button" onClick={this._onButtonClick}>Google Map</button>
              
              {this.state.showComponent ?
                 <Map /> :
                 null
              }
            </div>
          );
        }
      }
      

    

export default MapButton;
 