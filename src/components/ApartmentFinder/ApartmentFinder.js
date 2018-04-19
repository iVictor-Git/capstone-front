import React, { Component } from 'react';
import './ApartmentFinder.css';
import AutoComplete from '../AutoComplete/AutoComplete';

class ApartmentFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',

        }
    }

    handleChange = (event) => {
        this.setState({search: event.target.value});
    }

    render() {
        const {api_keys} = this.props;
        return (
            <div className='apartment-finder-component-container'>
                <div className='apartment-finder-title-container'>
                    <h1>Apartment search</h1>
                </div>
                <div className='apartment-finder-search-container'>
                    <form action="" onSubmit={(event) => event.preventDefault()}>
                        <AutoComplete api_keys={api_keys}/>
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