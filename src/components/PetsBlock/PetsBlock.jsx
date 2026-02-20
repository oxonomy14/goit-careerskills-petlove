import AddPet from '../AddPet/AddPet';
import css from './PetsBlock.module.css';
import PetsList from '../PetsList/PetsList';
import PetsItem from '../PetsItem/PetsItem';

const PetsBlock = () => {
    return (
        <>
        <div className={css.petsBlockWrap}>
            <AddPet />
        </div>
        <div className={css.petsListWrap}><PetsList>
            
            <PetsItem/>
            </PetsList></div>
        </>
    );
};

export default PetsBlock;