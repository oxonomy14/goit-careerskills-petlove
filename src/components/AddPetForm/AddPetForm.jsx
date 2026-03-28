import css from './AddPetForm.module.css';
import { useDispatch } from 'react-redux';
import { addPet } from '../../redux/auth/authOperations';
import { petSchema } from './PetSchema';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { components as SelectComponents } from 'react-select';

const AddPetForm = ({ onSuccess }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const CustomDropdownIndicator = props => {
    return (
      <SelectComponents.DropdownIndicator {...props}>
        <svg className={css.iconchevron}>
          <use
            href={`/icons/sprite.svg#${
              menuOpen ? 'icon-selectUp' : 'icon-selectDown'
            }`}
          />
        </svg>
      </SelectComponents.DropdownIndicator>
    );
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
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

  const imgURLValue = watch('imgURL');

  const CustomDateInput = forwardRef(({ value, onClick, placeholder }, ref) => {
    const formatDisplayDate = val => {
      if (!val) return '';
      const [year, month, day] = val.split('-');
      if (!year || !month || !day) return val;
      return `${day}.${month}.${year}`;
    };

    return (
      <div className={css.dateWrapper} onClick={onClick}>
        <input
          ref={ref}
          value={formatDisplayDate(value)}
          placeholder={placeholder}
          readOnly
          className={css.inputBirthday}
        />
        <svg className={css.calendarIcon}>
          <use href={`/icons/sprite.svg#icon-calendar`} />
        </svg>
      </div>
    );
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

  const handleImageUpload = event => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;

      setValue('imgURL', base64Image, {
        shouldValidate: true,
        shouldDirty: true,
      });

      setPreviewImage(base64Image);
    };

    reader.readAsDataURL(file);
  };

  const handleImgUrlChange = e => {
    const value = e.target.value;

    setValue('imgURL', value, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setPreviewImage(value);
  };

  const onSubmit = async values => {
    try {
      await dispatch(addPet(values)).unwrap();
      toast.success('Pet added successfully');
      reset();
      setPreviewImage('');
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
              <div className={css.iconBoxFemale} tabIndex={0}>
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
            {previewImage ? (
              <img
                src={previewImage}
                alt="Pet preview"
                className={css.petPreviewImage}
                onError={() => setPreviewImage('')}
              />
            ) : (
              <svg className={css.footImageIcon}>
                <use href={`/icons/sprite.svg#icon-foot`} />
              </svg>
            )}
          </div>
        </div>

        <div className={css.urlphotoPetWraper}>
          <div>
            <input
              type="text"
              placeholder="Enter photo URL"
              className={css.photoPetInputUrl}
              value={imgURLValue || ''}
              onChange={handleImgUrlChange}
            />
            {errors.imgURL && (
              <p className={css.error}>{errors.imgURL.message}</p>
            )}
          </div>

          <label className={css.uploadFileWraper}>
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
            <p>Upload photo</p>
            <svg className={css.uploadIcon}>
              <use href={`/icons/sprite.svg#icon-upload-cloud`} />
            </svg>
          </label>
        </div>

        <input
          {...register('title')}
          placeholder="Title"
          className={css.petFormInput}
        />
        {errors.title && <p className={css.error}>{errors.title.message}</p>}

        <input
          {...register('name')}
          placeholder="Pet's Name"
          className={css.petFormInput}
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}

        <div className={css.inputBirthdaySpecies}>
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={
                  field.value
                    ? (() => {
                        const [year, month, day] = field.value.split('-');
                        return new Date(year, month - 1, day);
                      })()
                    : null
                }
                onChange={date => {
                  if (!date) {
                    field.onChange('');
                    return;
                  }

                  const formatted = `${date.getFullYear()}-${String(
                    date.getMonth() + 1,
                  ).padStart(2, '0')}-${String(date.getDate()).padStart(
                    2,
                    '0',
                  )}`;

                  field.onChange(formatted);
                }}
                dateFormat="dd.MM.yyyy"
                placeholderText="00.00.0000"
                customInput={<CustomDateInput />}
              />
            )}
          />

          {errors.birthday && (
            <p className={css.error}>{errors.birthday.message}</p>
          )}

          <Controller
            name="species"
            control={control}
            render={({ field }) => (
              <Select
                className={css.select}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: CustomDropdownIndicator,
                }}
                {...field}
                options={speciesOptions}
                placeholder="Type of pet"
                onChange={option => field.onChange(option.value)}
                value={speciesOptions.find(
                  option => option.value === field.value,
                )}
                onMenuOpen={() => setMenuOpen(true)}
                onMenuClose={() => setMenuOpen(false)}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderRadius: '30px',
                    borderColor: state.isFocused
                      ? 'var(--primary-color)'
                      : 'rgba(38, 38, 38, 0.15)',
                    boxShadow: 'transparent',
                    padding: isMobile ? '0 12px' : '0 16px',
                    '&:hover': {
                      borderColor: 'transparent',
                    },
                  }),
                  dropdownIndicator: base => ({
                    ...base,
                    padding: '0 2px',
                    margin: 0,
                  }),
                  valueContainer: base => ({
                    ...base,
                    padding: 0,
                    height: isMobile ? '42px' : '52px',
                  }),
                  indicatorsContainer: base => ({
                    ...base,
                    height: isMobile ? '42px' : '52px',
                    width: 'auto',
                    padding: 0,
                  }),
                  input: base => ({
                    ...base,
                    margin: '0',
                    padding: '0',
                  }),
                  singleValue: base => ({
                    ...base,
                    color: 'rgba(38, 38, 38, 0.6)',
                    fontSize: isMobile ? '14px' : '16px',
                    margin: '0',
                  }),
                  placeholder: base => ({
                    ...base,
                    color: 'rgba(38, 38, 38, 0.6)',
                    fontSize: isMobile ? '14px' : '16px',
                    margin: '0',
                  }),
                  menu: base => ({
                    ...base,
                    borderRadius: '15px',
                    overflow: 'hidden',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                      ? 'var(--primary-color)'
                      : state.isFocused
                        ? 'var(--primary-color)'
                        : 'transparent',
                    color: 'rgba(38, 38, 38, 0.6)',
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
          <Link to="/profile" className={css.cancelBtn}>
            Back
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className={css.submitBtn}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
