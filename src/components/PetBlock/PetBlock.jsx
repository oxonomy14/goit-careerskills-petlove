import css from './PetBlock.module.css';

const PetBlock = ({ petImage, petAvatar, petName, petBirthdayDate, petAbout }) => {
  return (
    <div className={css.petBlock}>
      <div className={css.petImage}>
        <img src={petImage} alt="pet image" />
      </div>
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
    </div>
  );
};

export default PetBlock;
