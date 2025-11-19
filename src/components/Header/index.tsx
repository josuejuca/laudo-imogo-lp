import { useState } from "react";
import styles from "./styles.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/imogo.svg" alt="Imogo Logo" />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="https://www.imogo.com.br/" target="_blank" aria-label="Ir para Home" title="Ir para Home">Home</a>
          <a href="https://www.imogo.com.br/#features"  target="_blank" aria-label="Ir para Serviços" title="Ir para Serviços" >Serviços</a>
          <a href="/">Avaliador</a>
          <a href="https://app.imogo.com.br/" target="_blank" aria-label="Ir para App" title="Ir para App">App</a>
        </nav>
      </div>
    </header>
  );
}
