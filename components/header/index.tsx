import Image from "next/image";
import Container from "../Container";
import styles from "./styles.module.scss";
import Button from "../Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.row}>
                    <div className={styles.imageBox}>
                        <Image
                            src="/sau-logo.png"
                            alt="Logo da SAU - Somos Arquitetura e Urbanismo"
                            height="50"
                            width="203"
                        />
                    </div>
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
