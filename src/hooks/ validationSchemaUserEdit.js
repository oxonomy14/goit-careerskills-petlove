// validationSchemaUserEdit.js
import * as Yup from 'yup';

export const editUserSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),

  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),

  avatar: Yup.string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Avatar must be a valid image URL'
    )
    .required('Avatar URL is required'),

  phone: Yup.string()
    .matches(/^\+38\d{10}$/, 'Phone must match +38XXXXXXXXXX')
    .required('Phone is required'),
});