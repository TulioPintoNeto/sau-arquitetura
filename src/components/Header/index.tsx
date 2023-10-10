import Container from "../Container";
import styles from "./styles.module.scss";
import _Button from "../Button";
import { Logo } from "../Logo";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import CN from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type ButtonProps = {
  href: string;
  onClick?: () => void;
  text: string;
};

const Button = ({ href, onClick, text }: ButtonProps) => (
  <_Button
    className={styles.menuButton}
    href={href}
    onClick={onClick}
    transparent
  >
    {text}
  </_Button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Logo />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer}
            edge="start"
            className={CN(styles.menuIcon, {
              [styles.hide]: isOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <nav className={styles.menu}>
            <Button href="#sobre" text="Sobre" />
            <Button href="#servicos" text="Serviços" />
            <Button href="#depoimentos" text="Depoimentos" />
          </nav>
          <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
            <nav className={styles.drawerContent}>
              <Button href="#sobre" onClick={closeDrawer} text="Sobre" />
              <Button href="#servicos" onClick={closeDrawer} text="Serviços" />
              <Button
                href="#depoimentos"
                onClick={closeDrawer}
                text="Depoimentos"
              />
            </nav>
          </Drawer>
        </div>
      </Container>
    </header>
  );
};

export default Header;
