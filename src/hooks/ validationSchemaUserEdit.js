// validationSchemaUserEdit.js
import * as Yup from 'yup';

export const editUserSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),

  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format',
    )
    .required('Email is required'),

  avatar: Yup.string()
    .test(
      'avatar-format',
      'Avatar must be a valid image URL or uploaded image',
      value =>
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)(\?.*)?$/i.test(
          value || '',
        ) || /^data:image\/[a-zA-Z]+;base64,/.test(value || ''),
    )
    .required('Avatar photo is required'),

  phone: Yup.string()
    .matches(/^\+38\d{10}$/, 'Phone must match +38XXXXXXXXXX')
    .required('Phone is required'),
});
