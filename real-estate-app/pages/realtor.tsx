// realtor.tsx
import React, { useState } from "react";
import styles from '@/styles/realtor.module.css';
import HamburgerMenu from "@/components/HamburgerMenu";
import LoginButton from "@/components/LoginButton";
import homeStyles from "@/styles/Home.module.css";
import Pagination from "@/components/Pagination";

const Realtor: React.FC = () => {
  const [rating, setRating] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [language, setLanguage] = useState("");

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
    <div className={homeStyles.page}>
      <header className={homeStyles.header}>
        <HamburgerMenu />
      </header>

      <div className={styles.container}>
        {/* <h1 className={styles.title}>Discover Agents</h1> */}
        <div className={styles.searchAndFilters}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search by name or location"
              className={styles.searchBox1}
            />
            <img
              src="/images/searchicon.jpg"
              alt="Search Icon"
              width={48}
              height={48}
              className={styles.searchIcon}
            />
          </div>

          <div className={styles.filtersContainer}>
            <div className={styles.dropdownWrapper}>
              <select
                className={styles.filterButtonRating}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Rating</option>
                <option value="5stars">♦♦♦♦♦</option>
                <option value="4stars">♦♦♦♦</option>
                <option value="3stars">♦♦♦</option>
                <option value="2stars">♦♦</option>
                <option value="1stars">♦</option>
              </select>
            </div>

            <div className={styles.dropdownWrapper}>
              <select
                className={styles.filterButtonSpecialty}
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option value="">Specialty</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            <div className={styles.dropdownWrapper}>
              <select
                className={styles.filterButtonLanguage}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Language</option>
                <option value="english">English</option>
                <option value="french">French</option>
              </select>
            </div>

            <button
              className={styles.clearFiltersButton}
              onClick={() => {
                setRating("");
                setSpecialty("");
                setLanguage("");
              }}
            >
              Clear All Filters
            </button>
          </div>
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
