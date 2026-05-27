import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListingsGallery from "@/components/listings-gallery";
import ListingPageControls from "@/components/listings-page-controls";
import FiltersPopup from "@/components/filters-popup";
import Pagination from "@/components/pagination"; 
import Header from "@/components/header"; 
import styles from "@/styles/listings-page.module.css"

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
        <div onClick={() => setFiltersActive(false)} className="page"> 
            <Header />

            <main>
                <ListingPageControls display={display} setDisplay={setDisplay} setFiltersActive={setFiltersActive} />

                {/* Gallery View */}
                <div style={{ display: display === 'gallery' ? 'block' : 'none'}}>
                    <ListingsGallery />
                    <Pagination /> 
                </div>

                {/* Map View */}
                <div style={{ display: display === 'map' ? 'block' : 'none'}} className={styles.mapContainer}>
                    <iframe 
                    src="https://www.google.com/maps/d/u/0/embed?mid=1rfA5HSLjHPqq60zpRHR0O_9_WV31YHg&ehbc=2E312F&noprof=1" 
                    width="1100" 
                    height="550"
                    style={{marginTop:'-47px'}}
                    />
                </div>

                {/* Filters Popup */}
                <div className={styles.overlay} style={filtersActive ? { display: 'flex'} : { display: 'none' }}>
                    <FiltersPopup setFiltersActive={setFiltersActive} />
                </div>
                
            </main>

        </div>
    );
};

export default ListingSearchPage;
