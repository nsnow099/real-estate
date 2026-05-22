import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "@/styles/Home.module.css";
import ToolsPageControls from "@/components/toolsPageControls";
import MortgageCalculator from "@/components/mortgageCalculator";

const AnalysisTools = () => {
    const router = useRouter();
    const { view } = router.query;

    const [display, setDisplay] = useState("news");

    useEffect(() => {
        if (view === "news") {
            setDisplay("news");
        } else if (view === "advice") {
            setDisplay("advice");
        } else if (view === "trends") {
            setDisplay("trends");
        } else if (view === "calculator") {
            setDisplay("calculator");
        }
    }, [view]);

    return (
        <div>
            <header className={styles.header}>
                <HamburgerMenu /> 
            </header>
            <main className={styles.main}>
                Under construction
            </main>
        </div>
    );
}

export default AnalysisTools;
