import css from './AddPetForm.module.css';
import { useDispatch } from 'react-redux';
import { addPet } from '../../redux/auth/authOperations';
import { petSchema } from './PetSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const AddPetForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
     control,  
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

  const speciesOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'monkey', label: 'Monkey' },
  { value: 'bird', label: 'Bird' },
  { value: 'snake', label: 'Snake' },
  { value: 'turtle', label: 'Turtle' },
  { value: 'lizard', label: 'Lizard' },
  { value: 'frog', label: 'Frog' },
  { value: 'fish', label: 'Fish' },
  { value: 'ants', label: 'Ants' },
  { value: 'bees', label: 'Bees' },
  { value: 'butterfly', label: 'Butterfly' },
  { value: 'spider', label: 'Spider' },
  { value: 'scorpion', label: 'Scorpion' },
];


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
        <div className={css.sexWrapper}>
          <div className={css.sexOptions}>
            <label className={css.sexItem}>
              <input
                type="radio"
                value="female"
                {...register('sex')}
                className={css.hiddenRadio}
              />
              <div className={css.iconBoxFemale}>
                <svg className={css.femaleIcon}>
                  <use href={`/icons/sprite.svg#icon-female`} />
                </svg>
              </div>
            </label>

            <label className={css.sexItem}>
              <input
                type="radio"
                value="male"
                {...register('sex')}
                className={css.hiddenRadio}
              />
              <div className={css.iconBoxMale}>
                <svg className={css.maleIcon}>
                  <use href={`/icons/sprite.svg#icon-male`} />
                </svg>
              </div>
            </label>

            <label className={css.sexItem}>
              <input
                type="radio"
                value="unknown"
                {...register('sex')}
                className={css.hiddenRadio}
              />
              <div className={css.iconBoxMultiple}>
                <svg className={css.multipleIcon}>
                  <use href={`/icons/sprite.svg#icon-multiple`} />
                </svg>
              </div>
            </label>
          </div>

          {errors.sex && <p className={css.error}>{errors.sex.message}</p>}
        </div>

          <div className={css.petImageEmpty}>
                    <div className={css.petImageWrap}>
        
                      
                 <svg className={css.footImageIcon}>
                  <use href={`/icons/sprite.svg?v=${Date.now()}#icon-foot`} />
                </svg>
                </div>
              
                    </div>


<div className={css.urlphotoPetWraper}>
    <div>        <input
          {...register('imgURL')}
          placeholder="Enter photo URL"
          className={css.photoPetInputUrl}
        />
        {errors.imgURL && <p className={css.error}>{errors.imgURL.message}</p>}</div>
        <div className={css.uploadFileWraper}>
            <p>Upload  photo</p>
 <svg className={css.uploadIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-upload-cloud`} />
            </svg>
        </div>
</div>



        {/* Title */}
        <input
          {...register('title')}
          placeholder="Title"
          className={css.petFormInput}
        />
        {errors.title && <p className={css.error}>{errors.title.message}</p>}

        {/* Name */}
        <input
          {...register('name')}
          placeholder="Pet's Name"
          className={css.petFormInput}
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}

<div className={css.inputBirthdaySpecies}>
        {/* Birthday */}
        <input
          type="date"
          {...register('birthday')}
          className={css.inputBirthday}
        />
        {errors.birthday && (
          <p className={css.error}>{errors.birthday.message}</p>
        )}

 {/* Species */}
    {/*   <select
  {...register('species')}
  className={css.selectSpecies}
>
  <option value="">Type of pet</option>

  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="monkey">Monkey</option>
  <option value="bird">Bird</option>
  <option value="snake">Snake</option>
  <option value="turtle">Turtle</option>
  <option value="lizard">Lizard</option>
  <option value="frog">Frog</option>
  <option value="fish">Fish</option>
  <option value="ants">Ants</option>
  <option value="bees">Bees</option>
  <option value="butterfly">Butterfly</option>
  <option value="spider">Spider</option>
  <option value="scorpion">Scorpion</option>
</select>

{errors.species && (
  <p className={css.error}>{errors.species.message}</p>
)} */}

<Controller
  name="species"
  control={control}
  render={({ field }) => (
    <Select
      {...field}
      options={speciesOptions}
      placeholder="Select species"
      onChange={option => field.onChange(option.value)}
      value={speciesOptions.find(
        option => option.value === field.value
      )}
       styles={{
    control: (base, state) => ({
      ...base,
      borderRadius: '12px',
      borderColor: state.isFocused ? '#f59256' : '#ccc',
      boxShadow: 'none',
      padding: '4px',
      '&:hover': {
        borderColor: '#f59256',
      },
    }),
    menu: base => ({
      ...base,
      borderRadius: '12px',
      overflow: 'hidden',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? '#f59256'
        : state.isFocused
        ? '#fff4ec'
        : 'white',
      color: state.isSelected ? 'white' : '#111',
      cursor: 'pointer',
    }),
  }}
    />
  )}
/>

{errors.species && (
  <p className={css.error}>{errors.species.message}</p>
)}
</div>


       



       
        <div className={css.btnWrapper}>
        <Link to="/profile" className={css.cancelBtn}>Back</Link>
        <button type="submit" disabled={isSubmitting} className={css.submitBtn}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
