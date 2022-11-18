import * as Yup from "yup";
import { validateNumberRegex } from "../../../utils/methods";

const scheme = (regex) =>
    Yup.object().shape({
        cardNo: Yup.string().required("Please enter your card number"),
        expDate: Yup.string().required("Please enter your expiry date"),
        cvv: Yup.string().required("Please enter your Cvv"),

        fname: Yup.string().required("Please enter your first name"),
        lname: Yup.string().required("Please enter your last name "),
        address: Yup.string().required("Please enter your address"),
        city: Yup.string().required("Please enter your city"),
        company: Yup.string().required("Please enter your State"),
        state: Yup.string().required("Please enter your State"),
        zipCode: Yup.string().required("Please enter your zipCode"),

        country: Yup.string().required("Please enter your country"),
    });

export default scheme;
