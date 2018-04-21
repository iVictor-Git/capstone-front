import React, { Component } from 'react';
import './ApartmentFinder.css';
import AutoComplete from '../AutoComplete/AutoComplete';

class ApartmentFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            places: [],

        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=${this.state.search}&propertytype=APARTMENT&page=1&pagesize=20`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'apikey': '216a286caf9ec8435f1b49e09a31207c'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({places: response.property}, 
                () => console.log(this.state.places)))
            .catch(err => console.log('Something went wrong fetching properties'));
        console.log('submitted');
    }

    render() {
        // const {api_keys} = this.props;
        return (
            <div className='apartment-finder-component-container container'>
                <div className='apartment-finder-title-container'>
                    <h1>Apartment search</h1>
                </div>
                <div className='apartment-finder-search-container'>
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <input className='form-control' onChange={this.handleChange} type="text" name='search' placeholder='Enter a zip code' />

                        </div>
                        {/* <AutoComplete api_keys={api_keys}/> */}
                    </form>
                </div>

                <div className='apartment-finder-results-to-display-container'>
                    <div className='apartment-finder-map-results-container'>

                    </div>
                </div>

                <div className='apartment-finder-search-results-container'>
                    <div className='apartment-finder-list-results-container'>
                        <div className='apartment-finder-individual-results-container'></div>
                        <div className='apartment-finder-individual-results-container'></div>
                        <div className='apartment-finder-individual-results-container'></div>
                        <div className='apartment-finder-individual-results-container'></div>
                        <div className='apartment-finder-individual-results-container'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApartmentFinder;