import * as Yup from "yup";
import { Form, Formik } from "formik";
import * as S from "./Register.style";
import { FormikSubmitButton } from "../../components/Button/Button";
import { FormikInput } from "../../components/Input/Input";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

interface RegisterPayloadWithRePassword extends RegisterPayload {
  rePassword: string;
}

const initialState: RegisterPayloadWithRePassword = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

const validationSchema = () =>
  Yup.object({
    username: Yup.string().required().min(3),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
    rePassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

const Register = () => {
  const { register } = useAuthContext();

  return (
    <S.Container>
      <h1>Register</h1>
      <Formik
        validateOnMount
        validationSchema={validationSchema}
        initialValues={initialState}
        onSubmit={register}
      >
        <Form>
          <FormikInput placeholder="username" name="username" />
          <FormikInput placeholder="email" name="email" />
          <FormikInput type="password" placeholder="password" name="password" />
          <FormikInput
            type="password"
            placeholder="rePassword"
            name="rePassword"
          />
          <FormikSubmitButton />
        </Form>
      </Formik>
    </S.Container>
  );
};

export default Register;
