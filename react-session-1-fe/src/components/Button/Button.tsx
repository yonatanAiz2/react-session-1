import { useFormikContext } from "formik";
import { FC, ButtonHTMLAttributes } from "react";
import * as S from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  colorType = "primary",
  ...buttonProps
}) => {
  return (
    <S.Button colorType={colorType} type="button" tabIndex={1} {...buttonProps}>
      {children}
    </S.Button>
  );
};

export const FormikSubmitButton = () => {
  const { isValid } = useFormikContext();
  return (
    <Button disabled={!isValid} type="submit">
      Submit
    </Button>
  );
};

export default Button;
