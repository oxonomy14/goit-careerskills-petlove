// validationSchemaPet.js
import * as Yup from 'yup';

export const petSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),

  title: Yup.string().required('Title is required'),

  imgURL: Yup.string()
    .required('Pet image is required')
    .test('is-valid-image', 'Enter image URL or upload photo', value => {
      if (!value) return false;

      return (
        /^https?:\/\/.+/i.test(value) ||
        /^data:image\/[a-zA-Z]+;base64,/.test(value)
      );
    }),

  species: Yup.string().required('Species is required'),

  sex: Yup.string().required('Sex is required'),

  birthday: Yup.string()
    .required('Date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD'),
});
