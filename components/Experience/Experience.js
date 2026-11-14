import section from "../Section.module.css";
import styles from "./Experience.module.css";

const HISTORY = [
  {
    period: "I 2023 — тепер",
    role: "Web Developer, Team Lead",
    company: "Sombra",
    points: [
      "Керував командою з 4 розробників і 2 QA, координуючи роботу та комунікацію з клієнтом",
      "Розвивав платформу для вчителів на React (20K+ користувачів) — скоротив час на звітність на 50%",
      "Створив 200+ освітніх ігор на vanilla JS для 250K+ дітей-користувачів",
      "Розробив 15 внутрішніх NPM-бібліотек, що скоротили час розробки фіч на 35%",
    ],
  },
  {
    period: "XI 2021 — I 2023",
    role: "Front-End Developer",
    company: "SoftBlues",
    points: [
      "Розробляв Vue-компоненти на TypeScript у продукті для 40K+ клієнтів",
      "Впровадив візуалізацію даних на Chart.js для 8 дашбордів",
      "Створив 20+ кастомних хуків, реалізував 20+ фіч та виправив 100+ багів",
      "Задокументував 30+ компонентів у Storybook, скоротивши онбординг на 20%",
    ],
  },
  {
    period: "V 2021 — X 2021",
    role: "UI Intern",
    company: "Grid Dynamics",
    points: ["Втілював макети в інтерфейси на JavaScript, HTML, CSS, React"],
  },
  {
    period: "2018 — 2021",
    role: "Перекладач",
    company: "Freelance",
    points: [
      "Переклад технічної документації з польської та англійської мов на українську",
      "Переклад наукових статей та матеріалів для українських видань: Medialab, Спільне",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h3 className={section.sectionHeading}>Досвід роботи та навички</h3>

      <div className={styles.historyBlock}>
        <h4 className={styles.subheading}>Досвід</h4>

        {HISTORY.map((job) => (
          <div key={job.period + job.role} className={styles.historyItem}>
            <span className={styles.historyPeriod}>{job.period}</span>
            <div className={styles.historyDetail}>
              <div>
                <h5 className={styles.historyRole}>{job.role}</h5>
                <span className={styles.historyCompany}>{job.company}</span>
              </div>
              <ul className={styles.historyPoints}>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
