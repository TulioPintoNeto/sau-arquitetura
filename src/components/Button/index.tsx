import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CN from "classnames";
import styles from "./styles.module.scss";

interface ButtonProps extends MuiButtonProps {
  transparent?: boolean;
}

const Button = ({ transparent, ...props }: ButtonProps) => {
  return (
    <MuiButton
      {...props}
      className={CN(props.className, styles.button, {
        [styles.transparent]: transparent,
      })}
    />
  );
};

export default Button;
