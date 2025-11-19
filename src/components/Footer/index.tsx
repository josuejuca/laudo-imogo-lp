import styles from "./styles.module.css";

import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import linkedinIcon from "../../assets/icons/ln.png";
import youtubeIcon from "../../assets/icons/youtube.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Parte de cima: logo + redes */}
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src="/imogo.svg" alt="Imogo Logo" />
        </div>

        <div className={styles.social}>
          <a href="https://www.instagram.com/imogoapp/" target="_blank" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/imogoapp/" target="_blank" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/90368105/admin/feed/posts/?feedType=following" target="_blank" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@imoGoapp" target="_blank" aria-label="YouTube">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Parte de baixo: textos */}
      <div className={styles.bottom}>
        <p>SCN Quadra 05 Bl A - Brasília Shopping - Torre Norte - Asa Norte, Brasília - DF 70715-900 <br /> Site de propriedade da imoGo. Todos os direitos são reservados. Ao navegar por esse site e usar nossos serviços, você concorda com o nosso Aviso de Privacidade e Política de Privacidade <br />IMOGO IMOBILIARIA, PUBLICICIDADE, REPRESENTACAO E TECNOLOGIA DA INFORMACAO LTDA. CNPJ: 50.509.002/0001-89. CRECI: 30152.</p>
        <p className={styles.powered}>&copy; {new Date().getFullYear()} imoGo | Developed by: <a href="https://josuejuca.com" target="_blank">Juca</a></p>
        <div className={styles.statusWrapper}>
          <iframe
            src="https://status.imogo.com.br/badge"
            frameBorder="0"
            scrolling="no"
            title="Status Imogo"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
