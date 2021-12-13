import * as Yup from "yup";
import { Form, Formik } from "formik";
import * as S from "./Login.style";
import { FormikSubmitButton } from "../../components/Button/Button";
import { FormikInput } from "../../components/Input/Input";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../store/auth/auth.actions";
import axiosInstance from "../../utils/axiosInstance";
import { useHistory } from "react-router-dom";

const validationSchema = () =>
  Yup.object({
    identifier: Yup.string().required().min(3),
    password: Yup.string().required().min(6),
  });

const initialState: LoginPayload = { identifier: "", password: "" };

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = async (auth: LoginPayload) => {
    dispatch(loginRequest());
    try {
      const { data } = await axiosInstance.post<AuthResponse>(
        "/auth/local",
        auth
      );
      dispatch(loginSuccess(data));
      history.push("/");
    } catch (e) {
      dispatch(loginFailure());
    }
  };

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
