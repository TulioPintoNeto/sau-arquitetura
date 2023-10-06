import Image from "next/image";
import Container from "../Container";
import styles from "./styles.module.scss";

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
                        <div>Home</div>
                        <div>Portfólio</div>
                        <div>Sobre</div>
                        <div>Contato</div>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
