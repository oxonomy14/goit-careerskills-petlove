import css from './AddPet.module.css';
import { Link } from 'react-router-dom';

const AddPet = () => { 
    return (<>
    <div className={css.addPetWrap}>
        <h3 className={css.addPetTitle}>My pets</h3>
        <Link to="/add-pet" className={css.addPetLink}>
        Add pet +
        </Link>

    </div>
    </>);
};

export default AddPet;