import css from './ModalEditUser.module.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { selectUser, selectIsLoading } from '../../redux/auth/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserSchema } from '../../hooks/ validationSchemaUserEdit';
import toast from 'react-hot-toast';
import { updateUser } from '../../redux/auth/authOperations';

const modalRoot = document.body;

const ModalEditUser = ({
  onClose,
  showCloseBtn = true,
  closeOnBackdrop = true,
  closeOnEsc = true,
}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  const [avatarPreview, setAvatarPreview] = useState('');

  useEffect(() => {
    const handleEsc = e => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose, closeOnEsc]);

  const handleBackdropClick = e => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
      avatar: user.avatar || '',
      phone: user.phone || '',
    },
  });

  const avatarValue = watch('avatar');

  useEffect(() => {
    if (avatarValue instanceof File) {
      const previewUrl = URL.createObjectURL(avatarValue);
      setAvatarPreview(previewUrl);

      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    }

    setAvatarPreview(
      typeof avatarValue === 'string' ? avatarValue : user.avatar || '',
    );
  }, [avatarValue, user.avatar]);

  const handleImageUpload = event => {
    const file = event.target.files?.[0];
    if (!file) return;

    setValue('avatar', file, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleAvatarUrlChange = event => {
    const value = event.target.value;

    setValue('avatar', value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = async data => {
    try {
      await dispatch(updateUser(data)).unwrap();
      onClose();
    } catch (error) {
      toast.error(error || 'Something went wrong');
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {showCloseBtn && (
          <button type="button" className={css.closeBtn} onClick={onClose}>
            <svg className={css.xIcon}>
              <use href={`/icons/sprite.svg#icon-x`} />
            </svg>
          </button>
        )}

        <div className={css.content}>
          <h2 className={css.title}>Edit information</h2>

          <div className={css.userImageEmpty}>
            <div className={css.userImageWrap}>
              {avatarPreview ? (
                <img
                  className={css.userImageAvatar}
                  src={avatarPreview}
                  alt={user.name}
                  onError={() => setAvatarPreview('')}
                />
              ) : (
                <svg className={css.userImageIcon}>
                  <use href={`/icons/sprite.svg#icon-user`} />
                </svg>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.urlAvatarWraper}>
              <div>
                <input
                  type="text"
                  value={typeof avatarValue === 'string' ? avatarValue : ''}
                  onChange={handleAvatarUrlChange}
                  placeholder="Avatar URL"
                  className={css.editUserInputUrl}
                />
                {errors.avatar && (
                  <p className={css.error}>{errors.avatar.message}</p>
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
              {...register('name')}
              placeholder="Name"
              className={css.editUserInput}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}

            <input
              {...register('email')}
              placeholder="Email"
              className={css.editUserInput}
            />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}

            <input
              {...register('phone')}
              placeholder="+380XXXXXXXXX"
              className={css.editUserInput}
            />
            {errors.phone && (
              <p className={css.error}>{errors.phone.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.editUserBtn}
            >
              {isLoading ? <span>...</span> : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalEditUser;
