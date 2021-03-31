import React, { Component } from 'react';
import Map from '../Map';

class MapButton extends Component {

    state = {
        button: 'map'
        
    }

    handleChange = event => {
        const { name, value } = event.target 

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("hi");
    }



    render() {
        
        return (
            <div className="map-icon">
            <form onSubmit={ this.handleSubmit }>
                <label>Map:</label>
                <input type='text' value={this.state.button} onChange={this.handleChange} />
                
                <input type='submit'/>
            </form>
            </div>
                
            
        );
    }
}

export default MapButton;
