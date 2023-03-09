import Button from "../Button";
import * as styles from "./styles.module.scss";

const CallUs = () => {
    return (
        <div className={styles.callUs}>
            <div>Entre em contato conosco agora</div>
            <div>
                <Button className={styles.button} color="secondary" href="#">
                    Whats App
                </Button>
                <Button className={styles.button} color="secondary" href="#">
                    Telefone
                </Button>
                <Button className={styles.button} color="secondary" href="#">
                    E-mail
                </Button>
            </div>
        </div>
    );
};

export default CallUs;
