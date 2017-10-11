import React, { Component } from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            center: {
            lat: this.props.lat,
            lng: this.props.lon
            },
            zoom: 11
        });
    }

    render(){
       return <div ref="map" />;
    }
}

export default GoogleMap;