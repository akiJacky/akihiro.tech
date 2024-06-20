import "@/styles/globals.css";
import indexstyles from "@/styles/index.module.css";
import homestyles from "@/styles/Home.module.css";
import styles from "@/styles/layout.module.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const menuFunction = () => {
    setOpenMenu((open) => !open);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.menu} onClick={menuFunction}>
            <span />
            <span />
            <span />
          </div>
          <Link className={styles.hero} href="/">
            $ akihironakano.dev
          </Link>
        </div>
        <div className={styles.headerRight}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeButton}
          >
            {darkMode ? "🌝/🌥️" : "🌒/🌞"}
          </button>
        </div>
      </header>
      {openMenu && (
        <>
          <div className={styles.overlay} onClick={menuFunction}></div>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </nav>
        </>
      )}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
