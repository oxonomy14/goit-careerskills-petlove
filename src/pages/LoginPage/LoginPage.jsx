import css from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import PetBlock from '../../components/PetBlock/PetBlock';

const LoginPage = () => {
  return (
    <section>
      <div className={css.wrapper}>
        <div>
          <PetBlock
            petImage="img/petImageLog-desk@x2.webp"
            petAvatar="img/avatarDog.png"
            petName="Rich"
            petBirthdayDate="21.09.2020"
            petAbout="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
          />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
