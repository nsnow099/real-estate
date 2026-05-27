import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '@/styles/listings-page-controls.module.css'

type ListingPageControlsProps = {
  display: string;
  setDisplay: (view: string) => void;
  setFiltersActive: (active: boolean) => void;
};

const ListingPageControls = ({ display, setDisplay, setFiltersActive }: ListingPageControlsProps) => {
    return (
        <div className={styles.controls}>
            <div className={styles.searchFilterGroup} onClick={(e) => e.stopPropagation()}>
                <button className={styles.filterButton} onClick={() => setFiltersActive(true)}>
                    <FontAwesomeIcon className={styles.filterIcon} icon={faFilter} />
                </button>
                <div className={styles.searchField}>
                    <input className={styles.searchInput} type="text" placeholder="Search by location, address or postal code" name="search"></input>
                    <button className={styles.searchIconBox}>
                        <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </div>
            
            <div className={styles.viewControl}>
                <button className={display==='gallery' ? `${styles.viewControlButton} ${styles.active} ${styles.activeLeft}` : `${styles.viewControlButton} ${styles.inactive}`} name='gallery button' onClick={() => setDisplay('gallery')}>Gallery</button>
                <button className={display==='map' ? `${styles.viewControlButton} ${styles.active} ${styles.activeRight}` : `${styles.viewControlButton} ${styles.inactive} ${styles.inactiveRight}`} name='map button' onClick={() => setDisplay('map')}>Map</button>
            </div>

        </div>
    )
}

export default ListingPageControls;