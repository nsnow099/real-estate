import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/HamburgerMenu.module.css";
import LoginButton from "./LoginButton";

const navItems = [
  { key: "home", label: "Home", href: "/?view=home" },
  { key: "gallery", label: "Listings", href: "/listingSearchPage?view=gallery" },
  { key: "realtors", label: "Realtors", href: "/realtor?view=realtor" },
  { key: "tools", label: "Analysis", href: "/analysisTools?view=news" },
];

const HamburgerMenu = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const currentView = Array.isArray(query.view) ? query.view[0] : query.view;

  const activeKey = pathname === "/" || currentView === "home"
    ? "home"
    : pathname.includes("listingSearchPage") || currentView === "gallery" || currentView === "map"
    ? "gallery"
    : pathname.includes("realtor") || currentView === "realtor"
    ? "realtors"
    : pathname.includes("analysisTools") || ["news", "advice", "trends", "calculator"].includes(currentView || "")
    ? "tools"
    : "home";

  return (
    <div className={styles.topNav}>
      <div className={styles.brandContainer}>
        <Link href='/?view=home'>
          <img src="/icon-house-blue.ico" alt="Realest Estate logo" className={styles.brandLogoIcon}/>
        </Link>
          
      </div>

      <ul className={styles.linkList}>
        {navItems.map((item) => (
          <li key={item.key}>
            <Link href={item.href} className={`${styles.navLink} ${activeKey === item.key ? styles.active : ""}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <LoginButton />
    </div>
  );
};

export default HamburgerMenu;
