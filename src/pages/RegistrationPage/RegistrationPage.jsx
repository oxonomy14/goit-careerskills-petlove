import css from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import PetBlock from '../../components/PetBlock/PetBlock';

const RegistrationPage = () => {
  return (
    <section>
      <div className={css.wrapper}>
        <div>
          <PetBlock
            petImage="img/petImageReg-desk@x1.webp"
            petAvatar="img/avatarDog.png"
            petName="Rich"
            petBirthdayDate="21.09.2020"
            petAbout="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
          />
        </div>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
