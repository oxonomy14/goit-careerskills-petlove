import PetBlock from '../../components/PetBlock/PetBlock';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import css from './AddPetPage.module.css';

const AddPetPage = () => {
    return (<>
    <section className={css.sectionAddPetPage}>
        <div className={css.AddPetPageWrapper}>
            <PetBlock
              petImage="img/petImageAddPage-desk@x2.webp"
              />
<AddPetForm/>
        </div>

    </section>
    </>);
};

export default AddPetPage;