import Head from "next/head";
import styles from "@/styles/home.module.css";
import Header from "@/components/header";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData = {
    Cities: ["Toronto", "Ottawa"],
    "Street Addresses": ["123 Elm Street", "456 Maple Avenue"],
    Realtors: ["John Doe", "Jane Smith"],
    Tools: ["Mortgage Calculator"]
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredData = Object.entries(searchData).reduce((acc, [category, items]) => {
    const matches = items.filter(item =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (matches.length > 0) acc[category] = matches;
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="page">
      <Head>
        <title>Realest Estate</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <div className={styles.backgroundPicContainer}>
          <img src="/images/house-background.jpeg" alt="Modern home exterior" style={{position:'absolute'}}/>
          <div className={styles.websiteNameContainer}>
            <h1 className={styles.title}>Realest Estate</h1>
          </div>
        </div>

        <div className={styles.searchContainer} ref={searchRef}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.searchInput}
            value={searchInput}
            onClick={() => setShowDropdown(true)}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowDropdown(true);
            }}
          />
          <button className={styles.searchButton}>Search</button>

          {showDropdown && (
            <div className={styles.dropdown}>
              {Object.keys(filteredData).length > 0 ? (
                Object.entries(filteredData).map(([category, items]) => (
                  <div key={category}>
                    <h4>{category}</h4>
                    {items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
