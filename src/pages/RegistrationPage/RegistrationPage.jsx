import css from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import PetBlock from '../../components/PetBlock/PetBlock';

const RegistrationPage = () => {
  return (
    <section className={css.sectionRegistrationPage}>
      <div className={css.wrapper}>
        <div>
          <PetBlock
            petImage="petImageReg"
            petAvatar="img/avatarCat.png"
            petName="Jack"
            petBirthdayDate="18.10.2021"
            petAbout="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
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
