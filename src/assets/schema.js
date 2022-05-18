import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string()
        .required("Email is required")
        .email("Email is not valid"),
    password: yup.string()
        .required("Password is required")
})

export const registerSchema = yup.object().shape({
    first_name: yup.string()
        .required("First name is required")
        .typeError("First name must be in alphabets")
        .max(50, "First name must not exceed 50 characters"),
    last_name: yup.string()
        .required("Last name is required")
        .typeError("Last name must be in alphabets")
        .max(50, "Last name must not exceed 50 characters"),
    register_email: yup.string()
        .required("Email is required")
        .email("Email is not valid"),
    register_password: yup.string()
        .required("Password is required")
        .min(8, "Password must be 8 characters or more")
        .matches(/[a-z]+/, "Password must have one lowercase character")
        .matches(/[A-Z]+/, "Password must have one uppercase character")
        .matches(/\d+/, "Password must have one number"),
    confirm_password: yup.string()
        .required("Confirm password is required")
        .oneOf([yup.ref('register_password'), null], 'Passwords do not match')
})

export const addToCartQuantitySchema = yup.object().shape({
    quantity: yup.number()
        .typeError('Quantity must be a number')
        .required("Quantity is required")
        .min(1, 'Quantity must be more than 1'),
    variant_id: yup.string()
        .required("Please select an option")
        .min(1, "Please select an option")
})

export const updateCartQuantitySchema = yup.object().shape({
    quantity: yup.number()
        .typeError('Quantity must be a number')
        .required("Quantity is required")
        .min(1, 'Quantity must be more than 1')
})