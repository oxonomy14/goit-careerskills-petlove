import AddPet from '../AddPet/AddPet';
import css from './PetsBlock.module.css';
import PetsList from '../PetsList/PetsList';
import PetsItem from '../PetsItem/PetsItem';
import {selectPets} from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';

const PetsBlock = () => {

    const pets = useSelector(selectPets);

    return (
        <>
        <div className={css.petsBlockWrap}>
            <AddPet />
        </div>
        <div className={css.petsListWrap}>
           
            <PetsList>   
                 {pets.map(pet=>(         
            <PetsItem pet={pet} key={pet._id}/>
             ))}
            </PetsList>
           </div>
        </>
    );
};

export default PetsBlock;