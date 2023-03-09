import Image from "next/image";
import Container from "../Container";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.row}>
                    <div className={styles.firstItemsBox}>
                        <div>Home</div>
                        <div>Portfólio</div>
                        <div>Sobre</div>
                        <div>Contato</div>
                    </div>
                    <div className={styles.imageBox}>
                        <Image
                            src="/sau-logo.jpg"
                            alt="Logo da SAU - Somos Arquitetura e Urbanismo"
                            height="80"
                            width="80"
                        />
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
