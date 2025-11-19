import styles from "./styles.module.css";
import bgSectionApp from "../../assets/img/bg-SectionApp.png";

export function SectionApp() {
  return (
    <section
      className={styles.sectionApp}
      style={{ backgroundImage: `url(${bgSectionApp})` }}
    >
      <div className={styles.contentWrapper}>
        {/* Lado esquerdo apenas com a imagem de fundo */}
        <div className={styles.left} />

        {/* Lado direito com texto e botão */}
        <div className={styles.right}>
          <div className={styles.textBox}>
            <p className={styles.subtitle}>Quer vender seu imóvel?</p>

            <h2 className={styles.title}>
              Anuncie com a imo<span>Go</span>!
              </h2>

            <p className={styles.description}>
              Aqui você garante o <strong>melhor preço de venda</strong> sem
              perder tempo e dinheiro.
            </p>

            <a href="https://app.imogo.com.br/" title="Ir para imoGo App" aria-label="Ir para imoGo App" target="_blank" className={styles.button}>Anunciar meu imóvel!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
