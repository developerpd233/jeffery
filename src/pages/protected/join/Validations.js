import * as Yup from 'yup';

const scheme = Yup.object().shape({
    email: Yup.string()
    .required("Please enter email address")
    .email("Please enter valid email address"),
    userName: Yup.string()
    .required("Please enter user name"),
    description: Yup.string()
    .required("Please enter description")
});

export default scheme;
