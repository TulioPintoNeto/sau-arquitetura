import Container from "../Container";
import styles from "./styles.module.scss";
import Button from "../Button";
import { Logo } from "../Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.row}>
                    <Logo />
                    <div className={styles.menu}>
                        <Button className={styles.menuButton} href="#sobre" transparent>Sobre</Button>
                        <Button className={styles.menuButton} href="#servicos" transparent>Serviços</Button>
                        <Button className={styles.menuButton} href="#depoimentos" transparent>Depoimentos</Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
