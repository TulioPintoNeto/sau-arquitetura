import { Button as MuiButton, ButtonProps } from "@mui/material";
const Button = (props: ButtonProps) => {
    return <MuiButton color="primary" variant="outlined" {...props} />;
};

export default Button;
