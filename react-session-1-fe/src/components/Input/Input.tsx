import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";
import * as S from "./Input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

export const Input = ({ icon, ...inputProps }: InputProps) => {
  return (
    <S.InputContainer>
      <S.Input hasIcon={!!icon} {...inputProps} />
      <S.IconContainer>{icon}</S.IconContainer>
    </S.InputContainer>
  );
};

export const SearchInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <Input {...props} icon={<FaSearch />} />;
};

export const FormikInput = (props: InputProps) => {
  const [field, meta] = useField(props.name || "");

  return (
    <div>
      <Input {...props} {...field} value={field.value || ""} />
      {meta.error && meta.touched && <S.ErrorText>{meta.error}</S.ErrorText>}
    </div>
  );
};
