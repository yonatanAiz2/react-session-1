import { FC, ButtonHTMLAttributes } from "react";
import * as S from "./Button.style";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = () => {
  return <button>button</button>;
};

export default Button;

// import { useFormikContext } from "formik";

// export const FormikSubmitButton = () => {
//   const { isValid } = useFormikContext();
//   return (
//     <Button disabled={!isValid} type="submit">
//       Submit
//     </Button>
//   );
// };
