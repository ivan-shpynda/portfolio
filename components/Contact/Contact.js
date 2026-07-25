import section from "../Section.module.css";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <h3 className={section.sectionHeading}>Контакти</h3>
            <p className={styles.contactText}>
                Відкритий до нових проєктів та можливостей — з радістю обговорю
                деталі.
            </p>
            {/* <p className={styles.contactText}>Телефон: 0961943933</p> */}
            <p className={styles.contactText}>Email: ivanshpynda@gmail.com</p>
            <a href="mailto:ivanshpynda@gmail.com" className={styles.cta}>
                Написати листа
            </a>
            <span className={styles.copyright}>© 2026 Іван Шпинда</span>
        </section>
    );
}
