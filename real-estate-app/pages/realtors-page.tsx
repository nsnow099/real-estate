// realtor.tsx
import { useState } from "react";
import styles from '@/styles/realtors-page.module.css';
import Header from "@/components/header";
import Pagination from "@/components/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

const Realtor: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rating, setRating] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [language, setLanguage] = useState("");

  const filters = [
    {
      name: "rating",
      value: rating,
      setter: setRating,
      options: [
        { value: "", label: "Rating" },
        { value: "5stars", label: "♦♦♦♦♦" },
        { value: "4stars", label: "♦♦♦♦" },
        { value: "3stars", label: "♦♦♦" },
        { value: "2stars", label: "♦♦" },
        { value: "1stars", label: "♦" },
      ],
    },
    {
      name: "specialty",
      value: specialty,
      setter: setSpecialty,
      options: [
        { value: "", label: "Specialty" },
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
        { value: "luxury", label: "Luxury" },
      ],
    },
    {
      name: "language",
      value: language,
      setter: setLanguage,
      options: [
        { value: "", label: "Language" },
        { value: "english", label: "English" },
        { value: "french", label: "French" },
      ],
    },
  ];

  const clearFilters = () => {
    setRating("");
    setSpecialty("");
    setLanguage("");
  };

  const agents = [
    {
      name: "Scottier Barney",
      rating: "♦♦♦♦",
      bio: "Specialist in downtown condos",
      experience: "5 years experience",
      image: "/images/guy1.jpg",
    },
    {
      name: "Amara Chen",
      rating: "♦♦♦♦♦",
      bio: "Luxury home expert",
      experience: "7 years experience",
      image: "/images/guy2.jpg",
    },
    {
      name: "Liam O'Reilly",
      rating: "♦♦♦",
      bio: "Focus on suburban family homes",
      experience: "3 years experience",
      image: "/images/guy3.jpg",
    },
    {
      name: "Nina Patel",
      rating: "♦♦♦♦",
      bio: "Commercial property pro",
      experience: "6 years experience",
      image: "/images/guy4.jpg",
    },
    {
      name: "Carlos Rivera",
      rating: "♦♦♦♦♦",
      bio: "Multi-lingual agent (EN/ES)",
      experience: "8 years experience",
      image: "/images/guy5.jpg",
    },
    {
      name: "Fatima Zahra",
      rating: "♦♦♦♦",
      bio: "First-time buyer guide",
      experience: "4 years experience",
      image: "/images/guy6.jpg",
    },
    {
      name: "Jackson Lee",
      rating: "♦♦",
      bio: "Budget-friendly listings",
      experience: "2 years experience",
      image: "/images/guy7.jpg",
    },
    {
      name: "Isabelle Tremblay",
      rating: "♦♦♦♦♦",
      bio: "Bilingual French-English agent",
      experience: "9 years experience",
      image: "/images/guy8.jpeg",
    },
  ];

  return (
    <div className="page">
      <Header />

      <div className={styles.container}>
        <div className={styles.searchAndFilters}>
          <div className={styles.searchField}> 
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search by location, address or postal code"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchIconBox} type="button">
              <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
            </button>
          </div>

          {filters.map(({ name, value, setter, options }) => (
            <div key={name} className={styles.realtorFilterItem}>
              <select
                className={styles.selectInput}
                value={value}
                onChange={(e) => setter(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button className={styles.clearFiltersButton} type="button" onClick={clearFilters}>
            Clear All Filters
          </button>
        </div>

        <h1 className={styles.agentCount}>100 agents found</h1>

        <div className={styles.agentGrid}>
          {agents.map((agent, index) => (
            <div key={index} className={styles.agentCard} style={{ cursor: "pointer" }}>
              <div className={styles.agentImageContainer}>
                <img
                  src={agent.image}
                  alt={`Profile of ${agent.name}`}
                  width={100}
                  height={100}
                  className={styles.agentImage}
                />
              </div>
              <h1 className={styles.agentRating}>Rating: {agent.rating}</h1>
              <h1 className={styles.agentName}>{agent.name}</h1>
              <h1 className={styles.agentBio}>{agent.bio}</h1>
              <h1 className={styles.agentExperience}>{agent.experience}</h1>
            </div>
          ))}
        </div>

        <Pagination />
      </div>
    </div>
    
  );
};

export default Realtor;
