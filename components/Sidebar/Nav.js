"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { id: "about", label: "Про мене" },
  { id: "projects", label: "Проєкти" },
  { id: "experience", label: "Досвід" },
  { id: "contact", label: "Контакти" },
];

export default function Nav() {
  const [active, setActive] = useState(LINKS[0].id);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      {LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`${styles.navLink} ${active === link.id ? styles.active : ""}`}
        >
          <span className={styles.dot}></span>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
