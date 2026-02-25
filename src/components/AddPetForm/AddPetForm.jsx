import css from './AddPetForm.module.css';
import { useDispatch } from 'react-redux';
import { addPet } from '../../redux/auth/authOperations';
import { petSchema } from './PetSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

const AddPetForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(petSchema),
    defaultValues: {
      name: '',
      title: '',
      imgURL: '',
      species: '',
      birthday: '',
      sex: '',
    },
  });

  const onSubmit = async values => {
    try {
      await dispatch(addPet(values)).unwrap();
      toast.success('Pet added successfully');
      reset();
      onSuccess?.();
    } catch (error) {
      toast.error(error || 'Something went wrong');
    }
  };

  return (
    <div className={css.AddPetFormWrapper}>
      <h2 className={css.title}>
        Add my pet / <span>Personal details</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Image URL */}
        <input
          {...register('imgURL')}
          placeholder="Enter photo URL"
          className={css.petFormInput}
        />
        {errors.imgURL && (
          <p className={css.error}>{errors.imgURL.message}</p>
        )}

        {/* Title */}
        <input
          {...register('title')}
          placeholder="Title"
          className={css.petFormInput}
        />
        {errors.title && (
          <p className={css.error}>{errors.title.message}</p>
        )}

        {/* Name */}
        <input
          {...register('name')}
          placeholder="Pet's Name"
          className={css.petFormInput}
        />
        {errors.name && (
          <p className={css.error}>{errors.name.message}</p>
        )}

        {/* Species */}
        <input
          {...register('species')}
          placeholder="Species (dog/cat)"
          className={css.petFormInput}
        />
        {errors.species && (
          <p className={css.error}>{errors.species.message}</p>
        )}

        {/* Birthday */}
        <input
          type="date"
          {...register('birthday')}
          className={css.petFormInput}
        />
        {errors.birthday && (
          <p className={css.error}>{errors.birthday.message}</p>
        )}

        {/* Sex */}
        <select {...register('sex')} className={css.petFormInput}>
          <option value="">Select sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
        {errors.sex && (
          <p className={css.error}>{errors.sex.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={css.submitBtn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;