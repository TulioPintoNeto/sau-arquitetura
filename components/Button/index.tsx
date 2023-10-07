import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import CN from "classnames";
import styles from "./styles.module.scss";

type ButtonProps = MuiButtonProps & {
  transparent?: boolean;
};

const Button = ({ transparent, ...props }: ButtonProps) => {
  return (
    <MuiButton
      className={CN(props.className, {
        [styles.transparent]: transparent,
      })}
      color="primary"
      variant="outlined"
      {...props}
    />
  );
};

export default Button;
