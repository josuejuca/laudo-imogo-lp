import styles from "./styles.module.css";
import bgSectionBeneficios from "../../assets/img/bg-SectionBeneficios.png";

export function SectionBeneficios() {
  return (
    <section
      className={styles.sectionBeneficios}
      style={{ backgroundImage: `url(${bgSectionBeneficios})` }}
    >
      <div className={styles.wrapper}>
        {/* Lado esquerdo: bloco roxo com conteúdo */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
            <p className={styles.subtitle}>Invista na venda de imóveis</p>

            <h2 className={styles.title}>
              A imo<span>Go</span> descomplica <br />
              para você!
            </h2>

            <p className={styles.description}>
              Nossa tecnologia oferece <strong>gratuitamente</strong>:
            </p>

            <ul className={styles.list}>
              <li>o melhor preço para a venda;</li>
              <li>análise da documentação;</li>
              <li>imagens de alta qualidade do seu imóvel;</li>
              <li>anúncios de alta performance;</li>
              <li>visitas com interessados aptos para a compra;</li>
              <li>contratos validados;</li>
              <li>
                corretores verificados para acompanhar a visita, a negociação e
                a concretização da venda;
              </li>
            </ul>

            <p className={styles.footerText}>
              Tudo isso com <strong>agilidade, segurança e praticidade.</strong>
            </p>
          </div>
        </div>

        {/* Lado direito: apenas a imagem de fundo */}
        <div className={styles.right} />
      </div>
    </section>
  );
}
