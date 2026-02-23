import css from './ModalEditUser.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {selectUser, selectIsLoading} from '../../redux/auth/authSelector';
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

  useEffect(() => {
    const handleEsc = e => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    // блокування скролу
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

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

    const {
    register,
    handleSubmit,
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

  const onSubmit = async data => {
    try {
      await dispatch(updateUser(data)).unwrap();
      onClose(); // ✅ закриваємо тільки якщо success
    } catch (error) {
      toast.error(error.message || 'Something went wrong'); // ✅ показуємо notification
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {showCloseBtn && (
          <button className={css.closeBtn} onClick={onClose}>
            <svg className={css.xIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-x`} />
            </svg>
          </button>
        )}

        <div className={css.content}>
<h2 className={css.title}>Edit information</h2>
     <div className={css.userImageEmpty}>
            <div className={css.userImageWrap}>

                {user.avatar ? (<img className={css.userImageAvatar} src={user.avatar} alt={user.name} />) :
         (<svg className={css.userImageIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-user`} />
        </svg>)}
        </div>
      
            </div>
  <form onSubmit={handleSubmit(onSubmit)}>
<div className={css.urlAvatarWraper}>
    <div>        <input
          {...register('avatar')}
          placeholder="Avatar URL"
          className={css.editUserInputUrl}
        />
        {errors.avatar && <p className={css.error}>{errors.avatar.message}</p>}</div>
        <div className={css.uploadFileWraper}>
            <p>Upload  photo</p>
 <svg className={css.uploadIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-upload-cloud`} />
            </svg>
        </div>
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
        {errors.email && <p className={css.error}>{errors.email.message}</p>}

        <input
          {...register('phone')}
          placeholder="+380XXXXXXXXX"
          className={css.editUserInput}
        />
        {errors.phone && <p className={css.error}>{errors.phone.message}</p>}

        <button type="submit" disabled={isSubmitting} className={css.editUserBtn}>
         {isLoading ? (<span>...</span>) : ("Save")} 
        </button>

      </form>














  
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalEditUser;
