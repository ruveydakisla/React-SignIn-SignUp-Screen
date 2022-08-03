import * as yup from 'yup';
let userSchema = yup.object().shape({
    email: yup.string()
        .email()
        .required(),
    password: yup.string().required().min(5),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler Uyuşmuyor').required()
});
export default userSchema;

export let userSchema2 = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().required().min(5)
})
