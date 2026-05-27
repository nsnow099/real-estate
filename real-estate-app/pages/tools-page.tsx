import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/header";
import styles from "@/styles/tools-page.module.css";

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
        <div className="page">
            <Header /> 
            <main>
                Under construction
            </main>
        </div>
    );
}

export default AnalysisTools;
