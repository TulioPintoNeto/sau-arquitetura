import _Button from "../Button";
import styles from "./styles.module.scss";

type ButtonProps = {
  href: string;
  text: string;
};

const Button = ({ href, text }: ButtonProps) => (
  <_Button
    className={styles.button}
    href={href}
    //@ts-ignore
    target="_blank"
    transparent
  >
    {text}
  </_Button>
);

const CallUs = () => {
  return (
    <div className={styles.callUs}>
      <div>Entre em contato conosco agora</div>
      <div>
        <Button
          href="https://api.whatsapp.com/send?phone=5553981505549"
          text="Whats App"
        />
        <Button href="tel:+5553981505549" text="Telefone" />
        <Button href="mailto:sau.arquitetura@gmail.com" text="E-mail" />
      </div>
    </div>
  );
};

export default CallUs;
