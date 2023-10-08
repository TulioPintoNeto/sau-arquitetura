import Button from "../Button";
import * as styles from "./styles.module.scss";

const CallUs = () => {
  return (
    <div className={styles.callUs}>
      <div>Entre em contato conosco agora</div>
      <div>
        <Button className={styles.button} href="https://api.whatsapp.com/send?phone=5553981505549" transparent>
          Whats App
        </Button>
        <Button className={styles.button} href="tel:+5553981505549" transparent>
          Telefone
        </Button>
        <Button className={styles.button} href="mailto:sau.arquitetura@gmail.com" transparent>
          E-mail
        </Button>
      </div>
    </div>
  );
};

export default CallUs;
