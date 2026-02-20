import css from './EditUserBtn.module.css';

const EditUserBtn = () => {
    return (
        <>
        <button className={css.editUserBtn} onClick={()=> alert("This button not yet work")}>
              <svg className={css.editIcon}>
                      <use href={`/icons/sprite.svg?v=${Date.now()}#icon-edit`} />
                    </svg>
        </button>
        </>
    );
};

export default EditUserBtn;