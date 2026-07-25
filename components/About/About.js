import section from "../Section.module.css";
import styles from "./About.module.css";

const TAGS = ["React", "Vue.js", "TypeScript", "Node.js", "Claude Code"];

export default function About() {
  return (
    <section id="about" className={section.section}>
      <h3 className={section.sectionHeading}>Про мене</h3>
      <p>
        Full-stack розробник з 5-річним досвідом роботи з сучасними
        веб-технологіями: React, Vue.js, TypeScript, Tailwind CSS, Node.js та
        інше. Ефективно використовую AI інструменти для швидкого
        прототипування та розробки.
      </p>
      <p>
        Окрім програмування, маю досвід лідерства. Понад два роки очолював
        команду з 4 розробників та 2 тестувальників. Займався плануванням
        спринтів, розстановкою пріоритетів і підвищенням ефективності
        процесів.
      </p>
      <p>
        На своєму останньому проєкті серед іншого займався створенням
        внутрішніх NPM-пакетів та Node.js скриптів, що допомогло скоротити
        час розробки на близько 35%.
      </p>
      <div className={styles.tagList}>
        {TAGS.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
}
