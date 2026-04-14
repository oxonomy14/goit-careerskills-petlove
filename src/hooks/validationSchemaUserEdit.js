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

  avatar: Yup.mixed()
    .required('Avatar is required')
    .test(
      'avatar-validation',
      'Enter valid image URL or upload photo',
      value => {
        if (!value) return false;

        if (value instanceof File) {
          return value.type.startsWith('image/');
        }

        if (typeof value === 'string') {
          return /^https?:\/\/.+/i.test(value);
        }

        return false;
      },
    ),

  phone: Yup.string()
    .matches(/^\+38\d{10}$/, 'Phone must match +38XXXXXXXXXX')
    .required('Phone is required'),
});
