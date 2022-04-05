import { object, string } from "yup";

export const userValidationSchema = object().shape({
  name: string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  message: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: string().email("Invalid email").required("Required"),
  phone: string().required("Required"),
});
