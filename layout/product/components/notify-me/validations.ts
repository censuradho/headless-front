import * as yup from "yup";

export const notifyMeValidationSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
});
