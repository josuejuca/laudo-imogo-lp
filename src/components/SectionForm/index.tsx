import { FormLaudo } from "./FormLaudo";
import styles from "./styles.module.css";

export function SectionForm() {
  return (
    <section className={styles.sectionForm}>
      <div className={styles.wrapper}>
        {/* Coluna esquerda */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
            <p className={styles.subheading}>
              Faça uma avaliação <b>sem pagar nada!</b>
            </p>

            <h1 className={styles.title}>
              Quer descobrir quanto vale o seu <span>imóvel</span>?
            </h1>

            <p className={styles.text}>Experimente a avaliação precisa:</p>

            <ul className={styles.list}>
              <li>Volume de imóveis anunciados e vendidos no bairro;</li>
              <li>Valorização do m² na região;</li>
              <li>Perfil médio de moradores da região;</li>
              <li>Valor de mercado do imóvel.</li>
            </ul>

            <p className={styles.footerText}>
              Preencha o formulário e receba o laudo no seu{" "}
              <strong>WhatsApp</strong> e <strong>e-mail</strong>.
            </p>
          </div>
        </div>

        {/* Coluna direita (form) */}
        <div className={styles.right}>
          <div className={styles.rightInner}>
            <div className={styles.formPlaceholder}>
              <FormLaudo/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
