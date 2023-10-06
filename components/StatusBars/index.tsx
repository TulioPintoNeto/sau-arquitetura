import styles from "./styles.module.scss";
import Container from "./../Container/index";
import { LinearProgress } from "@mui/material";

const StatusBars = () => {
    return (
        <section className={styles.statusBarSection}>
            <Container verticalPadding>
                <p className={styles.paragraph}>
                    Nosso trabalho é mais do que construir casas, é projetar
                    cada detalhe, para que a execução corresponda o seu sonho
                </p>
                <div className={styles.content}>
                    <div>
                        <div className={styles.numberBox}>
                            <p>62.000 Metros construídos</p>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                        <div className={styles.numberBox}>
                            <p>73 sonhos realizados</p>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                    </div>
                    <div>Image</div>
                </div>
            </Container>
        </section>
    );
};

export default StatusBars;
