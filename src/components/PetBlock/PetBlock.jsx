import css from './PetBlock.module.css';
import { useMediaQuery } from 'react-responsive';

const PetBlock = ({
  variant = 'default',
  petImage,
  petAvatar,
  petName,
  petBirthdayDate,
  petAbout,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isAddPet = variant === 'addPet';

  return (
    <div className={css.petBlock}>
      {isDesktop && (
        <div className={css.petImage}>
          <img
            srcSet={`img/${petImage}-desk@x1.webp 1x, img/${petImage}-desk@x2.webp 2x`}
            src={`img/${petImage}-desk@x1.webp`}
            alt="pet image"
            width="592"
            height="654"
          />
        </div>
      )}

      {isTablet && (
        <div className={isAddPet ? css.petImageAddPet : css.petImage}>
          <img
            srcSet={`img/${petImage}-tab@x1.webp 1x, img/${petImage}-tab@x2.webp 2x`}
            src={`img/${petImage}-tab@x1.webp`}
            alt="pet image"
            width="704"
            height="302"
            className={css.petImage}
          />
        </div>
      )}

      {isMobile && (
        <div className={isAddPet ? css.petImageAddPet : css.petImage}>
          <img
            srcSet={`img/${petImage}-mob@x1.webp 1x, img/${petImage}-mob@x2.webp 2x`}
            src={`img/${petImage}-mob@x1.webp`}
            alt="pet image"
            width="335"
            height="280"
            className={css.petImage}
          />
        </div>
      )}

      {petAvatar && petName && petBirthdayDate && petAbout && (
        <div className={css.petInfo}>
          <div className={css.avatar}>
            <img src={petAvatar} alt="pet avatar" />
          </div>
          <div className={css.petDetail}>
            <div className={css.petHeader}>
              <h3 className={css.petName}>{petName}</h3>
              <p className={css.petBirthdayDate}>
                <span>Birthday:</span> {petBirthdayDate}
              </p>
            </div>
            <p className={css.petAbout}>{petAbout}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetBlock;
