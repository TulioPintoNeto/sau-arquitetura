import Button from "../Button";
import * as styles from "./styles.module.scss";

const CallUs = () => {
  return (
    <div className={styles.callUs}>
      <div>Entre em contato conosco agora</div>
      <div>
        <Button className={styles.button} href="#" transparent>
          Whats App
        </Button>
        <Button className={styles.button} href="#" transparent>
          Telefone
        </Button>
        <Button className={styles.button} href="#" transparent>
          E-mail
        </Button>
      </div>
    </div>
  );
};

export default CallUs;
