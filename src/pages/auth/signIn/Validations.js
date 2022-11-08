import * as Yup from "yup";
import { validateNumberRegex } from "../../../utils/methods";

const scheme = (regex) =>
    Yup.object().shape({
        email: Yup.string()
        .required("Please enter email address")
        .email("Please enter valid email address"),
    password: Yup.string()
        .required("Please enter your password.")
        
    });

export default scheme;
