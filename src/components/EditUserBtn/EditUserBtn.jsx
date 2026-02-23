import css from './EditUserBtn.module.css';






const EditUserBtn = ({openModal}) => {


    return (
        <>
        <button className={css.editUserBtn} onClick={openModal}>
              <svg className={css.editIcon}>
                      <use href={`/icons/sprite.svg?v=${Date.now()}#icon-edit`} />
                    </svg>
        </button>
        </>
    );
};

export default EditUserBtn;