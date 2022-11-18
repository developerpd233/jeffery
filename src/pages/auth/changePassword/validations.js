import * as Yup from "yup";
import { validateNumberRegex } from "../../../utils/methods";

const scheme = (regex) =>
    Yup.object().shape({
     
        password: Yup.string()
        .required("Please enter your password.")
        .min(8, "Password is too short - should be 8 chars minimum."),
        
        conformPassword: Yup.string()
        .required("Please enter your password.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        
        
    });

export default scheme;
