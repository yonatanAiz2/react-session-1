import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import * as S from "./Input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...inputProps }: InputProps) => {
  return (
    <S.InputContainer>
      <S.Input {...inputProps} />
      {/* <S.IconContainer>{icon}</S.IconContainer> */}
    </S.InputContainer>
  );
};

// export const FormikInput = (props: InputProps) => {
//   const [field, meta] = useField(props.name || "");

//   return (
//     <div>
//       <Input {...props} {...field} value={field.value || ""} />
//       {meta.error && meta.touched && <S.ErrorText>{meta.error}</S.ErrorText>}
//     </div>
//   );
// };
