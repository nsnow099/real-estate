import { useRef, useEffect } from "react";

type FiltersPopupProps = {
  setFiltersActive: (active: boolean) => void;
};

const FiltersPopup = ({ setFiltersActive }: FiltersPopupProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const savedSearchRef = useRef<HTMLSelectElement>(null);

  const closePopup = () => {
    formRef.current?.reset();
    if (savedSearchRef.current) savedSearchRef.current.selectedIndex = 0;
    setFiltersActive(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      const active = document.activeElement as HTMLElement | null;
      if (active && active.tagName === 'TEXTAREA') return;
      if (active && active.tagName === 'BUTTON') return;
      e.preventDefault();
      if (formRef.current) {
        const f = formRef.current as any;
        if (typeof f.requestSubmit === 'function') f.requestSubmit();
        else f.submit();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="filters-popup-wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="filters-popup">
        <div className="popup-header">
          <div>
            <h3>Refine your search</h3>
          </div>
          <div className="saved-searches">
            <label htmlFor="saved-searches">Saved filters</label>
            <select ref={savedSearchRef} id="saved-searches" className="saved-searches-dropdown" name="saved searches">
              <option>Select</option>
              <option>Toronto</option>
              <option>Apartments</option>
              <option>Townhouses</option>
              <option>Cheap Options</option>
            </select>
          </div>
        </div>
        
        <form ref={formRef} className="filter-grid" onSubmit={(e) => { e.preventDefault(); closePopup(); }}>
          <div className="filter-card">
            <span className="field-label">Transaction Type</span>
            <div className="options radio-options">
              <label>
                <input type="radio" name="rent-or-sale" value="sale" defaultChecked/> For Sale
              </label>
              <label>
                <input type="radio" name="rent-or-sale" value="rent" /> For Rent
              </label>
            </div>
          </div>

          <div className="filter-card">
            <span className="field-label">Price Range (CAD)</span>
            <div className="options range-options">
              <input type="number" min="0" placeholder="0" className="range-input" />
              -
              <input type="number" min="0" placeholder="999,999" className="range-input" />
            </div>
          </div>

          <div className="filter-card">
            <span className="field-label">Property Type</span>
            <select className="select-input">
              <option>Any</option>
              <option>Residential</option>
              <option>Condo/Strata</option>
              <option>Vacant Land</option>
              <option>Recreational</option>
              <option>Multi Family</option>
            </select>
          </div>
          
          <div className="filter-card">
            <span className="field-label">Storeys</span>
            <div className="options range-options">
              <input type="number" min="0" placeholder="Min" className="range-input" />
              -
              <input type="number" min="0" placeholder="Max" className="range-input" />
            </div>
          </div>

          <div className="filter-card">
            <span className="field-label">Beds</span>
            <div className="options range-options">
              <input type="number" min="0" placeholder="Min" className="range-input" />
              -
              <input type="number" min="0" placeholder="Max" className="range-input" />
            </div>
          </div>

          <div className="filter-card">
            <span className="field-label">Baths</span>
            <div className="options range-options">
              <input type="number" min="0" placeholder="Min" className="range-input" />
              -
              <input type="number" min="0" placeholder="Max" className="range-input" />
            </div>
          </div>

          <div className="filter-card">
            <span className="field-label">Ownership Type</span>
            <select className="select-input">
              <option>Any</option>
              <option>Freehold</option>
              <option>Condo/Strata</option>
              <option>Timeshare/Fractional</option>
              <option>Leasehold</option>
            </select>
          </div>

          <div className="filter-card">
            <span className="field-label">Land Size (m²)</span>
            <div className="options range-options">
              <input type="number" min="0" placeholder="Min" className="range-input" />
              -
              <input type="number" min="0" placeholder="Max" className="range-input" />
            </div>
          </div>

          <div className="filter-card">
            <span className="field-label">Year Built</span>
            <div className="options range-options">
              <input type="number" min="1600" placeholder="Min" className="range-input" />
              -
              <input type="number" min="1600" placeholder="Max" className="range-input" />
            </div>
          </div>

          <div className="action-row">
            <button type="button" className="secondary-button" onClick={closePopup}>Cancel</button>
            <button type="submit" className="primary-button">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FiltersPopup;