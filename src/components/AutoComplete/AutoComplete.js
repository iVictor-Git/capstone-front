import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete'

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' }
    }

    handleChange = (address) => {
        // console.log(address);
        this.setState({ address })
    }

    handleSelect = (address) => {
        // console.log(address);
        geocodeByAddress(address)
            .then(results => {
                const city = results[0].address_components[0].long_name;
                const state = results[0].address_components[2].long_name;
                console.log(city, state);
            })
            .catch(error => console.error('Error', error))
    }

    render() {
        const { GOOGLE_PLACES_API_JS } = this.props.api_keys;
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div className='apartment-finder-input-container form-group'>
                        <input
                            {...getInputProps({
                                placeholder: 'Type an address in',
                                className: 'location-search-input form-control'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default AutoComplete;