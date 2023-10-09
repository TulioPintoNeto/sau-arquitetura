import Container from "../Container";
import styles from "./styles.module.scss";
import _Button from "../Button";
import { Logo } from "../Logo";

type ButtonProps = {
  href: string;
  text: string;
};

const Button = ({ href, text }: ButtonProps) => (
  <_Button
    className={styles.menuButton}
    href={href}
    //@ts-ignore
    target="_blank"
    transparent
  >
    {text}
  </_Button>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.row}>
          <Logo />
          <div className={styles.menu}>
            <Button href="#sobre" text="Sobre" />
            <Button href="#servicos" text="Serviços" />
            <Button href="#depoimentos" text="Depoimentos" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
