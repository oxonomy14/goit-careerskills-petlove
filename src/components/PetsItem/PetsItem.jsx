import css from './PetsItem.module.css';
import {removePet} from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const PetsItem = ({pet}) => {

const dispatch = useDispatch();

 const handleRemove = () => {
    dispatch(removePet(pet._id)); 
  };

     const formattedSex =
    pet.sex.charAt(0).toUpperCase() + pet.sex.slice(1);
      const formattedSpecies =
    pet.species.charAt(0).toUpperCase() + pet.species.slice(1);

    return (<>
    <li>
        <div className={css.petItemWrapper}>
            <div >
                <img className={css.petImage} src={pet.imgURL} alt={pet.name} />
            </div>
            <div className={css.petDetails}>
                <h3 className={css.title}>{pet.title}</h3>
                <ul className={css.petInfoList}>
                    <li className={css.petInfoItem}>
                        <p className={css.petInfoItemTitle}>Name</p>
                        <p className={css.petInfoItemDesc}>{pet.name}</p>
                    </li>
                       <li className={css.petInfoItem}>
                        <p className={css.petInfoItemTitle}>Birthday</p>
                        <p className={css.petInfoItemDesc}>{pet.birthday  ? new Date(pet.birthday).toLocaleDateString('uk-UA')
              : ''}</p>
                    </li>
                          <li className={css.petInfoItem}>
                        <p className={css.petInfoItemTitle}>Sex</p>
                        <p className={css.petInfoItemDesc}>{formattedSex}</p>
                    </li>
                          <li className={css.petInfoItem}>
                        <p className={css.petInfoItemTitle}>Species</p>
                        <p className={css.petInfoItemDesc}>{formattedSpecies}</p>
                    </li>
                  
                  
                </ul>
                     </div>
              <button className={css.btnTrash} onClick={handleRemove}>
                    <svg className={css.trashIcon}>
                      <use
                        href={`/icons/sprite.svg?v=${Date.now()}#icon-trash`}
                      />
                    </svg>
                  </button>
       

        </div>
    </li>
    </>);
};

export default PetsItem;