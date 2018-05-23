import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
    // Map loads with geolocation as center - component did mount
    // User searches for zip -> if results pan to first item's lat/lng
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: '',
                lng: ''
            }
        }
        this.map = React.createRef();
    }

    UNSAFE_componentWillMount() {
        if (this.props.places.length) {
            const { latitude, longitude } = this.props.places[0].location;
            this.setState(() => {
                return {
                    center: {
                        lat: Number.parseFloat(latitude),
                        lng: Number.parseFloat(longitude)
                    }
                }
            })
        }
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.location.lat !== this.props.location.lat || nextProps.location.lng !== this.props.location.lng;
    }


    componentDidUpdate() {
        if (this.props.location.lat && this.props.location.lng) {
            this.map.current.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.panTo(this.props.location);
        }
    }

    render() {
        let places = '';
        if (this.props.places.length > 1) {
            places = this.props.places.map((p, i) => {
                return <Marker
                    position={{ lat: Number.parseFloat(p.location.latitude), lng: Number.parseFloat(p.location.longitude) }}
                    key={i}
                />
            })
        } else if (this.props.places.length === 1) {
            places = (
                <Marker
                    position={{ lat: Number.parseFloat(this.props.places[0].location.latitude), lng: Number.parseFloat(this.props.places[0].location.longitude) }}
                />
            )
        }
        else {
            places = null;
        }

        let map = (
            <GoogleMap
                ref={this.map}
                defaultZoom={13}
                defaultCenter={{
                    lat: Number.parseFloat(this.props.location.lat),
                    lng: Number.parseFloat(this.props.location.lng)
                }}
            >
                {places}
            </GoogleMap >
        );
        return map;
    }
}


export default withScriptjs(withGoogleMap(Map));