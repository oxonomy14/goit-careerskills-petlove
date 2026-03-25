import PetBlock from '../../components/PetBlock/PetBlock';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import ModalCongrats from '../../components/ModalCongrats/ModalCongrats';
import { useState } from 'react';
import css from './AddPetPage.module.css';

const AddPetPage = () => {
  const [isModalCongratsOpen, setIsModalCongratsOpen] = useState(false);
  const openModalCongrats = () => setIsModalCongratsOpen(true);
  const closeModalCongrats = () => setIsModalCongratsOpen(false);

  return (
    <>
      <section className={css.sectionAddPetPage}>
        <div className={css.AddPetPageWrapper}>
          <PetBlock petImage="petImageAddPage" variant="addPet" />
          <AddPetForm onSuccess={openModalCongrats} />
        </div>
      </section>
      <ModalCongrats
        isOpen={isModalCongratsOpen}
        onClose={closeModalCongrats}
      />
    </>
  );
};

export default AddPetPage;
