import Image from "next/image";
import section from "../Section.module.css";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    kicker: "Сайт",
    title: "Музей Митрополита Андрея",
    description:
      "Сайт для музею Митрополита Андрея Шептицького у Львові. Запуск у продакшн планується у серпні 2026 року.",
    tech: ["Next.js", "Firebase", "CSS Modules"],
    demoUrl: "https://museum-sandy-nine.vercel.app/",
    demoLabel: "museum-sandy-nine.vercel.app",
    githubUrl: "https://github.com/ivan-shpynda/museum",
    image: "/imgs/museum.png",
    imageAlt: "Скрін сайту музею Митрополита Андрея",
    note: "Готується до запуску",
  },
  {
    kicker: "Сайт",
    title: "NYT і розпад СРСР",
    description:
      "Візуалізація для дослідження про висвітлення розпаду Радянського Союзу виданням The New York Times.",
    tech: ["React", "SQLite", "Chart.js"],
    demoUrl: "https://nyt-topics.vercel.app/",
    demoLabel: "nyt-topics.vercel.app",
    githubUrl: "https://github.com/ivan-shpynda/nyt-topics",
    image: "/imgs/nyt-topics.png",
    imageAlt: "Скрін візуалізації NYT і розпад СРСР",
  },
  {
    kicker: "Веб-гра",
    title: "Вгадай рік",
    description: "Гра-вікторина про важливі події в історії України.",
    tech: ["Vue.js"],
    demoUrl: "https://guess-the-year-omega.vercel.app/",
    demoLabel: "guess-the-year-omega.vercel.app",
    githubUrl: "https://github.com/ivan-shpynda/guess-the-year",
    image: "/imgs/guess-year.png",
    imageAlt: "Скрін гри Вгадай рік",
  },
];

function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectBody}>
        <div className={styles.projectContent}>
          <div className={styles.projectKicker}>{project.kicker}</div>
          <h4 className={styles.projectTitle}>{project.title}</h4>
          <p className={styles.projectDesc}>{project.description}</p>
          <div className={styles.techList}>
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className={styles.projectLinks}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener"
              className={styles.linkAccent}
            >
              Demo ↗
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener"
              className={styles.linkMuted}
            >
              GitHub ↗
            </a>
          </div>
          {project.note && (
            <span className={styles.noteBadge}>{project.note}</span>
          )}
        </div>
        <a
          className={styles.projectThumb}
          href={project.demoUrl}
          target="_blank"
          rel="noopener"
        >
          <div className={styles.browserWindow}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
            </div>
            <div className={styles.browserUrl}>
              <span className={styles.urlIcon}></span>
              <span className={styles.urlText}>{project.demoLabel}</span>
            </div>
            <div className={styles.browserContent}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="220px"
              />
            </div>
          </div>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={section.section}>
      <div className={section.sectionHeader}>
        <h3 className={section.sectionHeading}>Проєкти</h3>
        <span className={section.sectionSubheading}>Open source</span>
      </div>

      <div className={styles.projectList}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
