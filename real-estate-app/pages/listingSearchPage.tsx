import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import ListingsMap from "@/components/listingsMap";
import ListingsGallery from "@/components/ListingsGallery";
import ListingPageControls from "@/components/listingPageControls";
import FiltersPopup from "@/components/filtersPopup";
import Pagination from "@/components/Pagination"; 
import HamburgerMenu from "@/components/HamburgerMenu"; // Import hamburger menu

const ListingSearchPage = () => {
    const router = useRouter();
    const { view } = router.query;

    const [display, setDisplay] = useState("gallery");
    const [filtersActive, setFiltersActive] = useState(false);

    useEffect(() => {
        if (view === "gallery") {
            setDisplay("gallery");
        } else if (view === "map") {
            setDisplay("map");
        }
    }, [view]);

    return ( 
        <div onClick={() => setFiltersActive(false)} > 
            <header className={styles.header}>
                <HamburgerMenu />
            </header>

            <main className={styles.main}>
                <div>
                    <ListingPageControls display={display} setDisplay={setDisplay} setFiltersActive={setFiltersActive} />
                </div>

                {/* Gallery View */}
                <div style={{ display: display === 'gallery' ? 'block' : 'none', paddingLeft: '7px' }}>
                    <ListingsGallery />
                    <Pagination /> 
                </div>

                {/* Map View */}
                <div style={display === 'map' ? { display: 'block', width: '1100px', marginTop:'30px', overflow:'hidden' } : { display: 'none', width: '100px' }}>
                    <ListingsMap />
                </div>

                {/* Filters Popup */}
                <div className="overlay" style={filtersActive ? { display: 'flex'} : { display: 'none' }}>
                    <FiltersPopup setFiltersActive={setFiltersActive} />
                </div>
                
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default ListingSearchPage;
