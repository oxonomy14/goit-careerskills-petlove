import css from './PetsList.module.css';

const PetsList = ({children}) => {
    return (<>
    <ul className={css.petsList}>
    {children}
    </ul>
    </>);
};

export default PetsList;