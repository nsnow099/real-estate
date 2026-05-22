import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type ListingPageControlsProps = {
  display: string;
  setDisplay: (view: string) => void;
  setFiltersActive: (active: boolean) => void;
};

const ListingPageControls = ({ display, setDisplay, setFiltersActive }: ListingPageControlsProps) => {
    return (
        <div className='controls'>
            <div className='search-filter-group' onClick={(e) => e.stopPropagation()}>
                <button className='filter-button' onClick={() => setFiltersActive(true)}>
                    <FontAwesomeIcon className='filter-icon' icon={faFilter} />
                </button>
                <div className='search-field'>
                    <input className='search-input' type="text" placeholder="Search by location, address or postal code" name="search"></input>
                    <button className='search-icon-box'>
                        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
                    </button>
                    
                </div>
            </div>
            
            <div className='view-control'>
                <button className={display==='gallery' ? 'view-control-button active active-left' : 'view-control-button inactive'} name='gallery button' onClick={() => setDisplay('gallery')}>Gallery</button>
                <button className={display==='map' ? 'view-control-button active active-right' : 'view-control-button inactive inactive-right'} name='map button' onClick={() => setDisplay('map')}>Map</button>
            </div>

        </div>
    )
}

export default ListingPageControls;