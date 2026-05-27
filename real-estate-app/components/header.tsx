import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/header.module.css";

const navItems = [
  { key: "home", label: "Home", href: "/?view=home" },
  { key: "gallery", label: "Listings", href: "/listings-page?view=gallery" },
  { key: "realtors", label: "Realtors", href: "/realtors-page?view=realtor" },
  { key: "tools", label: "Analysis", href: "/tools-page?view=news" },
];

const Header = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const currentView = Array.isArray(query.view) ? query.view[0] : query.view;

  const activeKey = pathname === "/" || currentView === "home"
    ? "home"
    : pathname.includes("listings-page") || currentView === "gallery" || currentView === "map"
    ? "gallery"
    : pathname.includes("realtors-page") || currentView === "realtor"
    ? "realtors"
    : pathname.includes("tools-page") || ["news", "advice", "trends", "calculator"].includes(currentView || "")
    ? "tools"
    : "home";

  return (
    <header className={styles.header}>
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
        <div className={styles.loginButton}>Log In</div>
      </div>
    </header>
    
  );
};

export default Header;
