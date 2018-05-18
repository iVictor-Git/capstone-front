import React, { Component } from 'react';
import Map from '../Map/Map';
import classes from './ApartmentFinder.css';

// IMPORTANT -> functionality works, just need a better place to grab data.

class ApartmentFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            places: [
                {
                    "identifier": {
                        "obPropId": "16370081112103",
                        "fips": "12103",
                        "apn": "353016089280030060",
                        "apnOrig": "353016089280030060"
                    },
                    "address": {
                        "country": "US",
                        "countrySubd": "FL",
                        "line1": "2766 62ND AVE N",
                        "line2": "SAINT PETERSBURG, FL 33702",
                        "locality": "Saint Petersburg",
                        "matchCode": "ExaStr",
                        "oneLine": "2766 62ND AVE N, SAINT PETERSBURG, FL 33702",
                        "postal1": "33702",
                        "postal2": "6372",
                        "postal3": "C014"
                    },
                    "location": {
                        "accuracy": "Street",
                        "elevation": 0,
                        "latitude": "27.828256",
                        "longitude": "-82.670902",
                        "distance": 0,
                        "geoid": "CO12103,CS1293042,DB1201560,MT30003675,PL1239775,RS0000605488,SB0000079356,SB0000079362,SB0000079358,ZI33702"
                    },
                    "vintage": {
                        "lastModified": "2018-1-24",
                        "pubDate": "2018-2-7"
                    }
                },
                {
                    "identifier": {
                        "obPropId": "16370081112104",
                        "fips": "12103",
                        "apn": "353016089280030060",
                        "apnOrig": "353016089280030060"
                    },
                    "address": {
                        "country": "US",
                        "countrySubd": "FL",
                        "line1": "2766 62ND AVE N",
                        "line2": "SAINT PETERSBURG, FL 33702",
                        "locality": "Saint Petersburg",
                        "matchCode": "ExaStr",
                        "oneLine": "2766 62ND AVE N, SAINT PETERSBURG, FL 33702",
                        "postal1": "33702",
                        "postal2": "6372",
                        "postal3": "C014"
                    },
                    "location": {
                        "accuracy": "Street",
                        "elevation": 0,
                        "latitude": "27.828256",
                        "longitude": "-82.670902",
                        "distance": 0,
                        "geoid": "CO12103,CS1293042,DB1201560,MT30003675,PL1239775,RS0000605488,SB0000079356,SB0000079362,SB0000079358,ZI33702"
                    },
                    "vintage": {
                        "lastModified": "2018-1-24",
                        "pubDate": "2018-2-7"
                    }
                },
                {
                    "identifier": {
                        "obPropId": "16370081112105",
                        "fips": "12103",
                        "apn": "353016089280030060",
                        "apnOrig": "353016089280030060"
                    },
                    "address": {
                        "country": "US",
                        "countrySubd": "FL",
                        "line1": "2766 62ND AVE N",
                        "line2": "SAINT PETERSBURG, FL 33702",
                        "locality": "Saint Petersburg",
                        "matchCode": "ExaStr",
                        "oneLine": "2766 62ND AVE N, SAINT PETERSBURG, FL 33702",
                        "postal1": "33702",
                        "postal2": "6372",
                        "postal3": "C014"
                    },
                    "location": {
                        "accuracy": "Street",
                        "elevation": 0,
                        "latitude": "27.828256",
                        "longitude": "-82.670902",
                        "distance": 0,
                        "geoid": "CO12103,CS1293042,DB1201560,MT30003675,PL1239775,RS0000605488,SB0000079356,SB0000079362,SB0000079358,ZI33702"
                    },
                    "vintage": {
                        "lastModified": "2018-1-24",
                        "pubDate": "2018-2-7"
                    }
                },
                {
                    "identifier": {
                        "obPropId": "16370081112106",
                        "fips": "12103",
                        "apn": "353016089280030060",
                        "apnOrig": "353016089280030060"
                    },
                    "address": {
                        "country": "US",
                        "countrySubd": "FL",
                        "line1": "2766 62ND AVE N",
                        "line2": "SAINT PETERSBURG, FL 33702",
                        "locality": "Saint Petersburg",
                        "matchCode": "ExaStr",
                        "oneLine": "2766 62ND AVE N, SAINT PETERSBURG, FL 33702",
                        "postal1": "33702",
                        "postal2": "6372",
                        "postal3": "C014"
                    },
                    "location": {
                        "accuracy": "Street",
                        "elevation": 0,
                        "latitude": "27.828256",
                        "longitude": "-82.670902",
                        "distance": 0,
                        "geoid": "CO12103,CS1293042,DB1201560,MT30003675,PL1239775,RS0000605488,SB0000079356,SB0000079362,SB0000079358,ZI33702"
                    },
                    "vintage": {
                        "lastModified": "2018-1-24",
                        "pubDate": "2018-2-7"
                    }
                }
            ],
            apiKeys: {
                googleMapsFull: ''
            },
            apiKeysLoaded: false,
            center: {
                lat: '',
                lng: ''
            },
            error: {
                code: '',
                message: ''
            }
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password: '12345+12345'
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apiKeys: {
                        googleMapsFull: data.googleMapsFull
                    },
                    apiKeysLoaded: true
                }, () => {
                    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.state.apiKeys.googleMapsFull}`, {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(res => res.json())
                        .then(res => this.setState({
                            center: {
                                lat: res.location.lat,
                                lng: res.location.lng
                            }
                        }))
                        .catch(console.log);
                });
            })
            .catch(err => {
                console.log(err);
            })

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch(`https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=${this.state.search}&propertytype=APARTMENT&page=1&pagesize=20`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'apikey': '216a286caf9ec8435f1b49e09a31207c'
                }
            })
            let data = await response.json();
            if (data.property.length && data.status.code === 0) {
                const { latitude, longitude } = data.property[0].location;
                const center = {
                    lat: Number.parseFloat(latitude),
                    lng: Number.parseFloat(longitude)
                };
                return this.setState({
                    places: data.property,
                    center: center
                })
            }
            return this.setState({
                error: {
                    code: 5,
                    message: 'No results found'
                }
            })
        }
        catch (e) {
            console.log('Something went wrong');
        }
    }

    handleSelection = (id) => {
        // take unique identifier
        // filter through places
        // grab selected long/lat
        // setState for center
        // these 3 variables can be gotten rid of by combining
        const selected = this.state.places.filter(p => p.identifier.obPropId === id)
        const { latitude, longitude } = selected[0].location;
        const center = {
            lat: Number.parseFloat(latitude),
            lng: Number.parseFloat(longitude)
        }
        this.setState({ center })
    }

    loadPlaces = (places) => {
        const results = places.map(place => {
            const { oneLine } = place.address;
            return (
                <div
                    className={classes.Result}
                    key={place.identifier.obPropId}
                    onClick={() => this.handleSelection(place.identifier.obPropId)}
                >
                    <div
                        className='results-container'
                    >
                        <div className='results-image'><img src="#" alt="" /></div>
                        <div className='results-address-full'>
                            {oneLine}
                        </div>
                    </div>
                </div>
            )
        })
        return results;
    }

    render() {
        // const {api_keys} = this.props;
        return (
            <div className={classes.ApartmentFinder}>
                <div className={classes.Container}>
                    <div className='apartment-finder-title-container'>
                        <h1>Apartment search</h1>
                    </div>
                    {/* <div className='apartment-finder-search-container'> */}
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className='form-group search-input-container'>
                            <input className={classes.Search} onChange={this.handleChange} type="text" name='search' placeholder='Enter a zip code' />
                        </div>
                        {/* <AutoComplete api_keys={api_keys}/> */}
                    </form>
                    {/* </div> */}

                    <Map
                        places={this.state.places}
                        loaded={this.state.apiKeysLoaded}
                        isMarkerShown
                        location={this.state.center}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDKAlopzZGCKPxVvhlgXOf8RhoYIeezb9I&v=3.exp&libraries=geometry,drawing,places`}
                        containerElement={<div className={classes.MapContainer} />}
                        loadingElement={<div className={classes.MapLoading} />}
                        mapElement={<div className={classes.Map} />}
                    />
                </div>

                <div className={classes.Results}>
                    <div className='apartment-finder-list-results-container'>
                        {this.loadPlaces(this.state.places)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ApartmentFinder;