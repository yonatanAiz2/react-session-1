import * as Yup from "yup";
import { Form, Formik } from "formik";
import * as S from "./Login.style";
import { FormikSubmitButton } from "../../components/Button/Button";
import { FormikInput } from "../../components/Input/Input";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

const validationSchema = () =>
  Yup.object({
    identifier: Yup.string().required().min(3),
    password: Yup.string().required().min(6),
  });

const initialState: LoginPayload = { identifier: "", password: "" };

const Login = () => {
  const { login } = useAuthContext();

  return (
    <S.Container>
      <h1>Login</h1>
      <Formik
        validateOnMount
        validationSchema={validationSchema}
        initialValues={initialState}
        onSubmit={login}
      >
        <Form>
          <FormikInput placeholder="email" name="identifier" />
          <FormikInput type="password" placeholder="password" name="password" />
          <FormikSubmitButton />
        </Form>
      </Formik>
    </S.Container>
  );
};

export default Login;
