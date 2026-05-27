import { useRef, useState, useEffect, FormEvent } from "react";
import styles from '@/styles/filters-popup.module.css'

type FiltersPopupProps = {
  setFiltersActive: (active: boolean) => void;
};

const FiltersPopup = ({ setFiltersActive }: FiltersPopupProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const savedSearchRef = useRef<HTMLSelectElement>(null);
  const [formError, setFormError] = useState("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const closePopup = () => {
    formRef.current?.reset();
    if (savedSearchRef.current) savedSearchRef.current.selectedIndex = 0;
    setFormError("");
    setInvalidFields([]);
    setFiltersActive(false);
  };

  const fieldClass = (name: string) => invalidFields.includes(name) ? `${styles.rangeInput} ${styles.inputError}` : styles.rangeInput;

  const validateRange = (form: HTMLFormElement, label: string, minName: string, maxName: string) => {
    const minInput = form.elements.namedItem(minName) as HTMLInputElement | null;
    const maxInput = form.elements.namedItem(maxName) as HTMLInputElement | null;
    if (!minInput || !maxInput) return null;

    const minValue = minInput.value.trim();
    const maxValue = maxInput.value.trim();
    if (!minValue || !maxValue) return null;

    const minNumber = Number(minValue);
    const maxNumber = Number(maxValue);
    if (!Number.isNaN(minNumber) && !Number.isNaN(maxNumber) && minNumber > maxNumber) {
      return { label, minName, maxName };
    }
    return null;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("[handleSubmit] Form submitted");
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const validations = [
      { label: "Price Range", minName: "price-min", maxName: "price-max" },
      { label: "Storeys", minName: "storeys-min", maxName: "storeys-max" },
      { label: "Beds", minName: "beds-min", maxName: "beds-max" },
      { label: "Baths", minName: "baths-min", maxName: "baths-max" },
      { label: "Land Size", minName: "land-min", maxName: "land-max" },
      { label: "Year Built", minName: "year-min", maxName: "year-max" },
    ];

    const invalids: string[] = [];
    const invalidLabels: string[] = [];

    validations.forEach(({ label, minName, maxName }) => {
      const invalid = validateRange(form, label, minName, maxName);
      console.log(`[validateRange] ${label}: ${invalid ? "INVALID" : "valid"}`);
      if (invalid) {
        invalids.push(invalid.minName, invalid.maxName);
        invalidLabels.push(invalid.label);
      }
    });

    console.log("[handleSubmit] Invalid fields:", invalids);
    if (invalids.length > 0) {
      setInvalidFields(invalids);
      setFormError(`Min value cannot be larger than max value`);
      console.log("[handleSubmit] Validation errors set");
      return;
    }

    setInvalidFields([]);
    setFormError("");
    closePopup();
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
    <div className={styles.filtersPopupWrapper} onClick={(e) => e.stopPropagation()}>
      <div className={styles.filtersPopup}>
        <div className={styles.popupHeader}>
          <div>
            <h3>Refine your search</h3>
          </div>
          <div className={styles.savedSearches}>
            <label htmlFor="saved-searches">Saved filters</label>
            <select ref={savedSearchRef} id="saved-searches" className={styles.savedSearchesDropdown} name="saved searches">
              <option>Select</option>
              <option>Toronto</option>
              <option>Apartments</option>
              <option>Townhouses</option>
              <option>Cheap Options</option>
            </select>
          </div>
        </div>
        
        <form ref={formRef} className={styles.filterGrid} onSubmit={handleSubmit}>
          {formError && <div className={styles.formErrorMessage}>{formError}</div>}
          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Transaction Type</span>
            <div className={`${styles.options} ${styles.radioOptions}`}>
              <label>
                <input type="radio" name="rent-or-sale" value="sale" defaultChecked/> For Sale
              </label>
              <label>
                <input type="radio" name="rent-or-sale" value="rent" /> For Rent
              </label>
            </div>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Price Range (CAD)</span>
            <div className={`${styles.options} ${styles.rangeOptions}`}>
              <input name="price-min" type="number" min="0" placeholder="Min" className={fieldClass("price-min")} />
              -
              <input name="price-max" type="number" min="0" placeholder="Max" className={fieldClass("price-max")} />
            </div>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Property Type</span>
            <select className={styles.selectInput}>
              <option>Any</option>
              <option>Residential</option>
              <option>Condo/Strata</option>
              <option>Vacant Land</option>
              <option>Recreational</option>
              <option>Multi Family</option>
            </select>
          </div>
          
          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Storeys</span>
            <div className={`${styles.options} ${styles.rangeOptions}`}>
              <input name="storeys-min" type="number" min="0" placeholder="Min" className={fieldClass("storeys-min")} />
              -
              <input name="storeys-max" type="number" min="0" placeholder="Max" className={fieldClass("storeys-max")} />
            </div>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Beds</span>
            <div className={`${styles.options} ${styles.rangeOptions}`}>
              <input name="beds-min" type="number" min="0" placeholder="Min" className={fieldClass("beds-min")} />
              -
              <input name="beds-max" type="number" min="0" placeholder="Max" className={fieldClass("beds-max")} />
            </div>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Baths</span>
            <div className={`${styles.options} ${styles.rangeOptions}`}>
              <input name="baths-min" type="number" min="0" placeholder="Min" className={fieldClass("baths-min")} />
              -
              <input name="baths-max" type="number" min="0" placeholder="Max" className={fieldClass("baths-max")} />
            </div>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Ownership Type</span>
            <select className={styles.selectInput}>
              <option>Any</option>
              <option>Freehold</option>
              <option>Condo/Strata</option>
              <option>Timeshare/Fractional</option>
              <option>Leasehold</option>
            </select>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Land Size (m²)</span>
            <div className={`${styles.options} ${styles.rangeOptions}`}>
              <input name="land-min" type="number" min="0" placeholder="Min" className={fieldClass("land-min")} />
              -
              <input name="land-max" type="number" min="0" placeholder="Max" className={fieldClass("land-max")} />
            </div>
          </div>

          <div className={styles.filterCard}>
            <span className={styles.fieldLabel}>Year Built</span>
            <div className={`${styles.options} ${styles.rangeOptions}`}>
              <input name="year-min" type="number" min="1600" placeholder="Min" className={fieldClass("year-min")} />
              -
              <input name="year-max" type="number" min="1600" placeholder="Max" className={fieldClass("year-max")} />
            </div>
          </div>

          <div>
            <div className={styles.actionRow}>
              <button type="button" className={styles.secondaryButton} onClick={closePopup}>Cancel</button>
              <button type="submit" className={styles.primaryButton}>Search</button>
            </div>
            <button className={styles.saveFiltersBtn}>Save these filters</button>
          </div>
          

        </form>
      </div>
    </div>
  );
};

export default FiltersPopup;