import Sidebar from "@/components/Sidebar/Sidebar";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.layout}>
                <Sidebar />

                <main className={styles.main}>
                    <About />
                    <Projects />
                    <Experience />
                    <Contact />
                </main>
            </div>
        </div>
    );
}
