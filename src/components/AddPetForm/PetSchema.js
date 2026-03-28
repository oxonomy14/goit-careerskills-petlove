// validationSchemaPet.js
import * as Yup from 'yup';

export const petSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),

  title: Yup.string().required('Title is required'),

  imgURL: Yup.string()
    .matches(/^data:image\/[a-zA-Z]+;base64,/, 'Please upload pet image')
    .required('Pet image is required'),

  species: Yup.string().required('Species is required'),

  sex: Yup.string().required('Sex is required'),

  birthday: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD')
    .required('Date is required'),
});
