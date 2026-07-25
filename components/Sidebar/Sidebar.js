import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import styles from "./Sidebar.module.css";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ivan-shpynda",
    label: "GitHub",
    path: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z",
  },
  {
    href: "https://www.linkedin.com/in/ivan-shpynda-3576021a1",
    label: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z",
  },
  {
    href: "https://t.me/ian_shp",
    label: "Telegram",
    path: "M23.5 2.5 20 21.6c-.26 1.15-.95 1.43-1.92.9l-5.3-3.9-2.56 2.46c-.28.28-.52.52-1.07.52l.38-5.4L19.5 6.3c.44-.4-.1-.62-.7-.22L6.24 13.9.9 12.24c-1.16-.36-1.18-1.16.25-1.72L22.02.86c.97-.36 1.82.23 1.48 1.64Z",
  },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.intro}>
        <h1 className={styles.name}>Іван Шпинда</h1>
        <h2 className={styles.title}>Full-stack розробник</h2>
        <p className={styles.tagline}>
          Створюю веб сайти від дизайн-прототипу до продакшену.
        </p>
      </div>

      <Nav />

      <ThemeToggle />

      <div className={styles.social}>
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener"
            aria-label={social.label}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d={social.path}></path>
            </svg>
          </a>
        ))}
      </div>
    </aside>
  );
}
