import * as Yup from "yup";
import { Form, Formik } from "formik";
import * as S from "./Login.style";
import { FormikSubmitButton } from "../../components/Button/Button";
import { FormikInput, Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <S.Container>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("values");
        }}
      >
        <Input placeholder="email" name="identifier" />
        <Input type="password" placeholder="password" name="password" />
        <Button type="submit">Submit</Button>
      </form>
    </S.Container>
  );
};

export default Login;
